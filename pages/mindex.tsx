
import Layout from "../pages/Layout"
import Link from "next/link"

export default function Home() {

    return (
        <>
            <Layout headerStyle={1} footerStyle={1}>
                <div className="welcome-preview-section-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                <div className="preview-textarea">
                                    <h1 className="font-outfit font-56 lineh-64 weight-600 color margin-b24">Consult - Law, Finance,
                                        Tax,Visa, Business Consulting HTML Template</h1>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color margin-b30">The theme often features a
                                        clean, professional, and corporate design to instill trust and credibility in visitors.</p>
                                    <div className="listpreview">
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Clean &amp; Unique Design</li>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Well Documented </li>
                                        </ul>
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Responsive &amp; Mobile Friendly
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Valid HTML5 &amp; CSS3</li>
                                        </ul>
                                    </div>
                                    <div className="div" data-aos="fade-left" data-aos-duration={1200}>
                                        <Link href="#demo" className="font-outfit font-16 lineh-18 weight-600 get-preview">See Demos <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="preview-images " data-aos="fade-right" data-aos-duration={1200}>
                                    <img src="/assets/images/alldemo/previewimges2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== WELCOME END=======*/}
                {/*===== ABOUT STARTS=======*/}
                <div className="preview-about-section-area section-padding5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5">
                                <div className="preview-abiut-area" data-aos="fade-right" data-aos-duration={1000}>
                                    <h1 className="font-outfit font-44
     lineh-52 weight-600 color-1 margin-b text-capitalize">We are the best Agency Improve your Business</h1>
                                    <p className="font-16 font-outfit lineh-26 weight-400 colro-30">It's essential for the theme to have
                                        a responsive design to ensure it looks and functions well on various devices and screen
                                        sizes, including desktops, tablets, and mobile phones.</p>
                                    <div data-aos="fade-up" data-aos-duration={1200}>
                                        <Link href="https://themeforest.net/user/vikinglab/portfolio" className="font-outfit font-16 lineh-24 weight-600 color aboutpreview">Purchase Now <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-2" />
                            <div className="col-lg-4" data-aos="zoom-in" data-aos-duration={800} data-aos-easing="linear">
                                <div className="counter-preview-area">
                                    <div className="row">
                                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1000} data-aos-easing="linear">
                                            <div className="counterpreview text-center">
                                                <h1 className="font-40 font-outfit lineh40 weight-600 color-1 margin-b10 ts"><span className="counter">24</span>+</h1>
                                                <p className="font-16 font-outfit lineh-18 weight-400 color-1 ts">Home Pages</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1200} data-aos-easing="linear">
                                            <div className="counterpreview text-center">
                                                <h1 className="font-40 font-outfit lineh40 weight-600 color-1 margin-b10 ts"><span className="counter">20</span>+</h1>
                                                <p className="font-16 font-outfit lineh-18 weight-400 color-1 ts">Inner Pages</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-aos="zoom-in" data-aos-duration={1400} data-aos-easing="linear">
                                            <div className="counterpreview text-center">
                                                <h1 className="font-40 font-outfit lineh40 weight-600 color-1 margin-b10 ts"><span className="counter">40</span>+</h1>
                                                <p className="font-16 font-outfit lineh-18 weight-400 color-1 ts">Total Pages</p>
                                            </div>
                                        </div>
                                        <div className="col-lg-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={1400}>
                                            <div className="counterpreview text-center">
                                                <h1 className="font-40 font-outfit lineh40 weight-600 color-1 margin-b10 ts"><span className="counter">100</span>+</h1>
                                                <p className="font-16 font-outfit lineh-18 weight-400 color-1 ts">Custom Addons</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== ABOUT END=======*/}
                {/*===== SERVICE STARTS=======*/}
                <div className="service-preview-section-area section-padding8" id="blog">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="service-preview-haeder text-center margin-b60">
                                    <span className="font-outfit font-16 lineh-18 weight-400 color36 d-inline-block aboutsan margin-b20">All
                                        Time Support</span>
                                    <h1 className="font-outfit font-44 lineh-52 weight-600 color-1 text-capitalize">We take support
                                        seriously</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={800}>
                                <div className="service-preview-box text-center">
                                    <div className="servicepreview-icon">
                                        <img src="/assets/images/icons/sevicepreview1.svg" alt="" />
                                    </div>
                                    <div className="service-preview-text text-center">
                                        <Link href="#" className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts">Continuous
                                            Updates</Link>
                                        <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">Our certified
                                            public accountants have to this knowledge and experience in a wide variety of
                                            industries. We offer diverse &amp; unique specialty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="service-preview-box text-center">
                                    <div className="servicepreview-icon">
                                        <img src="/assets/images/icons/servicepreview2.svg" alt="" />
                                    </div>
                                    <div className="service-preview-text text-center">
                                        <Link href="#" className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts">Professional
                                            Support</Link>
                                        <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">Our certified
                                            public accountants have to this knowledge and experience in a wide variety of
                                            industries. We offer diverse &amp; unique specialty</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="service-preview-box text-center">
                                    <div className="servicepreview-icon">
                                        <img src="/assets/images/icons/servicepreview3.png" alt="" />
                                    </div>
                                    <div className="service-preview-text text-center">
                                        <Link href="#" className="font-outfit font-24 lineh-26 weight-600 color-1 d-inline-block margin-b ts">Extensive
                                            Knowledgebase</Link>
                                        <p className="font-outfit font-16 lineh-26 weight-400 colro-30 margin-b24 ts">Our certified
                                            public accountants have to this knowledge and experience in a wide variety of
                                            industries. We offer diverse &amp; unique specialty</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== SERVICE ENDS=======*/}
                {/*===== COMPANY STARTS=======*/}
                <div className="preview-homepages section-padding8" id="demo">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-5 m-auto">
                                <div className="homepages-header text-center margin-b60">
                                    <span className="font-outfit font-16 lineh-18 weight-400 color36 d-inline-block aboutsan margin-b20">12
                                        Homepages</span>
                                    <h1 className="font-outfit font-44 lineh-52 weight-600 color-1 text-capitalize">Great Collection of
                                        <br /> ready-made templetes</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={800}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg2.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index1" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index1" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index1" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Law Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg3.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index7" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index2" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index7" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Law Consulting 02</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={1200}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg4.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index3" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index3" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index3" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Tax Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={800}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg5.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index8" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index4" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index3" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Tax Consulting 02</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg6.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index2" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index5" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index2" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Business Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg7.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index5" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index6" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index5" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Business Consulting 02</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-out" data-aos-duration={800}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg8.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index4" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index7" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index4" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Finance Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg9.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index6" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index8" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index6" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Finance Consulting 02</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-out" data-aos-duration={1200}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg10.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index9" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index9" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index9" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Insurance Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={800}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg11.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index10" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index10" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index10" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Insurance Consulting 02</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg12.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index11" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index11" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index11" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Visa Consulting 01</Link>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="preview-homepagesarea">
                                    <div className="preview-hom1">
                                        <img src="/assets/images/alldemo/previewimg13.png" alt="" />
                                    </div>
                                    <div className="prewhome-btn">
                                        <Link href="index12" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Multiple Page <i className="fa-solid fa-arrow-right" /></Link> <br />
                                        <Link href="single-index12" className="font-outfit font-16 lineh-18 weight-600 color36 d-inline-block singlebtn" target="_bank">View Single Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <Link href="index12" className="text-center font-outfit font-20 lineh-24 weight-600 color-1 d-inline-block lawconsulting" target="_bank">Visa Consulting 02</Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== COMPANY END=======*/}
                {/*===== INNERPAGES STARTS=======*/}
                <div className="prevewinber-section-area section-padding8" id="pages">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="previewinner-header text-center margin-b60">
                                    <span className="font-outfit font-16 lineh-18 weight-500 color36 d-inline-block aboutsan margin-b20">Inner
                                        Pages</span>
                                    <h1 className="font-outfit font-44 lineh-52 weight-600 color-1 text-capitalize">Our 20+ Awesome
                                        Inner Page</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={600}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/aboutinner1.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="about" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="about" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">About Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={800}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner2.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="servicev1" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="servicev1" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Our Service V1</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner3.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="servicev2" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="servicev2" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Our Service V2</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={800}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner4.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="serviceright" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="serviceright" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Service Details Right Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner5.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="serviceleft" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="serviceleft" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Service Details Left Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner6.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="servicemiddle" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="servicemiddle" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Service Details Middle Fuild</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={600}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner7.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="team" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="team" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Our Team Member</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={800}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner8.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="casestudy1" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="casestudy1" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Case Study 3 Grid</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner9.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="caseleft" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="caseleft" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Case Details Left Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={1200}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner10.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="caseright" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="caseright" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Case Details Right Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={800}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner11.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="casemiddle" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="casemiddle" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Case Details Middle Fuild</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner12.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="testimonials" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="testimonials" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Testimonials</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner13.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="blog2" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="blog2" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Blog Grid 3</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner14.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="blog3" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="blog3" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Blog Grid 2</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner15.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="blogleft" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="blogleft" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Blog Details Left Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner17.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="blogright" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="blogright" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Blog Details Right Sidebar</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={1200}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner16.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="blogmiddle" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="blogmiddle" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Blog Details Middle Fuild</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="fade-down" data-aos-duration={1400}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner18.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="contact1" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="contact1" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Contact Us V1</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={800}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner19.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="contact2" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="contact2" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Contact Us V2</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/aboutinner1.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="about" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="about" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">About Us</Link>
                                </div>
                            </div>
                            <div className="col-lg-4  col-md-6" data-aos-easing="linear" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="innerpages-boxarea">
                                    <div className="inner-images">
                                        <img src="/assets/images/alldemo/inner20.png" alt="" />
                                    </div>
                                    <div className="inner-activebtn">
                                        <Link href="team-details" className="font-outfit font-16 lineh-18 weight-600 color d-inline-block margin-b20 multiplebtn" target="_bank">View Page <i className="fa-solid fa-arrow-right" /></Link>
                                    </div>
                                </div>
                                <div className="link-pera text-center">
                                    <Link href="team-details" className="font-20 font-outfit lineh-24 weight-600 color-1 linkabout" target="_bank">Team Details</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== INNERPAGES END=======*/}
                {/*===== TAb_MOBILE STARTS=======*/}
                <div className="tab-mobile-section-area section-padding5" id="service">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5" data-aos-easing="linear" data-aos="fade-right" data-aos-duration={1000}>
                                <div className="tabs-header">
                                    <span className="font-outfit font-16 lineh-18 weight-500 color36 d-inline-block aboutsan margin-b20">Mobile/Tablet</span>
                                    <h1 className="font-outfit font-44 lineh-52 weight-600 color-1 margin-b text-capitalize">
                                        Mobile/Tablet Friendly</h1>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color-30">It's essential for the theme to have
                                        a responsive design to ensure it looks and functions well on various devices and screen
                                        sizes, including desktops, tablets, and mobile phones.</p>
                                    <Link href="https://themeforest.net/user/vikinglab/portfolio" className="font-outfit font-16 lineh-24 weight-600 color aboutpreview">Purchase Now <i className="fa-solid fa-arrow-right" /></Link>
                                </div>
                            </div>
                            <div className="col-lg-7" data-aos-easing="linear" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="mobile-tab-images">
                                    <img src="/assets/images/alldemo/tab-mobile.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*===== TAB_ MOBILE END=======*/}
                {/*===== FEATURES  STARTS=======*/}
                <div className="features-section-area section-padding8">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 m-auto">
                                <div className="features-header text-center margin-b60">
                                    <span className="font-outfit font-16 lineh-18 weight-500 color d-inline-block aboutsan margin-b20">Our
                                        Features</span>
                                    <h1 className="font-outfit font-44 lineh-52 weight-600 color margin-b text-capitalize">Unique
                                        Template Features</h1>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={800}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/htmlicon.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Total 40+ HTML Pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1000}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon1.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Unique 12+ Home Pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1200}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon2.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Animations By CSS 3</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="fade-up" data-aos-duration={1400}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon3.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Total 40+ HTML pages</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={800}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon4.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Made With Bootstarp 5</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1000}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon5.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Get Smooth Animation</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1200}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon6.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Full Browsers Compatibility</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1400}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon7.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Well Documentations</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-duration={1600}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon8.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Easy to Customize Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1000}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon9.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">More Unique Design</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1200}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon10.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">Adobe Stock Images</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6" data-aos="zoom-out" data-aos-duration={1400}>
                                <div className="features-boxareab text-center">
                                    <div className="features-icon">
                                        <img src="/assets/images/icons/featuresicon11.svg" alt="" />
                                    </div>
                                    <div className="faetures-text">
                                        <p className="font-outfit font-16 lineh-26 weight-500 color">24/7 Support For Customer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </Layout>
        </>
    )
}