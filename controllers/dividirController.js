const dividirController = {};

const dividir = (numero1, numero2) => {
  return parseInt(numero1, 10) / parseInt(numero2, 10);
};

dividirController.dividir = dividir;

module.exports.dividirController = dividirController;
