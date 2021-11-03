const restarController = {};

const restar = (numero1, numero2) => {
  return parseInt(numero1, 10) - parseInt(numero2, 10);
};

restarController.restar = restar;

module.exports.restarController = restarController;
