export interface ISimilarProducts{
    name: string;
    _id: string;
    mainImage: string;
    sellingPrice: number;
}

export interface IFrequentlyBoughtProductsProps {
    similarProducts: ISimilarProducts[];
}