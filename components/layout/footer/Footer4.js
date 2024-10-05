import Link from "next/link"

export default function Footer4() {
    return (
        <>
            <div className="footer3-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer4-all-area section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="footer-3logo">
                                            <img src="/assets/images/logo/logo6.png" alt="" />
                                            <p className="font-nunito font-16 lineh-26 color-26 margin-t margin-b24">Include any
                                                additional information that may be relevant or helpful for visitors, such as
                                                FAQs, pricing options, or service packages. Provide contact details.</p>
                                        </div>
                                        <div className="social3-links-area">
                                            <ul>
                                                <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                                <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-3-links align-items-center">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">About Link</h1>
                                            <ul>
                                                <li><Link href="/blog2" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t32 d-inline-block">Our
                                                    Blog</Link></li>
                                                <li><Link href="/about" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t d-inline-block">About
                                                    Us</Link></li>
                                                <li><Link href="/servicev1" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t d-inline-block">
                                                    Practice Areas</Link></li>
                                                <li><Link href="/casestudy1" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t d-inline-block">Case
                                                    Studies</Link></li>
                                                <li><Link href="/testimonials" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t d-inline-block">Testimonials</Link>
                                                </li>
                                                <li><Link href="/contact1" className="font-nunito font-16 lineh-16 color-26 weight-600 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contcat4-footer">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Get in touch</h1>
                                            <div className="location-icon4 margin-t32">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/email5.png" alt="" />
                                                </div>
                                                <Link href="/mailto:info@taxvice.com" className="font-nunito font-16 lineh-24 weight-600 color-26">info@taxvice.com</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="imgge5">
                                                    <img src="/assets/images/icons/location4.svg" alt="" />
                                                </div>
                                                <Link href="#" className="font-nunito font-16 lineh-24 weight-600 color-26">8708
                                                    Technology Forest <br /> Pl Suite 125 -G, The <br /> Woodlands, TX 77381</Link>
                                            </div>
                                            <div className="location-icon4 margin-t">
                                                <div className="image5">
                                                    <img src="/assets/images/icons/phone7.svg" alt="" />
                                                </div>
                                                <Link href="/tel:123-456-7890" className="font-nunito font-16 lineh-24 weight-600 color-26">123-456-7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="cta-contact5">
                                            <h1 className="font-20 lineh-20 font-lora weight-600 color-ni">Subscribe Our Newsletter
                                            </h1>
                                            <form className="margin-t32">
                                                <div className="cta5-form">
                                                    <input type="text" placeholder="Enter Your email" />
                                                    <div className="theme-btn6 theme-btn7">
                                                        <button type="submit" className="font-16 lineh-16 color weight-700 font-nunito">Subscribe
                                                            Now</button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border7" />
                            <div className="copyright4 text-center">
                                <p className="font-16 font-nunito color-28 weight-500 ">Copyright {new Date().getFullYear()} © Consalt Finance Consultant,
                                    Designed by Fleexstudio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor16.png" alt="" className="elementor-1" />
                <img src="/assets/images/elementor/elementor20.png" alt="" className="elementor-20" />
            </div>

        </>
    )
}
