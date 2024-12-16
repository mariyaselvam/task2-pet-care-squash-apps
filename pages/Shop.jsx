import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
import { Link } from "react-router-dom"

import ShopCardImg1 from "../src/assets/home-3/pet-shoop/shop-img1.png"
import ShopCardImg2 from "../src/assets/home-3/pet-shoop/shop-img2.png"
import ShopCardImg3 from "../src/assets/home-3/pet-shoop/shop-img3.png"
import ShopCardImg4 from "../src/assets/home-3/pet-shoop/shop-img4.png"
import ShopCardImg5 from "../src/assets/home-3/pet-shoop/shop-img5.png"
import ShopCardImg6 from "../src/assets/home-3/pet-shoop/shop-img6.png"
import ShopCardImg7 from "../src/assets/home-3/pet-shoop/shop-img7.png"
import ShopCardImg8 from "../src/assets/home-3/pet-shoop/shop-img8.png"
import ShopCardImg9 from "../src/assets/home-3/pet-shoop/shop-img9.png"

const Shop = () => {
  return (
   <>
   <Home3Header />
   <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Shop
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                            <li className="home3Link"><Link to="/home3">Home</Link></li>
                            <li>/</li>
                            <li> Shop</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="home3-pet-foot-shop-sec">
        <div className="container">
            <div className="row">
                
                <div className="col-xl-3">
                 <div className="home3-pet-foot-shop-side-bar-wrap">

                    <div className="Price-Range-wrap">
                        <h4>Price Range</h4>

                        <input className="Price-Range-input" type="range" name="" id="" />

                     <div className="Price-Range-input-num-wrap">
                      <input type="number" /> <input type="number" />
                     </div>
                    

                    </div>

                    <div className="home3-pet-foot-shop-side-bar-Category">
                        <h4>Category</h4>
                         
                         <div>
                        <input className="" type="checkbox" name="Food-toppers" id="" />
                        <label htmlFor="Food-toppers">Food toppers</label> <br />
                        </div>
                        
                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Clothing and Accessories</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Dog Treats & Dog Bones</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Dog Kennels, Dog Flaps & Gates</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Pet Supplements & Vitamins</label>
                        </div>
                    </div>

                    <div className="home3-pet-foot-shop-side-bar-Category">
                        <h4>Brands</h4>
                         
                         <div>
                        <input className="" type="checkbox" name="Food-toppers" id="" />
                        <label htmlFor="Food-toppers">Food toppers</label> <br />
                        </div>
                        
                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Clothing and Accessories</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Dog Treats & Dog Bones</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Dog Kennels, Dog Flaps & Gates</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Pet Supplements & Vitamins</label>
                        </div>
                    </div>

                    <div className="home3-pet-foot-shop-side-bar-Category">
                        <h4>Flavor</h4>
                         
                         <div>
                        <input className="" type="checkbox" name="Food-toppers" id="" />
                        <label htmlFor="Food-toppers">Chicken</label> <br />
                        </div>
                        
                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Beef</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Mutton</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Fish</label>
                        </div>

                        <div>
                        <input type="checkbox" name="" id="" />
                        <label htmlFor="">Other</label>
                        </div>
                    </div>
                 </div>
                </div>

                <div className="col-xl-9">
                    <div className="row">
                    <div className="col-xl-12"> 
                        <div className="Shop-search-selact-wrap">

                        

                       <input type="text" className="shop-search-input" placeholder="Search......"  />

                       <div className="items-per-page-wrap">
                        <span>Items Per Page</span>
                        <select name="" id="">
                            <option value="1"> 1</option>
                            <option value="2"> 2</option>
                            <option value="3"> 3</option>
                            <option value="4"> 4</option>
                            <option value="5"> 5</option>
                            <option value="6"> 6</option>
                            <option value="7"> 7</option>
                            <option value="8"> 8</option>
                            <option value="9"> 9</option>
                        </select>
                       </div>

                       <div className="Sort-By-wrap">
                        <span>Sort By</span>
                        <select name="" id="">
                            <option value="Featured">Featured</option>
                        </select>
                       </div>

                       </div>
                    </div>
                    </div>

                    <div className="row">
                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg1} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg2} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg3} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg4} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg5} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg6} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg7} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg8} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    <div className="col-xl-4 col-lg-6">
                        <div className="home3-pet-foot-shop-product-card">
                            <div className="home3-pet-foot-shop-product-img">
                                <img src={ShopCardImg9} alt="" />
                            </div>

                            <h4 className="home3-pet-foot-shop-product-name">
                            Pedigree Adult Dog Nutrition Food
                            </h4>

                            <ul className="Category-nd-weight">
                              <li><span>Category</span><p>Dog Food</p></li>
                              <li><span>Size : </span><p>385gm</p></li>
                            </ul>

                            <h4 className="home3-pet-foot-shop-product-price">
                            $12.00
                            </h4>
                        </div>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    </section>

   <Home3Footer />
   
   </>
  )
}

export default Shop