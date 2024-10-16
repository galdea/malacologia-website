import Layout from "../components/layout/Layout"
import 'aos/dist/aos.css';

export default function Home() {
    return (
        <>
            <Layout headerStyle={25} footerStyle={13} breadcrumbTitle="Antonio Elizalde">
                <div className="welcome-preview-section-area pt-5">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                <div className="preview-textarea">
                                    <h1 className="font-outfit font-56 lineh-64 weight-600 color margin-b24">Colección Malacológica Antonio Elizalde</h1>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color margin-b30">La Colección Malacológica de Antonio Elizalde es un valioso acervo...</p>
                                    
                                    <div className="listpreview">
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <img src="/assets/images/icons/preview-check.svg" alt="" />
                                                Colección de Artículos &amp; Unique Design
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <img src="/assets/images/icons/preview-check.svg" alt="" />
                                                Colección Malacológica
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <img src="/assets/images/icons/preview-check.svg" alt="" />
                                                Colección Filatélica
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <img src="/assets/images/icons/preview-check.svg" alt="" />
                                                Escríbeme
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        {/* Image section */}
                                        <div className="col-lg-8 d-flex justify-content-end">
                                            <div className="preview-images">
                                                <img 
                                                    src="/assets/images/alldemo/snail-shell.png" 
                                                    alt="snail-shell" 
                                                    className="img-fluid" 
                                                    style={{ width: '100%', objectFit: 'contain', marginRight: '100px', marginTop: '-80px' }} // Adjust marginRight to push the image further
                                                />
                                            </div>
                                        </div>
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
