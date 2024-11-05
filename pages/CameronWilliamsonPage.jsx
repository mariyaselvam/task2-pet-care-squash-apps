import Home3Header from "../components-home3/Home3Header"
import Home3Footer from "../components-home3/Home3Footer"
// import Home3BlogComment from "../components-blog-detail/Home3BlogComment"
import BlogDetailPageSideBar from "../components-blog-detail/BlogDetailPageSideBar"
import BlogMainImg from "../src/assets/home-3/Cameron-Williamson/cameron-williamson-1.png"
import BlogMainIm1 from "../src/assets/home-3/Cameron-Williamson/home3-blog-detail-page-img.png"

const CameronWilliamsonPage = () => {
  return (
    <>
    <Home3Header />
         <section className="Home3-Detail-Banner-sec">
        <div className="conntainer">
            <div className="row">
                <div className="col-lg-12">
                    <div className="Home3-Detail-Banner-tit-wrap">
                        <h1 className="Home3-Detail-Banner-main-tit">
                        Cameron Williamson
                        </h1>

                        <ul className="Home3-Detail-Banner-nav">
                            <li>Home</li>
                            <li>/</li>
                            <li> Sitter Details</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
         </section>

         <section className="home3-blog-detail-page-cont-n-sidebar">
        <div className="container">
            <div className="row">
                <div className="col-xxl-8">
                    {/* <div className="home3-blog-detail-page-cont-wraper">
                        <h2 className="home3-blog-detail-page-main-tit">
                        Top 10 dog breeds that lives longest
                        </h2>

                        <div className="home3-date-author-comment">
                            <span className="blog-date">Post on Aug 24, 2023 at 10:00 PM</span>
                            <span className="blog-author">by Esther Howard</span>
                            <span className="blog-comment">3 Comments</span>
                        </div>
                    </div> */}

                   <div className="home3-blog-detail-page-main-img">
                    <img src={BlogMainImg} alt="" />
                   </div>

                   <div className="breed-food-enjoy">
                    <span className="bread-span">Breeding</span>
                    <span className="Food-span">Food</span>
                    <span className="Enjoy-span">Enjoy</span>
                    <span className="Playing-span">Playing</span>
                   </div>

                   <p>Neque convalliscras semper auctor neque vitae. Suspendisse faucibus interdum posuere lorem ipsum dolor. Leo inter Ut placerat orci nulla Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore pellentesque dignissim.Ac ut consequat semper viverra nam libero justo. Id leo in vitae turpis massa sed elementum. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Urna neque viverra justo nec ultrices dui sapien. Non quam lacus suspendisse faucibus interdum posuere. Magna fringilla urna porttitor rhoncus dolor purus non. Elit ut aliquam purus sit amet luctus venenatis lectus magna. Metus aliquam eleifend mi in nulla posuere. Eu nisl nunc mi ipsum faucibus vitae aliquet nec ullamcorper. Laoreet non curabitur gravida arcu ac tortor dignissim.</p>


                 <ul className="home3-blog-detail-page-ul-checks">
                    <li>Id faucibus nisl tincidunt eget nullam non nisi est sit.</li>
                    <li>Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Nisl rhoncus mattis rhoncus urna neque.</li>
                    <li>Sed blandit libero volutpat sed cras. Nec nam aliquam sem et tortor consequat id porta.</li>
                    <li>Vulputate enim nulla aliquet porttitor. Magna sit amet purus gravida. Malesuada nunc vel risus commodo.</li>
                 </ul>


                   {/* <h2 className="home3-blog-quated-tit">
                   Pastry is different from cooking because you have to consider the chemistry, beauty and flavor....
                   </h2> */}


                   <p>Purus faucibus ornare suspendisse sed nisi lacus. Nullam non nisi est sit amet. Risus quis varius quam quisque id diam vel. Diam volutpat commodo sed egestas egestas fringilla. Eleifend donec pretium vulputate sapien nec sagittis. Turpis nunc eget lorem dolor sed viverra ipsum nunc. Habitasse platea dictumst quisque sagittis purus sit amet. Dolor magna eget est lorem ipsum dolor. Sit amet nisl suscipit adipiscing bibendum est ultricies. Sed lectus vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt. Elit ut aliquam purus sit amet. Eget nunc scelerisque viverra mauris in aliquam sem.</p>

                   {/* <Home3BlogComment /> */}

                   <div className="home3-blog-detail-page-img-nd-form">
                    <div className="home3-blog-detail-page-form-img">
                        <img src={BlogMainIm1} alt="" />
                    </div>
                    <div className="blog-detail-comment-form">

        <h4 className="blog-detail-comment-form-tit">Contact me</h4>

        <input placeholder="First Name" className="first-name-blog" type="text" name="" id="" />

        <input placeholder="Email" className="email-for-blog" type="email" name="" id="" />

        <textarea className="blog-detail-comment-text-area" placeholder="Message" name="" id=""  rows="3"></textarea>

        <a className="blog-detail-comment-form-btn" href="">Make appointment</a>
                   </div>
                   </div>

                </div>

                <div className="col-xxl-4">
               <BlogDetailPageSideBar />
                </div>
            </div>
        </div>
    </section>


    <Home3Footer />
    </>
  )
}

export default CameronWilliamsonPage