import Link from "next/link"

export default function Footer3() {
    return (
        <>
            <div className="cta-footer-sectin-area">
                <img src="/assets/images/elementor/elementor1.png" alt="" className="elementor1" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="cta-section-area">
                                <div className="row align-items-center">
                                    <div className="col-lg-6" data-aos="fade-right" data-aos-duration={1000}>
                                        <div className="cta-header-text">
                                            <h1 className="font-lora font-32 lineh-50 weight-500 color margin-b">Sign Up for
                                                Newsletters</h1>
                                            <p className="font-ks font-16 lineh-26 weight-400 color">Your information will never be
                                                shared with anyone outside the law firm.</p>
                                        </div>
                                    </div>
                                    <div className="col-lg-2" />
                                    <div className="col-lg-4" data-aos="fade-left" data-aos-duration={1000}>
                                        <div className="cta-from-area">
                                            <form>
                                                <div className="input-area">
                                                    <input type="text" placeholder="Enter Your email" />
                                                </div>
                                                <div className="theme-btn2 margin-t32 cta-from">
                                                    <button type="submit" className="font-16 weight-700 lineh-26 color font-ks theme-get-tex">Subscribe
                                                        <img src="/assets/images/icons/arrowright.svg" alt="" /></button>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border2 w-100" />
                <div className="container">
                    <div className="row section-padding12">
                        <div className="col-lg-3">
                            <div className="footer-logo-text">
                                <img src="/assets/images/logo/logo2.png" alt="" className="margin-b" />
                                <p className="font-ks font-15 lineh-26 color-21 weight-500">Personal Tax Planning: Our tax
                                    consultants work closely with individuals to develop comprehensive tax plans tailored to
                                    their unique financial situations.</p>
                                <div className="social-links-area margin-t32">
                                    <ul>
                                        <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                        <li><Link href="#" className="ml1"><i className="fa-brands fa-x-twitter" />
                                        </Link></li>
                                        <li><Link href="#" className="ml1"><i className="fa-brands fa-instagram" /></Link></li>
                                        <li><Link href="#" className="ml1"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="law-firm-text">
                                <h1 className="font-lora font-20 lineh-20 weight-500 color">Tax Law Firm</h1>
                                <div className="law-firm-list">
                                    <ul>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Resources
                                            for Small Business </Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Selecting
                                            a Business Type </Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Forming a
                                            Corporation</Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Texas
                                            Business Law </Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Tax
                                            Consult Agreements</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="law-firm-text">
                                <h1 className="font-lora font-20 lineh-20 weight-500 color">Practice Area</h1>
                                <div className="law-firm-list">
                                    <ul>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Tax
                                            Planning</Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Tax Audit
                                            Support </Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">International
                                            Taxation</Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Income Tax
                                            Preparation</Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Corporate
                                            Tax Services</Link></li>
                                        <li><Link href="#" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t">Sales and
                                            Use Tax Consulting</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="law-firm-text">
                                <h1 className="font-lora font-20 lineh-20 weight-500 color">Contact Us</h1>
                                <div className="law-firm-list">
                                    <ul>
                                        <li><Link href="/tel:123-456-7890" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t"> <img src="/assets/images/icons/phone2.png" alt="" />123-456-7890 </Link></li>
                                        <li><Link href="/mailto:info@consult.com" className="font-16 font-ks lineh-16 weight-500 color-21 margin-t"><img src="/assets/images/icons/email2.svg" alt="" />info@consult.com </Link></li>
                                    </ul>
                                    <span className="location-fooetr">
                                        <img src="/assets/images/icons/location2.png" alt="" />
                                        <Link href="#" className="font-16 font-ks lineh-26 weight-500 color-21 margin-t">8701 New
                                            Trails, Suite 200 The Woodlands, Texas 77381</Link>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border2 w-100 margin-area" />
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="copyright-section-area">
                                <p className="font-16 lineh-26 weight-500 font-ks">© Copyright {new Date().getFullYear()} Consalt Tax Consultant, Designed
                                    by Fleexstudio</p>
                                <div className="copyright-list">
                                    <ul>
                                        <li><Link href="#" className="font-16 lineh-16 font-ks  weight-500">Sitemap</Link></li>
                                        <li><Link href="#" className="font-16 lineh-16 font-ks  weight-500">Privacy Policy</Link></li>
                                        <li><Link href="#" className="font-16 lineh-16 font-ks  weight-500">Disclaimer</Link></li>
                                        <li><Link href="#" className="font-16 lineh-16 font-ks  weight-500">Terms of Use</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
