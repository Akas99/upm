export function Description(props) {
    return (
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-9">
            <div className="lg:col-span-5">
                <img
                    src={props.image}
                    className="aspect-[5/4] w-full object-cover"
                />
            </div>
            <div className="lg:col-span-3">
                <h4 className="mb-10 text-[32px] font-[700]">GSUIT Prime</h4>
                <h5 className="mb-4 text-[20px] font-[600] italic underline">
                    Instant self - healing performance without applying heat.
                </h5>
                <p>
                    Unique surface coating technology ensures the scratch
                    resistance. It can help dented surface to bring back within
                    seconds at room temperature without applying heat. Fine
                    scratches such as swirl mark are immediately restored.
                </p>
            </div>
        </div>
    )
}
