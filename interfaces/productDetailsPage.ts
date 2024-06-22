interface IShop {
    shopName: string;
}

interface IProductItems {
    sellingPrice: number;
    mainImage: string;
    images: string[];
}

interface IMetaData {
    metaTitle: string;
    metaDescription: string;
    metaKeyword: string;
}


export interface IProductData {
    name: string;
    description: string;
    preparationTimeUnit: string;
    preparationTimeValue: number;
    shop: IShop;
    productItems: IProductItems[];
    metaData: IMetaData;
}