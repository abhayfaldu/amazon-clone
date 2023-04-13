import React from "react";
import styles from "../styles/Home.module.css";
import Product from "../components/Product";

const Home = () => {
  return (
    <div className="home">
      <div className={styles.home__container}>
        <img
          className={styles.home__image}
          src="https://m.media-amazon.com/images/I/71v-5k8-SnL._SX3000_.jpg"
          alt="home_image"
        />
        <div className={styles.home__row}>
          <Product
            id={1234}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback - 6 October 2011"
            price={646.234}
            image="https://images-na.ssl-images-amazon.com/images/I/51T-sMqSMiL._SX329_BO1,204,203,200_.jpg"
            rating={4}
          />
          <Product
            id={1235}
            title="Rossmann Professional Stand Mixer, Powerful 1400 Watts, 100% Pure Copper Motor, 4 Safety Features, Metal Gears & Planetary Rotation, 5.5 Lit SS Bowl, Teflon Coated Accessories, 2 Years Warranty, Black"
            price={9970}
            image="https://m.media-amazon.com/images/I/61oHdFNlkVL._SX679_.jpg"
            rating={4}
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id={1236}
            title="Samsung Galaxy Watch5 Bluetooth (44 mm, Graphite, Compatible with Android only)"
            price={30999}
            image="https://m.media-amazon.com/images/I/61O5Xjb9uEL._SX679_.jpg"
            rating={3}
          />
          <Product
            id={1237}
            title="Echo (4th Gen, 2020 release) | Premium sound powered by Dolby and Alexa (Black)"
            price={6999}
            image="https://m.media-amazon.com/images/I/61dgl2srHDL.jpg"
            rating={5}
          />
          <Product
            id={1238}
            title="2021 Apple iPad Pro with Apple M1 chip (12.9-inch/32.77 cm, Wi-Fi + Cellular, 256GB) - Silver (5th Generation)"
            price={122900}
            image="https://m.media-amazon.com/images/I/81J5bpGahqS._AC_UY436_FMwebp_QL65_.jpg"
            rating={4}
          />
        </div>
        <div className={styles.home__row}>
          <Product
            id={1239}
            title='Samsung 123.9cm (49") Gaming Monitor with 32:9 Aspect Ratio Display and 240Hz Refresh Rate - LC49G95TSSWXXL'
            price={140450}
            image="https://m.media-amazon.com/images/I/51+iB9+5HKL._AC_UY436_FMwebp_QL65_.jpg"
            rating={2}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
