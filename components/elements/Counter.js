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

    // Start counting when the component renders
    if (!hasStarted.current) {
        startCount();
    }

    // Clean up the interval on component unmount
    // This is not the standard practice, but we can use a function to clear the interval
    const cleanup = () => {
        clearInterval(intervalRef.current)
    }

    // Call the cleanup function when the component is about to unmount
    // This should be done outside the normal render flow
    const handleUnmount = () => {
        cleanup();
    }

    // Simulate component unmount (this is just for demonstration)
    // In practice, you might want to handle this with an event or another mechanism.
    // For example, you could call handleUnmount when a specific condition is met or when navigating away.
    window.addEventListener('beforeunload', handleUnmount)

    return (
        <span ref={countRef}>
            <span>{Math.round(count)}</span>
        </span>
    )
}
