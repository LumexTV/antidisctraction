import { useEffect, useState } from 'react'

const MotivationVideo = ({ onComplete }) => {
    const [progress, setProgress] = useState(0)
    const DURATION = 60 // seconds

    // List of actual video files in the public folder
    const VIDEOS = [
        '/v1.mov',
        '/v2.MP4',
        '/v3.MP4',
        '/v4.mov',
        '/v5.MP4',
        '/v6.mov'
    ]

    // Randomly select one of the videos on component mount
    const [videoSrc] = useState(() => {
        const randomIndex = Math.floor(Math.random() * VIDEOS.length)
        return VIDEOS[randomIndex]
    })

    useEffect(() => {
        const startTime = Date.now()
        const endTime = startTime + DURATION * 1000

        const timer = setInterval(() => {
            const now = Date.now()
            const elapsed = now - startTime
            const newProgress = Math.min((elapsed / (DURATION * 1000)) * 100, 100)

            setProgress(newProgress)

            if (now >= endTime) {
                clearInterval(timer)
                onComplete()
            }
        }, 50) // Update every 50ms for smooth animation

        return () => clearInterval(timer)
    }, [onComplete])

    return (
        <div className="fixed inset-0 bg-black z-50 flex flex-col items-center justify-center w-screen h-screen">
            {/* Ambient Glow */}
            <div className="absolute inset-0 bg-white/5 animate-pulse-slow pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-5xl aspect-video bg-black/50 border border-white/5 shadow-2xl overflow-hidden flex items-center justify-center group">

                <video
                    src={videoSrc}
                    autoPlay
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                    onEnded={onComplete}
                />

                {/* Progress Bar (Cinematic Style) */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                    <div
                        className="h-full bg-white/80 shadow-[0_0_15px_rgba(255,255,255,0.5)] transition-all duration-75 ease-linear"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
export default MotivationVideo
