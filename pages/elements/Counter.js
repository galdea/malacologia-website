import { useState, useRef } from 'react'

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

    // Start counting when the component is rendered
    startCount();

    // Cleanup function to clear the interval
    const cleanup = () => {
        clearInterval(intervalRef.current);
    }

    // Handle cleanup on window unload (simulating component unmount)
    window.addEventListener('beforeunload', cleanup);

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}
