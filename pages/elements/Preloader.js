import Image from 'next/image';

export default function Preloader() {
    return (
        <>
            <div id="pre-load">
                <div id="loader" className="loader">
                    <div className="loader-container">
                        <div className="loader-icon">
                            <Image 
                                src="/assets/images/logo/logos11.png" 
                                alt="Loading logo" 
                                width={100} // Specify the desired width
                                height={100} // Specify the desired height
                                priority // Optional: Use priority loading for the preloader image
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
