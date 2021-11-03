const { sumarController } = require('../controllers/sumarController');
const { restarController } = require('../controllers/restarController');
const {
  multiplicarController,
} = require('../controllers/multiplicarController');
const { dividirController } = require('../controllers/dividirController');

app.post('/sumar', (request, response) => {
  const { numero1 } = request.body;
  const { numero2 } = request.body;

  const suma = sumarController.sumar(numero1, numero2);

  response.json({ resultado: suma });
});

app.post('/restar', (request, response) => {
  const { numero1 } = request.body;
  const { numero2 } = request.body;

  const resta = restarController.restar(numero1, numero2);

  response.json({ resultado: resta });
});

app.post('/multiplicar', (request, response) => {
  const { numero1 } = request.body;
  const { numero2 } = request.body;

  const multiplicacion = multiplicarController.multiplicar(numero1, numero2);

  response.json({ resultado: multiplicacion });
});

app.post('/dividir', (request, response) => {
  const { numero1 } = request.body;
  const { numero2 } = request.body;

  const division = dividirController.dividir(numero1, numero2);

  response.json({ resultado: division });
});
