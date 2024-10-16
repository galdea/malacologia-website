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
            }
        }
    }

    // Attach scroll event listener on mount
    window.addEventListener('scroll', handleScroll)

    // Cleanup listener when component unmounts
    // This should be run in a useEffect, but if you're avoiding it, be aware of potential issues
    const cleanup = () => {
        window.removeEventListener('scroll', handleScroll)
    }

    // Run cleanup when the component is about to unmount
    return (
        <span className="counter" ref={counterRef}>
            {inViewport && <Counter end={count} duration={20} />}
            {cleanup()}
        </span>
    )
}
