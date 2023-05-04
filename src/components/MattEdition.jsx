import image1 from '../assets/images/image10.jpg'

const MattEdition = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-9">
                <div className="lg:col-span-5">
                    <img
                        src={image1}
                        className="w-full object-contain object-top"
                    />
                </div>
                <div className="lg:col-span-3">
                    <h4 className="mb-10 text-[32px] font-[700]">GSUIT Matt</h4>
                    <h5 className="mb-4 text-[20px] font-[600] italic underline">
                        Unique matte coating
                    </h5>
                    <p>
                        GSUIT Matt has exceptional visual properties – enhancing
                        the look of vehicle and quality of smooth matte finish.
                        When installed on a glossy paint, the vehicle looks
                        completely new
                    </p>
                    <h5 className="mb-4 mt-10 text-[20px] font-[600] italic underline">
                        Super hydrophobic & easy clean
                    </h5>
                    <p>
                        Super hydrophobic surface helps to clean your vehicle
                        effortlessly and also remains a clean-car look for
                        longer
                    </p>
                </div>
            </div>
        </div>
    )
}
export default MattEdition
