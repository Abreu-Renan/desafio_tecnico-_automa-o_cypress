const { faker } = require("@faker-js/faker");

function gerarUsuario() {
  const nome = faker.person.firstName();
  const sobrenome = faker.person.lastName();

  const nomeFormatado = nome
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  const numeroAleatorio = faker.number.int({ min: 1000, max: 9999 });
  const nomeCompleto = `${nome} ${sobrenome}`;
  const email = `${nomeFormatado}_${numeroAleatorio}@teste.com`;
  const senha = "Teste@123";
  const titulo = faker.helpers.arrayElement(["Mr", "Mrs"]);
  const diaNascimento = faker.number.int({ min: 1, max: 28 }).toString();
  const mesNascimento = faker.helpers.arrayElement([
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const anoNascimento = faker.number.int({ min: 1950, max: 2015 }).toString();
  const empresa = faker.company.name();
  const endereco = faker.location.streetAddress();
  const enderecoComplemento = faker.location.secondaryAddress();
  const pais = faker.helpers.arrayElement([
    "India",
    "United States",
    "Canada",
    "Australia",
    "Israel",
    "New Zealand",
    "Singapore",
  ]);

  const estado = faker.location.state();
  const cidade = faker.location.city();
  const cep = faker.location.zipCode();
  const celular = faker.phone.number("819########");

  return {
    nome,
    sobrenome,
    nomeCompleto,
    email,
    senha,
    titulo,
    diaNascimento,
    mesNascimento,
    anoNascimento,
    empresa,
    endereco,
    enderecoComplemento,
    pais,
    estado,
    cidade,
    cep,
    celular,
  };
}

module.exports = gerarUsuario;
