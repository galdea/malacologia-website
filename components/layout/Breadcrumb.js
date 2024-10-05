import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {
    return (
        <>
            <div className="welcomeabout-area">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="welcomeaboiut2 text-center">
                            <h1 className="font-lora font-60 lineh-64 weight-500 color margin-b24">{breadcrumbTitle}</h1>
                            <p className="font-20 weight-500 font-ks lineh-20 color"><Link href="/" className="color">Home</Link><span><i className="fa-solid fa-angle-right" /></span>{breadcrumbTitle}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
