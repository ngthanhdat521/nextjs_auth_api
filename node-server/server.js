// app.js

const express = require('express');
const app = express();

// Định nghĩa route đơn giản
app.get('/api/v1/products', (req, res) => {
  res.status(200).json({
    result: {
      items: [
        {
          id: '1',
          code: 'P001',
          title: 'Wireless Headphones',
          discount: 10,
          pictures: [
            'https://store.storeimages.cdn-apple.com/8756/as-images.apple.com/is/MQTQ3?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1687660671363',
          ],
          price: 99.99,
          category: 'electronics',
          favoriteScore: 4.5,
          favoriteCount: 150,
        },
        {
          id: '2',
          code: 'P002',
          title: 'Bluetooth Speaker',
          discount: 15,
          pictures: [
            'https://vn.jbl.com/dw/image/v2/AAUJ_PRD/on/demandware.static/-/Sites-masterCatalog_Harman/default/dw13d2ebb3/JBL_GO_4_HERO_BLACK_48156_x4.jpg?sw=270&sh=330&sm=fit&sfrm=png',
          ],
          price: 59.99,
          category: 'electronics',
          favoriteScore: 4.7,
          favoriteCount: 200,
        },
        {
          id: '3',
          code: 'P003',
          title: 'Smartwatch',
          discount: 25,
          pictures: [
            'https://cdn2.cellphones.com.vn/insecure/rs:fill:358:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/m/amazfit_1_2.png',
          ],
          price: 199.99,
          category: 'electronics',
          favoriteScore: 4.3,
          favoriteCount: 180,
        },
        {
          id: '4',
          code: 'P004',
          title: 'Laptop Backpack',
          discount: 5,
          pictures: [
            'https://img.lazcdn.com/g/p/849708c5fdf487a37ea89957d3ae3d80.jpg_360x360q75.jpg_.webp',
          ],
          price: 49.99,
          category: 'accessories',
          favoriteScore: 4.8,
          favoriteCount: 120,
        },
        {
          id: '5',
          code: 'P005',
          title: 'Smartphone Case',
          discount: 30,
          pictures: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwCMqBRNuO1PB5kgRnm9qvIxtvJRAOKkbRXg&s',
          ],
          price: 19.99,
          category: 'accessories',
          favoriteScore: 4.6,
          favoriteCount: 250,
        },
        {
          id: '6',
          code: 'P006',
          title: 'Gaming Mouse',
          discount: 20,
          pictures: [
            'https://static.tandoanh.vn/wp-content/uploads/2024/06/Razer-Cobra-Pro-Wireless-Gaming-Black-H1.jpg.webp',
          ],
          price: 39.99,
          category: 'computerPeripherals',
          favoriteScore: 4.4,
          favoriteCount: 220,
        },
        {
          id: '7',
          code: 'P007',
          title: 'Keyboard RGB',
          discount: 18,
          pictures: [
            'https://row.hyperx.com/cdn/shop/files/hyperx_alloy_core_rgb_uk_1_main_1600x.jpg?v=1734473869',
          ],
          price: 89.99,
          category: 'computerPeripherals',
          favoriteScore: 4.2,
          favoriteCount: 150,
        },
        {
          id: '8',
          code: 'P008',
          title: '4K Ultra HD TV',
          discount: 22,
          pictures: [
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwHrNpPuHqjBXqguuOwhBlpmRyDFPqTGfCGQ&s',
          ],
          price: 499.99,
          category: 'electronics',
          favoriteScore: 4.9,
          favoriteCount: 350,
        },
        {
          id: '9',
          code: 'P009',
          title: 'Electric Kettle',
          discount: 12,
          pictures: [
            'https://www.foodandwine.com/thmb/3Gr7PBUAzI0qtty7u-T4627IwbE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Best-Electric-Kettles-Tested-FW-Social-1853bdda8c884c0caff61f7139a925a2.jpg',
          ],
          price: 29.99,
          category: 'homeAppliances',
          favoriteScore: 4.5,
          favoriteCount: 190,
        },
        {
          id: '10',
          code: 'P010',
          title: 'Coffee Maker',
          discount: 10,
          pictures: [
            'https://assets.epicurious.com/photos/62741684ef40ea9d3866a0be/16:9/w_2560%2Cc_limit/breville-bambino-espresso-maker_HERO_050422_8449_VOG_Badge_final.jpg',
          ],
          price: 69.99,
          category: 'homeAppliances',
          favoriteScore: 4.0,
          favoriteCount: 130,
        },
        {
          id: '11',
          code: 'P011',
          title: 'Electric Toothbrush',
          discount: 5,
          pictures: [
            'https://classic.vn/wp-content/uploads/2023/03/1-91416.jpeg',
          ],
          price: 49.99,
          category: 'homeAppliances',
          favoriteScore: 4.7,
          favoriteCount: 220,
        },
        {
          id: '12',
          code: 'P012',
          title: 'Smart Light Bulb',
          discount: 15,
          pictures: [
            'https://img.lazcdn.com/g/ff/kf/S52d68f662dba44c5bd64497841f5f9e8U.jpg_360x360q75.jpg_.webp',
          ],
          price: 29.99,
          category: 'smartHome',
          favoriteScore: 4.6,
          favoriteCount: 230,
        },
      ],
      total: 100,
      limit: 10,
      page: 0,
    },
    timestamp: new Date().toISOString(),
    status: 200,
  });
});

// Khởi động server trên cổng 3000
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
