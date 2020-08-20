import React from 'react';
import "./Home.css";
import Product from "./Product";

function Home() {
    return (
    <div className="home">
        
        <img className="home_image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt="not found"
        />
        {/* Product id, title, price, rating, image */}

        <div className="home_row">
          
            
                <Product 
                    id={12351255}
                    title="Apple Watch Series 3 42mm Cellular. The Apple Watch Series 3 is a sleek accessory."
                    price={13.65}
                    rating={5}
                    // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                    // image="images/win friend.jpg"
                    image="https://aigglobalservices.com/wp-content/uploads/2019/08/apple-watch-series3.jpg"
                />   

                
            


            
            <Product 
                    id={25445455}
                    title="The Lean Startup: How constant Innovation Creates Radically Successfulll Business Paperback"
                    price={25.2}
                    rating={4}
                    // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
                    // image="images/win friend.jpg"
                    image="https://fdn2.gsmarena.com/vv/bigpic/apple-iphone-11.jpg"
                /> 
            


           
        </div>



        <div className="home_row">
          
          <Product 
              id={9584254}
              title="Microsoft Surface 1832 2018 13.5-inch Book 2 (8th Gen Core i7/8GB/256GB/Windows 10 Pro/Integrated Graphics), Silver"
              price={273.6}
              rating={3}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://m.media-amazon.com/images/S/aplus-media/sota/11109769-bea3-4825-ad43-9e5805ef9363._CR0,0,300,300_PT0_SX300__.jpg"
          />   

          <Product 
              id={235845}
              title="Xbox One Wireless Controller with Bluetooth (With 3.5 mm Jack) (White)"
              price={18.53}
              rating={4}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://cdn.cnn.com/cnnnext/dam/assets/191004113818-underscored-iosgames-xbox-live-video.jpg"
          /> 

        <Product 
              id={78452845}
              title="The Lean Startup: How constant Innovation Creates Radically Successfulll Business Paperback"
              price={3.65}
              rating={5}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://images-na.ssl-images-amazon.com/images/I/410BqHSamiL._SX322_BO1,204,203,200_.jpg"
          /> 
      </div>

      <div className="home_row">
          
          <Product 
              id={32154821}
              title="Borosil - BT360PK118 Stainless Steel Hydra Travelsmart - Vacuum Insulated Flask Water Bottle, 360 ML, Pink"
              price={7.99}
              rating={4}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://images-na.ssl-images-amazon.com/images/I/415xY44l%2B4L._SL1000_.jpg"
          />   

          <Product 
              id={21548214}
              title="STARBUCKS USA Ceramic Coffee Mug - 1 Piece, White, 350 ml"
              price={2.99}
              rating={4}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://images-na.ssl-images-amazon.com/images/I/61w0B6WVwRL._SL1001_.jpg"
          /> 

        <Product 
              id={32518232}
              title="TRIMIX Gym Water Bottle | Gym Shakers Bottle | Sports Bottle for Gym | Sport Gym Sipper | Sport Bottle Sipper"
              price={4.65}
              rating={5}
              // image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_B01,204,203,200_.jpg"
              // image="images/win friend.jpg"
              image="https://images-na.ssl-images-amazon.com/images/I/31EtfPAniQL.jpg"
          /> 
      </div>



        {/* Product */}
    </div>
    );
}

export default Home
