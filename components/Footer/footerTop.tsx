import React from "react";
import Image from "next/image";

export const FooterTop: React.FunctionComponent = React.memo(() => {

    const data = [
        {
            id: 0,
            text: "Quick Delivery",
            image: "/images/quick-delivery.svg"
        },
        {
            id: 1,
            text: "Secure payment",
            image: "/images/secure-payment.svg"
        },
        {
            id: 2,
            text: "Return & Refund policy",
            image: "/images/return-and-refund-policy.svg"
        },
        {
            id: 3,
            text: "Customer Support",
            image: "/images/customer-support.svg"
        },

    ]

    return (
        <div className="size-full bg-zinc-100 flex flex-col lg:flex-row justify-between px-12 py-6">
            {
                data.map((item) => {
                    return (
                        <div className="my-2 lg:my-0 flex gap-2 items-center" key={item.id}>
                            <Image alt={item.text} style={{width:"56px", height:"70px"}} width={0} height={0} src={item.image} loading="lazy" />
                            <span className="text-sm lg:text-md">{item.text}</span>
                        </div>
                    )
                })
            }

        </div>
    )
})