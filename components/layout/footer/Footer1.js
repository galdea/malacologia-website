import Link from "next/link"


export default function Footer1() {
    return (
        <>
            <div className="footer4-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="contcat5-section5-area section-padding15">
                                <div className="row">
                                    <div className="col-lg-3">
                                        <div className="contact5-logo5-text">
                                            <img src="/assets/images/logo/logo7.png" alt="" />
                                            <p className="font-ks font-16 weight-500 lineh-26 color32 margin-t margin-b24">Include
                                                any additional information that may be relevant or helpful for visitors, such as
                                                FAQs, pricing options, or service packages. Provide contact details.</p>
                                            <div className="icon-social-links">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-google-plus-g" /></Link>
                                                    </li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-linkedin-in" /></Link>
                                                    </li>
                                                    <li><Link href="#" className="ml1"><i className="fa-brands fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-2 col-md-6">
                                        <div className="about-5-links">
                                            <h1 className="font-20 font-lora weight-600 lineh-20 color">About Link</h1>
                                            <ul>
                                                <li><Link href="/about" className="font-ks font-16 lineh-16 weight-500 color32 d-inline-block margin-t32">About
                                                    Us</Link></li>
                                                <li><Link href="/blog2" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Our
                                                    Blog</Link></li>
                                                <li><Link href="/servicev1" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Practice
                                                    Areas</Link></li>
                                                <li><Link href="/casestudy1" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Case
                                                    Studies</Link></li>
                                                <li><Link href="/testimonials" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Testimonials</Link>
                                                </li>
                                                <li><Link href="/contact1" className="font-ks font-16 lineh-16 weight-500 color32 margin-t d-inline-block">Contact
                                                    Us</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contact-footer heightleft">
                                            <h1 className="font-20 color lineh-20 font-lora margin-b24 weight-600">Contact Us</h1>
                                            <div className="email4">
                                                <img src="/assets/images/icons/email4.svg" alt="" />
                                                <Link href="/mailto:info@taxvice.com" className="font-16 lineh-24 color32 weight-400 font-ks">info@taxvice.com</Link>
                                            </div>
                                            <span className="location-fooetr ">
                                                <img src="/assets/images/icons/location2.png" alt="" className="heightwidth" />
                                                <Link href="#" className="font-16 font-ks lineh-26 weight-500 color32 margin-t">8708
                                                    Technology Forest <br /> Pl Suite 125 -G, The <br /> Woodlands, TX 77381</Link>
                                            </span>
                                            <div className="email4 margin-t">
                                                <img src="/assets/images/icons/phone5.svg" alt="" />
                                                <Link href="/tel:123-456-7890" className="font-16 lineh-24 color32 weight-400 font-ks">123-456-7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-4">
                                        <div className="contactcta5-form">
                                            <div className="contact6-ctafrom">
                                                <h1 className="font-20 font-lora weight-600 lineh-20 color">Subscribe Our Newsletter
                                                </h1>
                                                <form>
                                                    <input type="text" placeholder="Enter Your email" />
                                                    <div className="contact5-btn15">
                                                        <button className="font-ks font-16 lineh-16 weight-700 color contcat6" type="submit">Submit Now <span><i className="fa-solid fa-arrow-right" /></span></button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="border10" />
                            <div className="copyright6 text-center">
                                <p className="font-ks lineh-26 weight-500 font-16 color32">© Copyright {new Date().getFullYear()} Consalt Law Consultant,
                                    Designed by Fleexstudio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor72.png" alt="" className="elementors73" />
            </div>

        </>
    )
}
