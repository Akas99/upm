import image1 from '../assets/images/image12.jpg'

const Carbon = () => {
    return (
        <div>
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-9">
                <div className="lg:col-span-5">
                    <img
                        src={image1}
                        className="aspect-square w-full object-cover object-top"
                    />
                </div>
                <div className="lg:col-span-3">
                    <h4 className="mb-10 text-[32px] font-[700]">
                        GSUIT 3D/4D Carbon
                    </h4>
                    <h5 className="mb-4 text-[20px] font-[600] italic underline">
                        strong firmness
                    </h5>
                    <p>
                        - Products added to film fabric with carbon to increase
                        durability
                    </p>
                    <p>
                        - This product has no surface discoloration with strong
                        durability to life and crack unlike the existing PVC
                        film
                    </p>
                    <h5 className="mb-4 mt-10 text-[20px] font-[600] italic underline">
                        Scratch resistance
                    </h5>
                    <p>
                        Paint surface on your vehicle can be effectively
                        protected from scratches, stone chip and so on.
                    </p>
                    <h5 className="mb-4 mt-10 text-[20px] font-[600] italic underline">
                        Three / four dimensional and luxurious design
                    </h5>
                    <p>
                        It is a carbon-patterned PPF with a three / four
                        dimensional design that creates a luxurious atmosphere
                        not only through the exterior but also through interior
                        work. It is generally very popular in areas such as side
                        mirrors, spoilers, rear wings and front bumpers.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Carbon
