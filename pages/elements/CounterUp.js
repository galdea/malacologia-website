'use client'
import { useState, useRef } from 'react'
import Counter from './Counter'

export default function CounterUp({ count }) {
    const [inViewport, setInViewport] = useState(false)
    const counterRef = useRef(null)

    const handleScroll = () => {
        if (counterRef.current) {
            const rect = counterRef.current.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true)
                // Remove the scroll event listener once in viewport
                window.removeEventListener('scroll', handleScroll)
            }
        }
    }

    // Attach scroll event listener on component mount
    window.addEventListener('scroll', handleScroll)

    // Return the JSX
    return (
        <span className="counter" ref={counterRef}>
            {inViewport && <Counter end={count} duration={20} />}
        </span>
    )
}
