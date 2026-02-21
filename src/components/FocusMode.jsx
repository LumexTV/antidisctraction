const FocusMode = () => {
    const closeTab = () => {
        window.close()
        window.location.href = "about:blank"
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full bg-black text-white p-8 animate-fade-in relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-black to-black pointer-events-none"></div>

            <h1 className="text-4xl md:text-6xl font-thin mb-16 tracking-[0.2em] text-white/90 select-none uppercase">
                Resume Work
            </h1>

            <button
                onClick={closeTab}
                className="px-16 py-4 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white/60 hover:text-white transition-all duration-500 rounded-sm tracking-[0.15em] uppercase text-sm backdrop-blur-md"
            >
                Close Session
            </button>
        </div>
    )
}
export default FocusMode
