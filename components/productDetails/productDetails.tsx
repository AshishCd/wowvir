import { PlusMinusButtons } from "./Buttons/PlusMinusButtons";
import { AddToCart } from "./Buttons/AddToCartButton";
import { ProductDescription } from "./productDescription";

interface IProductDetails {
name: string;
description: string;
preparationTimeUnit: string;
preparationTimeValue: number;
shopName?: string;
price: number;
}


export const ProductDetails: React.FunctionComponent<IProductDetails> = ({name, description, preparationTimeUnit, preparationTimeValue, shopName, price}) => {
    return (
        <div>
            <div className="mt-8 lg:mt-0 text-sky-600 text-xs font-semibold">{shopName}</div>
            <div className="text-16 lg:text-2xl mt-2">{name}</div>
            <div className="flex gap-3 items-center">
                <div className="text-[18px] mt-1 font-semibold">
                    {`AED ${price}`}
                </div>
                <span className="text-xs"><s>{"AED 599"}</s></span>
            </div>
            <div className="flex items-center mt-1">
                <div className="text-xs text-gray-500">{"Preparation Time:"}</div>
                <div className="font-semibold text-xs">&nbsp;{"60 minutes"}</div>
            </div>
            <div className="border-b border-gray-300 mt-6 mb-6" />
            <div className="text-xs"><textarea style={{ padding: "14px", borderRadius: "8px", width: "100%", border: "1px solid #e5e7eb" }} rows={1} cols={50} placeholder="Notes" /></div>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-6">
                <PlusMinusButtons />
                <AddToCart />
            </div>
            <div className="mt-8">
                <ProductDescription description={description} />
            </div>
        </div>
    )
}