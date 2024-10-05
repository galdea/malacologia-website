import { useEffect, useState } from "react";

export default function BackToTop() {
    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 100 && !hasScrolled) {
                setHasScrolled(true);
            } else if (window.scrollY < 100 && hasScrolled) {
                setHasScrolled(false);
            }
        };

        window.addEventListener("scroll", onScroll);

        return () => {
            window.removeEventListener("scroll", onScroll);
        };
    }, [hasScrolled]);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <>
            {hasScrolled && (
                <div className="paginacontainer">
                    <div
                        className="progress-wrap active-progress go-top-top"
                        onClick={scrollToTop}
                    >
                        <svg
                            className="progress-circle svg-content"
                            width="100%"
                            height="100%"
                            viewBox="-1 -1 102 102"
                        >
                            <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" />
                        </svg>
                    </div>
                </div>
            )}
        </>
    );
}
