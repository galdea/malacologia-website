'use client'
import { useEffect, useState, useCallback } from 'react'
import Counter from './Counter'

export default function CounterUp({ count }) {
    const [inViewport, setInViewport] = useState(false)

    const handleScroll = useCallback(() => {
        const elements = document.getElementsByClassName('counter')
        if (elements.length > 0) {
            const element = elements[0]
            const rect = element.getBoundingClientRect()
            const isInViewport = rect.top >= 0 && rect.bottom <= window.innerHeight
            if (isInViewport && !inViewport) {
                setInViewport(true)
            }
        }
    }, [inViewport]) // Add inViewport as a dependency

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll]) // Include handleScroll in the dependency array

    return (
        <>
            <span className="counter">{inViewport && <Counter end={count} duration={20} />}</span>
        </>
    )
}
