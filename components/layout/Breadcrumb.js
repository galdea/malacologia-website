import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="welcomeabout-area">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcomeaboiut2 text-center">
                            <h1 className="font-lora font-10 lineh-6 weight-100 color">{breadcrumbTitle}</h1>
                            <p className="font-2 weight-100 font-ks lineh-2 color"><Link href="/" className="color">Home</Link><span><i className="fa-solid fa-angle-right" /></span>{breadcrumbTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
