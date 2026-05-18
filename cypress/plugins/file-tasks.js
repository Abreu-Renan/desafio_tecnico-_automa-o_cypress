const fs = require('fs');
const path = require('path');

function exists(filePath) {
  return new Promise((resolve) => {
    fs.access(filePath, fs.constants.F_OK, (err) => resolve(!err));
  });
}

async function findDownloadedFile(arg = {}) {
  const params = typeof arg === 'string' ? { filename: arg } : arg || {};
  const filename = params.filename || params.fileName || params.name;
  const timeout = typeof params.timeout === 'number' ? params.timeout : 15000;
  const pollInterval = 500;
  const downloadsFolder = params.downloadsFolder || path.resolve(process.cwd(), 'cypress', 'downloads');

  const endTime = Date.now() + timeout;

  const check = async () => {
    const files = await fs.promises.readdir(downloadsFolder).catch(() => []);
    if (filename) {
      const match = files.find((f) => f.includes(filename));
      if (match) return path.join(downloadsFolder, match);
    } else if (files.length) {
      // return newest file
      const sorted = await Promise.all(
        files.map(async (f) => {
          const p = path.join(downloadsFolder, f);
          const stat = await fs.promises.stat(p).catch(() => null);
          return { file: f, mtime: stat ? stat.mtimeMs : 0 };
        })
      );
      sorted.sort((a, b) => b.mtime - a.mtime);
      if (sorted.length && sorted[0].mtime > 0) return path.join(downloadsFolder, sorted[0].file);
    }
    return null;
  };

  while (Date.now() < endTime) {
    const found = await check();
    if (found) return found;
    await new Promise((r) => setTimeout(r, pollInterval));
  }

  return null;
}

module.exports = { findDownloadedFile };
