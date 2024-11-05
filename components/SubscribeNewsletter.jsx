import SubscribeMail from "../src/assets/home/subscribe-newsletter/Subscribe-mail.svg"

const SubscribeNewsletter = () => {
  return (
    <>
    <section className="subscribe-newsletter-sec">
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="subscribe-newsletter-tit-wraper">
                    <h3 className="subscribe-newsletter-tit" data-aos="fade-up" data-aos-delay="150" data-aos-duration="1000">
                    Subscribe <b>Newsletter</b> & Get Company News
                    </h3>

                    <div className="subscribe-newsletter-input" data-aos="fade-up" data-aos-delay="150" data-aos-duration="2000">
                        <img src={SubscribeMail} alt="" className="subscribe-newsletter-mail" />
                    <input placeholder="Your email" type="text" name="" id="" />
                    <button className="subscribe-newsletter-btn">Subscribe</button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default SubscribeNewsletter