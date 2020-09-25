import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2020/X-site/Multititle/Aug/1500x600_Hero-Tall_np._CB404803728_.jpg"
          alt="amazon prime"
        />

        <div className="home__row">
          <Product
            id="1546463448"
            title="The beauty qween make up set"
            price={29.99}
            image="https://images-eu.ssl-images-amazon.com/images/G/31/img19/Beauty/GW/desktop/Luxury-Category-card-1x._SY304_CB448731790_.jpg"
            rating={3}
          />
          <Product
            id="1546463448454"
            title="Haier 181 L 2 Star Direct-Cool Single Door Refrigerator (HED-1812BKS-E, Black Brushline)"
            price={990.36}
            image="https://m.media-amazon.com/images/I/71mlSspS7OL._AC_UL320_.jpg"
            rating={5}
          />
        </div>

        <div className="home__row">
          <Product
            id="15464634484674"
            title="Tiksha Enterprises Freezer Door for Whirlpool GEN Y Direct Cool Fridge"
            price={69.99}
            image="https://m.media-amazon.com/images/I/61dLIOzy7tL._AC_UL320_.jpg"
            rating={4}
          />
          <Product
            id="154646344854574"
            title="Adlynlife Band Strap for Mi Band 3 / Mi Band 4 Wristband Silicone Strap (Grey & Orange) "
            price={0.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51URMSU6Z7L._SL1282_.jpg"
            rating={4}
          />
          <Product
            id="1546463448469645649"
            title="Britannia Little Hearts, 34.5g"
            price={2.99}
            image="https://m.media-amazon.com/images/I/91R6EDhHVXL._SY250_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="154646344"
            title="Samsung CJ89 43 inch Curved UltraWide 3840 X 1200 Resolution 120Hz Monitor (LC43J890DKNXZA)"
            price={599.0}
            image="https://m.media-amazon.com/images/I/81v90JtbImL._AC_UY218_.jpg"
            rating={4}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
