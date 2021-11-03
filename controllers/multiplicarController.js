const multiplicarController = {};

const multiplicar = (numero1, numero2) => {
  return parseInt(numero1, 10) * parseInt(numero2, 10);
};

multiplicarController.multiplicar = multiplicar;

module.exports.multiplicarController = multiplicarController;
