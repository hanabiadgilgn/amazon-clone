import React from 'react'
import "./Home.css";
import Product from './Product';
function Home() {
    return (
        <div className="home">
        <div className="home__container">
        <img
            className="home__image"
            src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
            alt=""
        />
        <div className="home__row">
            <Product
            id="12321341"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperbackSaeco Xelsis Super Automatic Espresso Machine, Titanium Metal Front, SM7684/04"
            price={1999.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/61eBsSL8VRL._AC_UL320_.jpg"
            />
            <Product
            id="49538094"
            title="KALRI Modern K9 Crystal Gold Chandelier Flush Mount LED Ceiling Lamp Pendant Light Fixture for Living Room Dining Room Bedroom Restaurant Hallway (Dia 23.6'')"
            price={215.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/612MqfxgF9L._AC_.jpg"
            />
            <Product
            id="49538094"
            title="Garmin vivomove Style, Hybrid Smartwatch with Real Watch Hands and Hidden Color Touchscreen Displays, Gold with Pink Woven Nylon Band"
            price={356.06}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41sOzuGZvjL._AC_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="12321341"
            title="Men's Rolex Oyster Perpetual 39 Black Dial Luxury Watch (Ref. 114300)"
            price={8175}
            rating={5}
            image="https://m.media-amazon.com/images/I/61a-ylj7fFL._AC_UL320_.jpg"
            />
            <Product
            id="49538094"
            title="The Bon Appetit Gourmet Food Gift Basket by Wine Country Gift Baskets"
            price={215.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/81Gzh5N07-L._AC_UL320_.jpg"
            />
            <Product
            id="49538094"
            title="Core Java Volume I--Fundamentals (Core Series) 11th Edition"
            price={17.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/41Brz5j2rKL._AC_UY218_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="4903850"
            title="Pentax K-1 Mark II DSLR Camera with 28-105mm Lens and PENTAX-D FA 70-210mm f/4 ED SDM WR Lens"
            price={3293}
            rating={3}
            image="https://m.media-amazon.com/images/I/41hklC6PwyL._AC_SR160,160_.jpg"
            />
            <Product
            id="23445930"
            title="All-new Echo (4th Gen) | With premium sound, smart home hub, and Alexa | Charcoal"
            price={98.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41zL-AFZqFL._AC_SX184_.jpg"
            />
            <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
        </div>
        <div className="home__row">
            <Product
            id="90829332"
            title="Signature Design by Ashley - Alenya Microfiber Upholstery Sofa w/ 2 Throw Pillows, Charcoal"
            price={486.99}
            rating={4}
            image="https://m.media-amazon.com/images/S/abs-image-upload-na/4/AmazonStores/ATVPDKIKX0DER/e12227e3e5b0a471f9be3cf9a005fd15.w1482.h989._CR0%2C397%2C1482%2C296_SX1482_.jpg" 
            />

        </div>
        <div className="home__row">
            <Product
            id="90829332"
            title="Quick Sit to Stand Desktop Gas Spring Riser (Max Height:19.3inch), 33 inch Height Adjustable Standing Desk Converter for Dual Computer Monitors & Laptop Workstation, Perfect Home Office by HUANUO"
            price={109.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/81D1pk5BKEL._AC_UY218_.jpg"
            />
            <Product
            id="90829332"
            title="Dragon Touch Digital Picture Frame, 8-Inch Wi-Fi Digital Photo Frame with IPS Touch Screen HD Display, 16GB Storage, Share Photos via App, Email, Cloud, Support USB Drive/SD Card - Classic 8"
            price={1094.98}
            rating={4}
            image="https://m.media-amazon.com/images/I/713FSZDNsYL._AC_UY218_.jpg"
            />
        </div>
    </div>
</div>

    );
}

export default Home
