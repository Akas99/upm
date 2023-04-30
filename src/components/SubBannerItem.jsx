import { Link } from 'react-router-dom'

const SubBannerItem = ({ to, edition }) => {
    return (
        <Link to={to}>
            <div className="flex items-center justify-center bg-red-800 py-4 text-[20px] text-white">
                <p>{edition}</p>
            </div>
        </Link>
    )
}
export default SubBannerItem
