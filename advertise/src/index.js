const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use('/images', express.static('images'));

const ads = [
  { name: 'Shopee', url: 'https://shopee.com', image: 'https://www.leceipt.com/wp-content/uploads/2021/11/shopee-1.png' },
  { name: 'Lazada', url: 'https://lazada.com', image: 'https://laz-img-cdn.alicdn.com/tfs/TB1PApewFT7gK0jSZFpXXaTkpXa-200-200.png' },
  { name: 'Kaidee', url: 'https://www.kaidee.com', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOj3QWRPDYUwWptymTTMjatkgGYOlW9MciNQ&s' }
];

app.get('/ads', (req, res) => {
  res.json(ads);
});

app.listen(port, () => {
  console.log(`Advertise service running on port ${port}`);
});
