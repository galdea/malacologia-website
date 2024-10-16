import Image from 'next/image';
import { useEffect } from 'react';

export default function Preloader() {
    useEffect(() => {
        // Simulate loading time
        const timer = setTimeout(() => {
            const preloader = document.getElementById('pre-load');
            if (preloader) {
                preloader.style.display = 'none'; // Hide the preloader
            }
        }, 3000); // Change this duration as needed

        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <>
            <div id="pre-load">
                <div id="loader" className="loader">
                    <div className="loader-container">
                        <div className="loader-icon">
                            <Image 
                                src="/assets/images/logo/logos11.png" 
                                alt="Loading..." 
                                width={100} // Specify width
                                height={100} // Specify height
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

