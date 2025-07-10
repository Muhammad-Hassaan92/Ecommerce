import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';

const products = [
  { id: 1, title: "MEN's Shoe", des: "The bulk of card's content", price: "50", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 2, title: "MEN's Shoe", des: "The bulk of card's content", price: "49", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 3, title: "MEN's Shoe", des: "The bulk of card's content", price: "48", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 4, title: "MEN's Shoe", des: "The bulk of card's content", price: "47", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 5, title: "MEN's Shoe", des: "The bulk of card's content", price: "46", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 6, title: "MEN's Shoe", des: "The bulk of card's content", price: "45", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 7, title: "MEN's Shoe", des: "The bulk of card's content", price: "44", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
  { id: 8, title: "MEN's Shoe", des: "The bulk of card's content", price: "43", image: "https://muhammad-hassaan92.github.io/Ecommerce-Landing-Page-Shoes/images/1.png" },
];

const Product = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="container text-center mt-5">
        <h2>Product Not Found</h2>
        <p>No product found for ID: {id}</p>
      </div>
    );
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (added) {
      alert('Item was added to cart');
    }
  });

  return (
    <div className='container-fluid d-flex justify-content-center rounded p-5'>
      <div className='row shadow'>
        <div className='col-md-6 p-3 text-white rounded-start' style={{ background: "linear-gradient(#04344f,#175e7b)" }}>
          <img className='img-fluid d-block mx-auto rounded' style={{ maxHeight: "30vh" }} src={product.image} alt="..." />
          <p className='fs-3 text-center pt-3'>{product.title} {product.id}</p>
          <p className='text-center'>Casual low-top shoes ideal for walking and light activities. Breathable and stylish design offers comfort throughout your daily routine.</p>
          <p className='fs-3 text-center'>Price : {product.price}$</p>
        </div>
        <div className='col-md-6 bg-light p-5 rounded-end'>
          <p className='fs-5'>💳 CREDIT CARD</p>
          <div>
            <p className='fw-bold'>Card Name</p>
            <p className=''>Name Surname</p>
          </div>
          <div>
            <p className='fw-bold'>Card Number</p>
            <p className=''>1234 5678 9101</p>
          </div>
          <div>
            <p className='fw-bold'>Expiration Date</p>
            <p className=''>09/45</p>
          </div>
          <button
            type="button" className="btn btn-success w-100 mx-3" onClick={() => setAdded(true)}>BUY NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Product