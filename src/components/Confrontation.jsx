import { useState } from 'react'

const Confrontation = ({ onStart }) => {
    const [isHovered, setIsHovered] = useState(false)

    return (
        <div className="flex flex-col items-center justify-center h-screen w-screen bg-black overflow-hidden relative">
            {/* Background Ambience - Deep and Subtle */}
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[120px] pointer-events-none transition-all duration-1000 ${isHovered ? 'opacity-100 scale-110' : 'opacity-50 scale-100'}`}></div>

            {/* Motivational Quote */}
            <div className="relative z-20 mb-12 text-center select-none">
                <h1 className="text-white/40 text-xl md:text-2xl font-light tracking-[0.3em] uppercase animate-fade-in">
                    Put your mind on the Goal
                </h1>
                <div className="mt-2 h-[1px] w-12 bg-white/10 mx-auto"></div>
            </div>

            <button
                onClick={onStart}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="group relative flex items-center justify-center w-48 h-48 rounded-full focus:outline-none cursor-pointer z-10 transition-transform duration-500 hover:scale-105"
                aria-label="Initialize Focus"
            >
                {/* Clean Glow Ring - No more messy borders */}
                <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-md transition-all duration-500 group-hover:bg-white/10 group-hover:shadow-[0_0_50px_rgba(255,255,255,0.15)]"></div>

                {/* Inner Ring (Fine Detail) */}
                <div className="absolute inset-0 rounded-full border border-white/10 opacity-50 group-hover:opacity-100 group-hover:scale-95 transition-all duration-500"></div>

                {/* Power Icon - Symmetrical and Scentered */}
                <svg
                    width="64"
                    height="64"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-white/70 group-hover:text-white transition-colors duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.3)] relative z-20"
                >
                    <path d="M12 3V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5.63604 5.63604C4.07354 7.19854 3.19604 9.31754 3.19604 11.5275C3.19604 16.3895 7.13804 20.3315 12 20.3315C16.862 20.3315 20.804 16.3895 20.804 11.5275C20.804 9.31754 19.9265 7.19854 18.364 5.63604" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>

            {/* Minimalist Text Below */}
            <div className={`absolute bottom-20 text-white/30 text-[10px] tracking-[0.8em] uppercase font-light transition-opacity duration-700 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
                Initialize System
            </div>
        </div>
    )
}
export default Confrontation
