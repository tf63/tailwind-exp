export default function Home() {
    return (
        <div className="bg-slate-500 w-full h-screen">
            <h1 className="text text-5xl">Color</h1>
            {/* https://tailwindcss.com/docs/text-color */}
            <div className="text-red-500">red</div>
            <h1 className="text-5xl">Position</h1>
            <div className="flex flex-col">
                <div className="text-right">right</div>
                <div className="text-center">center</div>
                <div className="text-left">left</div>
            </div>
            <h1 className="text-5xl">Size</h1>
            <div className="flex gap-16">
                <div className="text-xs">xs</div>
                <div className="text-sm">sm</div>
                <div className="text-base">base</div>
                <div className="text-lg">lg</div>
                <div className="text-xl">xl</div>
            </div>
        </div>
    )
}
