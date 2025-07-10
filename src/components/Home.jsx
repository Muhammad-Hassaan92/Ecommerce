import React from 'react';
import VCard from './inner/VCard';
import Title from './inner/Title';
import Header from './inner/Header';

const Home = () => {
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

  return (
    <>
      <div className="container-fluid">
        <Header />
        <Title heading="NEW ARRIVALS" subheading="Trending from new and modern mens style collection" />
        <div className='row'>
          {products.map(product => (
              <VCard
                title={product.title}
                id={product.id}
                des={product.des}
                price={product.price}
                image={product.image}
              />
          ))}
        </div>
        <Title heading="FEATURED" subheading="Trending from mens and womens style collection" />
      </div>
    </>
  );
};

export default Home;