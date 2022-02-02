const letras = "abcdefghijklmnopqrstuvwxyz";
const maiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const caracter = "*&%$#-_:><~^";
const numbers = "0123456789";
const mai = false;
const car = false;
const num = false;
export const generatePass = (mai, car, num, len) => {
  let senha = "";
  for (let i = 0; i < len; i++) {
    if (mai) {
      senha += maiusculas[Math.floor(Math.random() * maiusculas.length)];
    }if (car) {
      senha += caracter[Math.floor(Math.random() * caracter.length)];
    }
    if (num) {
      senha += numbers[Math.floor(Math.random() * numbers.length)];
    }
    senha += letras[Math.floor(Math.random() * letras.length)];
  }
  return senha.substring(0, len);
};
