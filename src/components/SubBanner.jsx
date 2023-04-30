import Carbon from './Carbon'
import ClearEdition from './ClearEdition'
import ColorEdition from './ColorEdition'
import MattEdition from './MattEdition'
import SubBannerItem from './SubBannerItem'
import { Routes, Route } from 'react-router-dom'
import Windshield from './Windshield'

export default function SubBanner() {
    return (
        <div className="py-32">
            <div className="lg: mb-10 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
                <SubBannerItem to="/clearedition" edition="четкое покрытие" />
                <SubBannerItem to="/mattedition" edition="матовое покрытие" />
                <SubBannerItem to="/coloredition" edition="цветное покрытие" />
                <SubBannerItem to="/carbon" edition="3D/4D карбон" />
                <SubBannerItem to="/windshield" edition="ветренное стекло" />
            </div>
            <Routes>
                <Route path="/clearedition" element={<ClearEdition />} />
                <Route path="/mattedition" element={<MattEdition />} />
                <Route path="/coloredition" element={<ColorEdition />} />
                <Route path="/carbon" element={<Carbon />} />
                <Route path="/windshield" element={<Windshield />} />
                {/* <div className="h-9 w-full bg-fuchsia-500">als</div> */}
            </Routes>
        </div>
    )
}
