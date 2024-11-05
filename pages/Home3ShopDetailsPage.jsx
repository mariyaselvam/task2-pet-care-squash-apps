import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"

import BlogCommentProfile from "../src/assets/home-3/blog-detail-page/blog-comment-profile.png"

import PrduoctCartRating from "../src/assets/home-3/home3-Related-products-sec/prduoct-cart-rating.svg"

import RelatedProductsImg1 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg1.png"
import RelatedProductsImg2 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg2.png"
import RelatedProductsImg3 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg3.png"
import RelatedProductsImg4 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg4.png"
import RelatedProductsImg5 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg5.png"
import RelatedProductsImg6 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg6.png"
import RelatedProductsImg7 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg7.png"
import RelatedProductsImg8 from "../src/assets/home-3/home3-Related-products-sec/Related-productsImg8.png"

import ProdouctImg1 from "../src/assets/home-3/Pedigree-adult-dog/img1.png"
import ProdouctImg2 from "../src/assets/home-3/Pedigree-adult-dog/img2.png"
import ProdouctImg3 from "../src/assets/home-3/Pedigree-adult-dog/img3.png"
import ProdouctImg4 from "../src/assets/home-3/Pedigree-adult-dog/img4.png"

import Social1 from "../src/assets/home-3/Pedigree-adult-dog/face-book.svg"
import Social2 from "../src/assets/home-3/Pedigree-adult-dog/x.svg"
import Social3 from "../src/assets/home-3/Pedigree-adult-dog/linkedin.svg"

import HeartIcon from "../src/assets/home-3/Pedigree-adult-dog/heart-icon.svg"

const Home3ShopDetailsPage = () => {
  return (
    <>
    <Home3Header />
    <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Pedigree adult dog
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                            <li>Home</li>
                            <li>/</li>
                            <li> Shop Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section className="Shop-Details-prodouct-cart-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                          <div className="Shop-Details-prodouct-cart-img-wrap">
                            <img className="Shop-Detailsimg prodouct-img1" src={ProdouctImg1} alt="" />
                            <img className="Shop-Detailsimg prodouct-img2" src={ProdouctImg2} alt="" />
                            <img className="Shop-Detailsimg prodouct-img3" src={ProdouctImg3} alt="" />
                            <img className="Shop-Detailsimg prodouct-img4" src={ProdouctImg4} alt="" />
                          </div>
                </div>
                <div className="col-lg-6">
                    <div className="Shop-Details-prodouct-cart-cont-wrap">
                        <h3 className="Shop-Details-prodouct-cart-main-tit">
                        Pedigree Adult Dog Nutrition Food
                        </h3>

                        <div className="reviews-ng-ratings">
                            <span className="reviews">
                            (4 customer reviews)
                            </span>

                            <div className="prduoct-cart-rating">
                                <img src={PrduoctCartRating} alt="" />
                            </div>
                        </div>

                        <h4 className="Shop-Details-prodouct-cart-price">
                        <span className="Shop-Details-prodouct-cart-price-1">$210.99</span>
                        
                        <span className="Shop-Details-prodouct-cart-price-2"> <del>$250.99</del> </span>
                        </h4>

                        <p>
                        Mi bibendum neque egestas congue. Arcu risus quis varius quam quisque id diam vel. Nunc 
                        sed blandit libero volutpat sed cras ornare arcu dui. Nunc consequat interdum varius sit 
                        amet mattis vulputate. Lobortis mattis aliquam faucibus purus in massa tempor. 
                        </p>

                        <div className="quant-cart-ng-like-btn">
                            <span className="Shop-Details-quant-tit">
                            Quantity
                            </span>

                            <a href="#" className="Shop-Details-cart-btn">
                            - 2 +
                            </a>

                            <a href="" className="Shop-Details-Add-to-cart-btn">Add to cart</a>
                            
                            <a href="" className="Shop-Details-Add-to-cart-heart-btn">
                                <img src={HeartIcon} alt="" />
                            </a>
                        </div>

                        <div className="sku-nd-category">
                            <p><b>SKU : </b> Samsonite</p>
                            <p><b>Category : </b> Accessories</p>
                        </div>

                        <div className="Shop-Details-prodouct-cart-social-meida">
                            <img src={Social1} alt="" />
                            <img src={Social2} alt="" />
                            <img src={Social3} alt="" />
                        </div>

                        <p>Product Details</p>
                        <p>Additional Information</p>
                        <p>Shipping & Return</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


    <section className="home3-shop-detail-comment-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="home3-shop-detail-comment-wrap">
                

    <div className="Home3-blog-comments-card">
        <div className="Home3-blog-comments-profile-img">
        <img src={BlogCommentProfile} alt="" />
        </div>
        <h4 className="comment-person-name">
        Darlene Robertson
        </h4>
       <span className="blog-comment-date-ago">
       1 Month ago
       </span>
       <p>Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>
       <div className="blog-comment-likes-nd-replays">
        <span className="blog-comment-likes">
        158
        </span>
        <span className="blog-comment-replays">
        Reply
        </span>
       </div>
    </div>

    <div className="Home3-blog-comments-card">
        <div className="Home3-blog-comments-profile-img">
        <img src={BlogCommentProfile} alt="" />
        </div>
        <h4 className="comment-person-name">
        Darlene Robertson
        </h4>
       <span className="blog-comment-date-ago">
       1 Month ago
       </span>
       <p>Sed sed risus pretium quam vulputate dignissim suspendisse in est. In dictum non consectetur a erat nam at lectus.</p>
       <div className="blog-comment-likes-nd-replays">
        <span className="blog-comment-likes">
        158
        </span>
        <span className="blog-comment-replays">
        Reply
        </span>
       </div>
    </div>


                    </div>
                </div>
                <div className="col-lg-6">
                <div className="blog-detail-comment-form">

<h4 className="blog-detail-comment-form-tit">Add Comment</h4>

<input placeholder="First Name" className="first-name-blog" type="text" name="" id="" />

<input placeholder="Email" className="email-for-blog" type="email" name="" id="" />

<textarea className="blog-detail-comment-text-area" placeholder="Message" name="" id=""  rows="3"></textarea>

<a className="blog-detail-comment-form-btn" href="">Leave a comment</a>
</div>
                </div>
            </div>
        </div>
    </section>


    <section className="home3-shopdetail-Related-products-sec">
        <div className="container">
            <h3 className="home3-shopdetail-Related-products-tit">Related products</h3>
            <div className="row">
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg1} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg2} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg3} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg4} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg5} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg6} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg7} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
                <div className="col-xl-3 col-lg-4 col-md-6">
                    <div class="home3-pet-foot-shop-product-card">
                        <div class="home3-pet-foot-shop-product-img">
                            <img src={RelatedProductsImg8} alt="" />
                            </div>
                            <h4 class="home3-pet-foot-shop-product-name">Pedigree Adult Dog Nutrition Food</h4>
                            <ul class="Category-nd-weight">
                                <li><span>Category</span><p>Dog Food</p></li>
                                <li><span>Size : </span><p>385gm</p></li>
                            </ul>
                        <h4 class="home3-pet-foot-shop-product-price">$12.00</h4>
                        </div>
                </div>
            </div>
        </div>
    </section>

    <Home3Footer />
    
    </>
  )
}

export default Home3ShopDetailsPage