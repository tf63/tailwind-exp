export default function Home() {
    return (
        // h-screen w-fullで画面全体
        <div className="bg-slate-600 h-screen w-full">
            {/* 絶対位置を指定 */}
            <div className="absolute top-4 left-4 bg-white p-4">absolute</div>
            {/* flex */}
            <div className="flex justify-center items-center gap-4">
                <div className="bg-white p-4">1</div>
                <div className="bg-white p-4">2</div>
                <div className="bg-white p-4">3</div>
            </div>
            <div className="w-full h-6"></div>
            {/* 縦方向のflex */}
            <div className="flex flex-col justify-center items-center gap-4">
                <div className="bg-white p-4">1</div>
                <div className="bg-white p-4">2</div>
                <div className="bg-white p-4">3</div>
            </div>
            <div className="w-full h-6"></div>
            {/* gapではなくspaceでも子要素の間隔を指定できる */}
            <div className="flex flex-col justify-center items-center space-y-4">
                <div className="bg-white p-4">1</div>
                <div className="bg-white p-4">2</div>
                <div className="bg-white p-4">3</div>
            </div>
        </div>
    )
}
