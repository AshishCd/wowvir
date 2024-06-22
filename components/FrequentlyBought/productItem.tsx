import Image from "next/image"

interface IProductItemProps {
    image: string;
    price: number;
    productName: string;
}

export const ProductItem: React.FunctionComponent<IProductItemProps> = ({
    image, productName, price
}) => {
    return (
        <div className="text-start border border-solid shadow-md rounded-xs w-250">
            <div className="relative size-full h-[180px]">
                <Image
                    src={image}
                    alt="product 1"
                    fill
                    loading="lazy"
                    decoding="async"
                    sizes="(max-width: 180px) 100vw, 180px"
                    style={{objectFit:"contain"}}
                />
            </div>

            <div className="p-3">
                <div className="text-xs lg:text-sm line-clamp-1">{productName}</div>
                <div className="font-semibold">{`AED ${price}`}</div>
            </div>
        </div>
    )
};