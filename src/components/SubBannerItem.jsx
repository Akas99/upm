import { Link } from 'react-router-dom'

const SubBannerItem = ({ to, edition }) => {
    return (
        <div className="flex items-center justify-center bg-red-800 py-4 text-[20px] text-white">
            <Link to={to}>
                <p>{edition}</p>
            </Link>
        </div>
    )
}
export default SubBannerItem
