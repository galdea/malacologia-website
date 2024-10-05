
import Link from "next/link"

export default function Footer2() {
    return (
        <>
            <div className="footer2-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-all-padding section-padding5">
                                <div className="row">
                                    <div className="col-lg-4 col-md-6">
                                        <div className="footer-logo2">
                                            <img src="/assets/images/logo/logo4.png" alt="" />
                                            <p className="font-16 lineh-26 color weight-400 font-outfit margin-b24 margin-t">Include
                                                any additional information that may <br /> be relevant or helpful for visitors,
                                                such as <br /> FAQs, pricing options, or service packages. <br /> Provide contact
                                                details.</p>
                                            <div className="social2-links">
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
                                        <div className="our-service-area">
                                            <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">Our services
                                            </h1>
                                            <div className="servicefooter-list">
                                                <ul>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400">Strategy
                                                        Consulting</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Strategy
                                                        &amp; Planning</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Marketing
                                                        &amp; Sales</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">IT
                                                        Consulting</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Change
                                                        Managment</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Process
                                                        Improvement</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-1" />
                                    <div className="col-lg-2 col-md-6">
                                        <div className="our-service-area">
                                            <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">Useful Links
                                            </h1>
                                            <div className="servicefooter-list">
                                                <ul>
                                                    <li><Link href="/" className="font-outfit font-16 color-21 lineh-16 weight-400">Home</Link>
                                                    </li>
                                                    <li><Link href="/about" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">About
                                                        Us </Link></li>
                                                    <li><Link href="/servicev1" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Our
                                                        Services</Link></li>
                                                    <li><Link href="/casestudy1" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Case
                                                        Study</Link></li>
                                                    <li><Link href="/blog2" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Blog</Link>
                                                    </li>
                                                    <li><Link href="/team" className="font-outfit font-16 color-21 lineh-16 weight-400 margin-t d-inline-block">Team</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="contact-footer">
                                            <h1 className="font-20 color-21 lineh-20 font-outfit margin-b24 weight-600">Contact Us
                                            </h1>
                                            <div className="email4">
                                                <img src="/assets/images/icons/email4.svg" alt="" />
                                                <Link href="/mailto:info@taxvice.com" className="font-16 lineh-24 color-21 weight-400 font-outfit">info@taxvice.com</Link>
                                            </div>
                                            <div className="email4 margin-t">
                                                <img src="/assets/images/icons/location3.svg" alt="" />
                                                <Link href="/mailto:info@taxvice.com" className="font-16 lineh-24 color-21 weight-400 font-outfit">8708 Technology
                                                    Forest Pl Suite 125 -G, The Woodlands, TX 77381</Link>
                                            </div>
                                            <div className="email4 margin-t">
                                                <img src="/assets/images/icons/phone5.svg" alt="" />
                                                <Link href="/tel:123-456-7890" className="font-16 lineh-24 color-21 weight-400 font-outfit">123-456-7890</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="border-10" />
                <div className="copyright">
                    <div className="row">
                        <div className="col-lg-12 text-center">
                            <div className="copyright1">
                                <p className="font-outfit font-16 lineh-26 weight-400 ">© {new Date().getFullYear()} Business Consulting Consalt. All
                                    Rights Reserved Designed By Fleexstudio</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src="/assets/images/elementor/elementor14.png" alt="" className="elementor-14" />
            </div>

        </>
    )
}
