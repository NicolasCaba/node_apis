const sumarController = {};

const sumar = (numero1, numero2) => {
  return parseInt(numero1, 10) + parseInt(numero2, 10);
};

sumarController.sumar = sumar;

module.exports.sumarController = sumarController;
