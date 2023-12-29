
export default function BannerAd() {
    return (
        <div className="">
            <div className="fixed p-3 w-96 bg-white">
                <p className="text-slate-500">Ads by Adbuster <span className="absolute hover:stroke-slate right-10 text-slate-700">x</span></p>
                
                <img className="h-64 stroke-slate-50" src="https://assets-global.website-files.com/5acfc48421e7a66153389c5f/5ff8f806e6c0110cd074c4e1_food_fight_4_600px.jpg" alt="Adbuster ad" />
            </div>
        </div>
    )
}