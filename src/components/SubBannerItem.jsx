import { Link, useLocation } from 'react-router-dom'

const SubBannerItem = ({ to, edition }) => {
    const location = useLocation()
    const bg = location.pathname === to ? 'bg-red-800' : 'bg-gray-800'
    return (
        <Link to={to}>
            <div
                className={`flex items-center justify-center  py-4 text-[20px] ${bg} text-white`}
            >
                <p>{edition}</p>
            </div>
        </Link>
    )
}
export default SubBannerItem
