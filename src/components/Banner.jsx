import mainCar from '../assets/images/mainCar.jpg'

const Banner = () => {
    return (
        <div className="relative">
            <img
                className="h-[70vh] w-screen object-cover"
                src={mainCar}
                alt="bg"
            />
            <div className="absolute left-0 top-0 flex h-full w-full flex-col items-center justify-center bg-black/50">
                {/* <h2 className="text-center text-[36px] font-[600] text-white underline">
                    THE ULTIMATE EXPERIENCE OF PROTECTION
                </h2> */}
                <h1 className="text-[120px] font-[700] text-white">UBP</h1>
            </div>
        </div>
    )
}
export default Banner
