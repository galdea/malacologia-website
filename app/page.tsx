import Layout from "../components/layout/Layout";
import 'aos/dist/aos.css';
import Image from 'next/image'; // Import Image from next/image

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
                                                <Image src="/assets/images/icons/preview-check.svg" alt="" width={20} height={20} />
                                                Colección de Artículos &amp; Unique Design
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <Image src="/assets/images/icons/preview-check.svg" alt="" width={20} height={20} />
                                                Colección Malacológica
                                            </li>
                                        </ul>
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <Image src="/assets/images/icons/preview-check.svg" alt="" width={20} height={20} />
                                                Colección Filatélica
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color">
                                                <Image src="/assets/images/icons/preview-check.svg" alt="" width={20} height={20} />
                                                Escríbeme
                                            </li>
                                        </ul>
                                    </div>

                                    <div>
                                        {/* Image section */}
                                        <div className="col-lg-8 d-flex justify-content-end">
                                            <div className="preview-images">
                                                <Image 
                                                    src="/assets/images/alldemo/snail-shell.png" 
                                                    alt="snail-shell" 
                                                    layout="responsive" // Use responsive layout
                                                    width={800} // Set the width according to your design
                                                    height={600} // Set the height according to your design
                                                    className="img-fluid" 
                                                    style={{ marginRight: '100px', marginTop: '-80px' }} // Adjust marginRight to push the image further
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
