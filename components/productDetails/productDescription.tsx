import React from "react";

interface IProductDescription {
    description: string;
}

export const ProductDescription: React.FunctionComponent<IProductDescription> = React.memo(({ description }) => {
    return (
        <>
            <span className="text-primary-light border-b-2 border-b-primary-light text-sm pb-1">{"Description"}</span>
            <div className="mt-4 text-primary-black">
                <div dangerouslySetInnerHTML={{ __html: description }} />
            </div>
        </>
    )
})