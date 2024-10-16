
import Link from "next/link"

export default function Header25({ scroll /*, isMobileMenu, handleMobileMenu*/ }) {
    return (
        <>
            <header className="header about-bg d-none d-lg-block">
                <div className={`header-area header previewsticky ${scroll ? "sticky" : ""}`} id="header">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="header-elements">
                                    <div className="site-logo">
                                        <Link href="/" className="font-outfit font-28 weight-500 text-white">Antonio Elizalde</Link>
                                    </div>
                                    <div className="main-menu-ex homepage5 mainmenuex previewdemo">
                                        <ul>
                                        <li className="mega-dropdawn">
  <Link href="/">Home
  </Link></li>
                                        <li className="mega-dropdawn">
  <Link href="src/pages/id" target="_blank" rel="noopener noreferrer">Malecología
  </Link>
</li>
                                            <li><Link href="/#service" className="font-outfit font-10 weight-500 color-0">Filatelia</Link>
                                            </li>
                                            <li><Link href="/#pages" className="font-outfit font-10 weight-500 color-0">Artículos</Link></li>
                                        </ul>
                                    </div>
                                    <div className="contact-3 d-lg-block d-none">
                                        <div className="all-3-btn theme-btn1">
                                            <div className="theme-btn4">
                                                <Link href="/#Footer13" className="purchasebtn font-outfit font-16 weight-700 color">Contactarme
                                                    <span><i className="fa-solid fa-arrow-right-long" /></span></Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
