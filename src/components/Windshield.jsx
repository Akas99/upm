import image1 from '../assets/images/image18.jpg'

const Windshield = () => {
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
                    <h4 className="mb-10 text-[32px] font-[700]">
                        GSUIT Windshield
                    </h4>
                    <h5 className="mb-4 text-[20px] font-[600] italic underline">
                        Scratch resistance
                    </h5>
                    <p>
                        GSUIT Windshield protection coating offers excellent
                        scratch resistance and can withstand common abrasion
                        sources like windshield wipers.
                    </p>
                    <h5 className="mb-4 mt-6 text-[20px] font-[600] italic underline">
                        Easy installation
                    </h5>
                    <p>
                        It is easy to install thanks to our unique coating
                        technology compared to other companies
                    </p>
                    <h5 className="mb-4 mt-6 text-[20px] font-[600] italic underline">
                        Hydrophobic & easy to clean
                    </h5>
                    <p>
                        Super hydrophobic surface helps to clean your vehicle
                        effortlessly and also remains a clean-car look for
                        longer
                    </p>
                    <h5 className="mb-4 mt-6 text-[20px] font-[600] italic underline">
                        Excellent durability
                    </h5>
                    <p>
                        The adhesion of the coating layer is excellent. It turns
                        out the coating layer is not peeled off by the wiper
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Windshield
