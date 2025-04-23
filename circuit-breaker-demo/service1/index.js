const express = require('express');
const CircuitBreaker = require('./circuitBreaker'); // Import từ file riêng
const app = express();
const port = 3000;
const service2Url = 'http://localhost:3001/data';

const circuitBreaker = new CircuitBreaker({ failureThreshold: 5, recoveryTimeout: 10000 });

app.get('/getDataFromService2', async (req, res) => {
  try {
    const data = await circuitBreaker.callService(service2Url);
    res.json(data);
  } catch (error) {
    console.error(`Lỗi! ${error.message}`);
    res.status(503).send({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Service 1 listen at http://localhost:${port}`);
});