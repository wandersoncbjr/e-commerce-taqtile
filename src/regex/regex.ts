export const regexPatterns = {
  email: /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/,
  cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
  cnpj: /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/,
  specialCharacter: /[^A-Za-z0-9]/,
  uppercaseLetter: /[A-Z]/,
  numericDigit: /\d/,
};
