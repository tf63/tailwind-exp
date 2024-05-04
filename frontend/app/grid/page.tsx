export default function Home() {
    return (
        <>
            <h1>flex</h1>
            <div className="flex flex-col">
                <div className="flex">
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">1</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">2</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">3</div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">4</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">5</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">6</div>
                </div>
                <div className="flex">
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">7</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">8</div>
                    <div className="w-10 h-10 bg-indigo-500 text-center m-5">9</div>
                </div>
            </div>
            <h1>grid</h1>
            <div className="grid grid-cols-3 gap-3">
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">1</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">2</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">3</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">4</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">5</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">6</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">7</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">8</div>
                <div className="w-10 h-10 bg-indigo-500 text-center m-5">9</div>
            </div>
        </>
    )
}
