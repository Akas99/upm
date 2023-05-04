import image1 from '../assets/images/image14.jpg'

const ColorEdition = () => {
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
                        GSUIT Black High Glossy
                    </h4>
                    <h5 className="mb-4 text-[20px] font-[600] italic underline">
                        Black TPU
                    </h5>
                    <p>
                        The difference between our black TPU and the other
                        competitors’ TPUs is they coat, dye or color products in
                        black, but our product is born to be black because the
                        resource(resin) of which it is made is originally black
                    </p>
                    <h5 className="mb-4 mt-10 text-[20px] font-[600] italic underline">
                        Unique black high gloss
                    </h5>
                    <p>
                        GSUIT Black High glossy is a distinctive black
                        color(Piano Black) film with noticeable color depth, so
                        your vehicle looks much more luxurious with the
                        blackness and clarity of the piano black. Plus, it
                        provides super high gloss finish, so the vehicle turns
                        shiny and changes any color of a car panel into black.
                    </p>
                </div>
            </div>
        </div>
    )
}
export default ColorEdition
