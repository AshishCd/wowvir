import Image from "next/image"
import { lazy } from "react"

interface IAddtoCartButtonProps {

}

export const AddToCart: React.FunctionComponent<IAddtoCartButtonProps> = () => {
    return (
        <div className="flex items-center rounded size-full">
            <button className="bg-gradient-to-r p-2 rounded size-full bg-hero-pattern border-[1px] border-primary-light text-white flex justify-center gap-5">
                <span>{"Add to cart"}</span>
                <Image style={{ width: "25px", height: "25px" }} src="/images/cart.svg" alt="cart" loading="lazy" decoding="async" height={0} width={0} />
            </button>

        </div>
    )
}