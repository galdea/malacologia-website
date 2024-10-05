import Link from "next/link"

export default function Footer11() {
    return (
        <>
            <div className="footer11-section-area">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footerall-section section-padding7">
                                <div className="row">
                                    <div className="col-lg-3 col-md-6">
                                        <div className="footer-all-logos">
                                            <img src="/assets/images/logo/logo17.png" alt="" />
                                            <p className="font-outfit font-16 lineh-26 weight-400 color opacity1 margin-t">Include
                                                any additional information that may be relevant or helpful for visitors, such as
                                                FAQs, pricing options, or service packages. Provide contact details.</p>
                                            <div className="social11-linksarea">
                                                <ul>
                                                    <li><Link href="#"><i className="fa-brands fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-google-plus-g" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-linkedin-in" /></Link></li>
                                                    <li><Link href="#"><i className="fa-brands fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="more-service-area">
                                            <h1 className="font-outfit font-20 weight-600 color lineh-20">Our Services</h1>
                                            <div className="more-service-list">
                                                <ul>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Pathway
                                                        Pass Immigration</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Visa
                                                        Pro Connect</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Visa
                                                        Voyage Consulting</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Gateway
                                                        Visa Services</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Visa
                                                        Global Conect</Link></li>
                                                    <li><Link href="#" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Visa
                                                        Way Experts</Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-3 col-md-6">
                                        <div className="more-service-area">
                                            <h1 className="font-outfit font-20 weight-600 color lineh-20">Useful Links</h1>
                                            <div className="more-service-list">
                                                <ul>
                                                    <li><Link href="/" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Home</Link>
                                                    </li>
                                                    <li><Link href="/about" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">About
                                                        Us</Link></li>
                                                    <li><Link href="/servicemiddle" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Our
                                                        Services</Link></li>
                                                    <li><Link href="/casestudy1" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Case
                                                        Study</Link></li>
                                                    <li><Link href="/blogmiddle" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Blog</Link>
                                                    </li>
                                                    <li><Link href="/team" className="font-outfit font-16 lineh-16 color-21 weight-400 margin-t d-inline-block">Team</Link>
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
                        <div className="col-lg-12">
                            <div className="boredr11" />
                            <div className="copyright11">
                                <p className="font-16 font-outfit lineh-16 weight-400 color-21 text-center">© {new Date().getFullYear()} Visa &amp;
                                    Immigration Consulting Consalt. All Rights Reserved Designed By Fleexstudio</p>
                            </div>
                        </div>
                    </div>
                    <img src="/assets/images/elementor/elementor79.png" alt="" className="elementors79" />
                </div>
            </div>

        </>
    )
}
