import { ProductCarousel } from "./productCarousel";

interface IFrequentlyBoughtProps {}

export const FrequentlyBought: React.FunctionComponent<IFrequentlyBoughtProps> = () => {
    return (
        <div>
            <div className="flex items-center gap-4">
                <h2 className="text-xl font-bold">{"Customers Also Bought"}</h2>
                <div className="border-b flex-1" />
            </div>
            <div className="mt-8">
                <ProductCarousel />
            </div>
        </div>
    )
}