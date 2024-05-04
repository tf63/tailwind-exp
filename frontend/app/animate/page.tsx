export default function Home() {
    return (
        <div className="bg-slate-500 w-full h-screen">
            <h1 className="text text-5xl">Animate</h1>
            <div className="animate-pulse bg-white w-8 h-8">dot</div>
            <div className="animate-spin bg-white w-8 h-8">spin</div>
            <div className="animate-bounce bg-white w-8 h-8">bounce</div>
            <h1 className="text text-5xl">Transition</h1>
            <div className="transition hover:opacity-40">text</div>
        </div>
    )
}
