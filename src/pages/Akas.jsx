import Banner from '../components/Banner'
//import { Routes, Route } from 'react-router-dom'
import SubBanner from '../components/SubBanner'

export const Akas = () => {
    return (
        <>
            <Banner />
            <SubBanner />
            {/* <Routes>
                <Route path="/" element={<Banner />} />
            </Routes> */}
            <div className="container pb-10 text-[18px] italic">
                <span>Контакты:</span>{' '}
                <a href="mailto:sabirdinov97@inbox.ru">sabirdinov97@inbox.ru</a>
            </div>
        </>
    )
}
