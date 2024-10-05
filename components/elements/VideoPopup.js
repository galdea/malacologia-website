'use client'
import { useState } from 'react'
import ModalVideo from 'react-modal-video'
import "../../node_modules/react-modal-video/css/modal-video.css"

export default function VideoPopup() {
    const [isOpen, setOpen] = useState(false)
    return (
        <>
            <a
                onClick={() => setOpen(true)}
                className="video-play-button">
                <span />
            </a>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S9JIDHRS1nA" onClose={() => setOpen(false)} />
        </>
    )
}