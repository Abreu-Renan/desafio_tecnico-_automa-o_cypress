class CadastroUsuarioManager {
  constructor() {
    this.usuario = null;
  }
  setUsuario(usuario) {
    this.usuario = usuario;
  }

  getUsuario() {
    return this.usuario;
  }
}

module.exports = new CadastroUsuarioManager();
