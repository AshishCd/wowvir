import Image from "next/image"

interface IProductDeliveryDetails {

}

const contentArr = [
    {
        id: 0,
        text: "Quick Delivery",
        icon: '/images/quick-delivery-icon.svg'
    },
    {
        id: 1,
        text: "100% Money-back guarantee",
        icon: '/images/money-back-icon.svg'
    },
    {
        id: 3,
        text: "Customer support",
        icon: '/images/customer-support-icon.svg'
    },
    {
        id: 4,
        text: "Secure payment method",
        icon: '/images/secure-payment-method-icon.svg'
    },

]

export const ProductDeliveryDetails: React.FunctionComponent<IProductDeliveryDetails> = () => {
    return (
        <div className="text-xs">
            {contentArr.map((content) => {
                return (
                    <div key={content.id} className="flex gap-2 items-center mb-3 text-black-primary">
                        <Image src={content.icon} alt={content.text} width={24} height={24} decoding="async" />
                        {content.text}
                    </div>
                )
            })}
        </div>
    )
}