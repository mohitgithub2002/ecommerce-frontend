import React, { useState } from 'react';
import './product.css'
const pictures = [
  {
    id: 1,
    name: 'Picture 1',
    url: 'https://picsum.photos/id/1/200/200',
    price: 10
  },
  {
    id: 2,
    name: 'Picture 2',
    url: 'https://picsum.photos/id/2/200/200',
    price: 20
  },
  {
    id: 3,
    name: 'Picture 3',
    url: 'https://picsum.photos/id/3/200/200',
    price: 15
  },
  {
    id: 4,
    name: 'Picture 4',
    url: 'https://picsum.photos/id/4/200/200',
    price: 25
  },
  {
    id: 5,
    name: 'Picture 5',
    url: 'https://picsum.photos/id/5/200/200',
    price: 30
  },
  {
    id: 6,
    name: 'Picture 6',
    url: 'https://picsum.photos/id/1/200/200',
    price: 50
  },
  {
    id: 7,
    name: 'Picture 7',
    url: 'https://picsum.photos/id/2/200/200',
    price: 100
  },
  {
    id: 8,
    name: 'Picture 8',
    url: 'https://picsum.photos/id/3/200/200',
    price: 2
  },
  {
    id: 9,
    name: 'Picture 9',
    url: 'https://picsum.photos/id/4/200/200',
    price: 7
  },
  {
    id: 10,
    name: 'Picture 10',
    url: 'https://picsum.photos/id/5/200/200',
    price: 30
  },
];

function Picture(props) {
  
  function handleBuyClick() {
    props.onBuy(props.picture);
   
  }

  return (
    <div className='picture'>
      <img src={props.picture.url} alt={props.picture.name} />
      <div className="price">${props.picture.price}</div>
      <button onClick={handleBuyClick} >Buy</button>
    </div>
  );
}

function PictureGallery(props) {
  const [cartItems, setCartItems] = useState([]);

  function handleBuy(picture) {
    setCartItems([...cartItems, picture]);
  }

  function handlePay() {
    setCartItems([]);
    const remainingPictures = pictures.filter(picture => !cartItems.includes(picture));
    // update the pictures array with the remaining pictures
    pictures.length = 0;
    pictures.push(...remainingPictures);
  }

  const totalAmount = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className='home'>
      <div className='productsection'>
      <h1>Picture Gallery</h1>
      <div className="picture-gallery">
        {pictures.map(picture => (
          <Picture key={picture.id} picture={picture} onBuy={handleBuy} />
        ))}
      </div>
      </div>
      
      <div className="cart">
        <h2>Shopping Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.name} - ${item.price}
            </li>
          ))}
        </ul>
        <div className="total-amount">
          Total amount: ${totalAmount}
        </div>
        <button onClick={handlePay} disabled={cartItems.length === 0}>Pay</button>
      </div>
    </div>
  );
}

export default PictureGallery;
