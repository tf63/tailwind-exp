export default function Home() {
    return (
        // h-screen w-fullで画面全体
        <div className="bg-slate-600 h-screen w-full">
            {/* w-10は 10*4 px と同じ */}
            <div className="bg-white w-10 h-10">a</div>
            {/* max-w-{} で横幅の最大値を指定 */}
            {/* {}には sm や lg などがあり， [60px] のように直接指定も可能 */}
            <div className="bg-white max-w-xs">a</div>
        </div>
    )
}
