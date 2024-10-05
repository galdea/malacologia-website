
import Layout from "../components/layout/Layout"
import Link from "next/link"
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {

    return (
        <>
            <Layout headerStyle={25} footerStyle={13}>
                <div className="welcome-preview-section-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6" data-aos="fade-left" data-aos-duration={1000}>
                                <div className="preview-textarea">
                                    <h1 className="font-outfit font-56 lineh-64 weight-600 color margin-b24">Colección Malacológica Antonio Elizalde</h1>
                                    <p className="font-outfit font-16 lineh-26 weight-400 color margin-b30">La Colección Malacológica de Antonio Elizalde es un valioso acervo que reúne una amplia variedad de ejemplares de moluscos, destacándose por su riqueza y diversidad. Incluye especímenes de diferentes familias y géneros de diversas regiones del mundo. Cada pieza está cuidadosamente catalogada, proporcionando información sobre su clasificación y descubrimiento, ubicación geográfica, entre otros. La colección no solo es un recurso académico para investigadores y estudiantes, sino que también resalta la importancia de los moluscos en los ecosistemas acuáticos, fomentando una mayor conciencia sobre la necesidad de proteger nuestros océanos y su biodiversidad.</p>
                                    <div className="listpreview">
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Colección de Artículos &amp; Unique Design</li>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Colección Malacológica </li>
                                        </ul>
                                        <ul>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Colección Filatélica
                                            </li>
                                            <li className="font-outfit font-16 weight-500 color"><img src="/assets/images/icons/preview-check.svg" alt="" />Escríbeme</li>
                                        </ul>
                                    </div>
                                    <div className="div" data-aos="fade-left" data-aos-duration={1200}>
                                          {/* 
      <Link href="#demo" className="font-outfit font-16 lineh-18 weight-600 get-preview">
        See Demos <i className="fa-solid fa-arrow-right" />
      </Link> 
      */}
                                    </div>
                                </div>
                            </div>                   
                            </div>
                            
                        </div>
                    </div>
                    <div className="mr-5 col-lg-8 d-flex justify-content-end">
    <div className="preview-images" data-aos="fade-right" data-aos-duration={1200}>
        <img src="/assets/images/alldemo/snail-shell.png" alt="snail-shell" className="img-fluid" />
    </div>   
                </div>
          

            </Layout>
        </>
    )
}