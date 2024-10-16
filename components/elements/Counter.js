import { useState, useRef, useEffect } from 'react'

export default function Counter({ end, duration }) {
    const [count, setCount] = useState(0)
    const countRef = useRef(null)
    const intervalRef = useRef(null)
    const hasStarted = useRef(false) // Ref to track if counting has started

    const increment = end / duration

    const startCount = () => {
        if (hasStarted.current) return; // Prevents starting again
        hasStarted.current = true; // Mark as started

        setCount(0)
        intervalRef.current = setInterval(() => {
            setCount((prevCount) => {
                const newCount = prevCount + increment
                if (newCount >= end) {
                    clearInterval(intervalRef.current)
                    return end
                } else {
                    return newCount
                }
            })
        }, 1000 / duration)
    }

    // Start counting when the component is in view
    startCount()

    // Cleanup the interval when the component unmounts
    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
        }
    }, [])

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}
