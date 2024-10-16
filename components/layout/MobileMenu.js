import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function MobileMenu({ isMobileMenu, handleMobileMenu }) {
    const [activeKey, setActiveKey] = useState(null);

    const handleToggle = (key) => {
        setActiveKey((prevKey) => (prevKey === key ? null : key));
    };

    // Utility function for class names
    const getSubmenuClass = (key) => (activeKey === key ? "block" : "none");
    
    return (
        <>
            <div className="mobile-header mobile-header-4 d-block d-lg-none homepagesmall">
                <div className="container-fluid">
                    <div className="col-12">
                        <div className="mobile-header-elements">
                            <div className="mobile-logo">
                                <Link href="/index1">
                                    <Image src="/assets/images/logo/logo7.png" alt="Logo" width={100} height={40} />
                                </Link>
                            </div>
                            <div className="mobile-nav-icon dots-menu" onClick={handleMobileMenu}>
                                <i className="fa-solid fa-bars" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`mobile-sidebar ${isMobileMenu ? "mobile-menu-active" : ""}`}>
                <div className="logoicons-area">
                    <div className="logo">
                        <Image src="/assets/images/logo/logo7.png" alt="Logo" width={100} height={40} />
                    </div>
                    <div className="menu-close" onClick={handleMobileMenu}>
                        <i className="fa-solid fa-xmark" />
                    </div>
                </div>

                <nav className="mobile-nav">
                    <ul className="mobile-nav-list">
                        <li className="has-sub">
                            <span className={`submenu-button ${activeKey === 1 ? "submenu-opened" : ""}`} onClick={() => handleToggle(1)}>
                                <em />
                            </span>
                            <Link href="#" className="font-ks font-16 weight-500 color">Home</Link>
                            <ul className="sub-menu" style={{ display: getSubmenuClass(1) }}>
                                {/* Nested Links */}
                                {["index1", "index7", "index3", "index8", "index2", "index5", "index4", "index6", "index9", "index10", "index11", "index12"].map((item, index) => (
                                    <li key={index}>
                                        <Link href={`/${item}`} className="font-ks font-16 weight-500 color">
                                            {`Consulting ${index % 2 === 0 ? "Law" : index % 3 === 0 ? "Tax" : "Business"} ${Math.floor(index / 2) + 1}`}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* Other Menu Items */}
                        <li className="has-sub">
                            <Link href="/about" className="font-ks font-18 weight-600 color">About</Link>
                        </li>
                        {/* Repeat for other sections like Our Services, Case Studies, Blog, etc., following the same pattern */}

                        <li className="has-sub">
                            <span className={`submenu-button ${activeKey === 2 ? "submenu-opened" : ""}`} onClick={() => handleToggle(2)}>
                                <em />
                            </span>
                            <Link href="#" className="font-ks font-16 weight-500 color">Our Services</Link>
                            <ul className="sub-menu" style={{ display: getSubmenuClass(2) }}>
                                <li><Link href="/servicev1" className="font-ks font-16 weight-500 color-1">Service V1</Link></li>
                                <li><Link href="/servicev2" className="font-ks font-16 weight-500 color">Service V2</Link></li>
                                <li><Link href="/serviceleft" className="font-ks font-16 weight-500 color">Service Details Left</Link></li>
                                <li><Link href="/serviceright" className="font-ks font-16 weight-500 color">Service Details Right</Link></li>
                                <li><Link href="/servicemiddle" className="font-ks font-16 weight-500 color">Single Service</Link></li>
                            </ul>
                        </li>
                        
                        {/* Additional sections like testimonials, blog, pages, etc. */}
                    </ul>
                </nav>

                <div className="allmobilesection">
                    <Link href="#" className="font-ks font-18 lineh-18 weight-700 color mobilemenubtn">Get Started</Link>
                    <div className="single-footer single-footer-menu single-footer4">
                        <h3 className="font-ks font-24 lineh-24 weight-600 color margin-b margin-t24">Contact Info</h3>
                        {/* Contact information sections */}
                        {/* Repeat for other sections as necessary */}
                    </div>
                </div>
            </div>
        </>
    );
}
