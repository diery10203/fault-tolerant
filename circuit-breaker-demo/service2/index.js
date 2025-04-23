const express = require('express');
const app = express();
const port = 3001;

// app.get('/data', (req, res) => {
//   // Giả lập một số lỗi ngẫu nhiên để test Circuit Breaker
//   if (Math.random() < 0.5) {
//     console.log('Service 2: Trả về dữ liệu thành công');
//     res.json({ message: 'Dữ liệu từ Service 2' });
//   } else {
//     console.error('Service 2: Gặp lỗi');
//     res.status(500).send('Lỗi từ Service 2');
//   }
// });

app.get('/data', (req, res) => {
    console.error('Service 2: Luôn trả về lỗi');
    res.status(500).send('Lỗi từ Service 2');
  });

  
app.listen(port, () => {
  console.log(`Service 2 đang lắng nghe tại http://localhost:${port}`);
});