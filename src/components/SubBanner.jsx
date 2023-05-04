import Carbon from './Carbon'
import ClearEdition from './ClearEdition'
import ColorEdition from './ColorEdition'
import MattEdition from './MattEdition'
import SubBannerItem from './SubBannerItem'
import { Routes, Route } from 'react-router-dom'
import Windshield from './Windshield'

export default function SubBanner() {
    return (
        <div className="container mb-10">
            <h3 className="py-32 text-center text-[32px] font-[700] text-black sm:text-[64px]">
                THE ULTIMATE EXPERIENCE OF PROTECTION
            </h3>
            <div className="lg: mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <SubBannerItem to="/" edition="Clear edition" />
                <SubBannerItem to="/mattedition" edition="Matt edition" />
                <SubBannerItem to="/coloredition" edition="Color edition" />
                <SubBannerItem to="/carbon" edition="3D/4D carbon" />
                <SubBannerItem to="/windshield" edition="Winschield" />
            </div>
            <Routes>
                <Route path="/" element={<ClearEdition />} />
                <Route path="/mattedition" element={<MattEdition />} />
                <Route path="/coloredition" element={<ColorEdition />} />
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/windshield" element={<Windshield />} />
                {/* <div className="h-9 w-full bg-fuchsia-500">als</div> */}
            </Routes>
        </div>
    )
}
