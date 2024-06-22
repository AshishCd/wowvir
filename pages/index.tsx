import Image from "next/image";
import dynamic from 'next/dynamic';
import { ProductDetails } from "../components/productDetails/productDetails";
import { ProductDeliveryDetails } from "../components/productDetails/productDeliverDetails";
import { FooterTop } from "../components/Footer/footerTop";
import { IProductData } from "../interfaces/productDetailsPage";
import Head from "next/head";
import { ProductCarousel } from "@/components/ProductCarousel/imageCarousel";

const FrequentlyBought = dynamic(() =>
    import('../components/FrequentlyBought/frequentlyBought').then((mod) => mod.FrequentlyBought)
)
interface IHomePageProps {
    productDetails: IProductData;
}


const Home: React.FunctionComponent<IHomePageProps> = (props) => {
    const { name, description, preparationTimeUnit, preparationTimeValue, shop, productItems, metaData } = props.productDetails;
    return (
        <>
            <Head>
                <title>{metaData.metaTitle || `${name} | Wowvir`}</title>
                <meta name="description" content={metaData.metaDescription}></meta>
                <meta name="keywords" content={metaData.metaKeyword}></meta>
            </Head>
            <div className="size-full">
                <div className="h-16 bg-gradient-to-r bg-hero-pattern px-24 flex items-center">
                    <Image src={"./images/logo.svg"} alt="logo wowvir" width={244} height={50} priority />
                </div>
                <main className="p-8 size-full min-h-screen lg:px-24 lg:pt-12 pb-4">
                    <div className="flex flex-col lg:flex-row justify-between size-full">
                        <div className="flex-1 px-16 py-5">
                            <ProductCarousel slides={productItems[0].images} />
                        </div>
                        <div className="flex-1">
                            <ProductDetails
                                name={name}
                                description={description}
                                preparationTimeUnit={preparationTimeUnit}
                                preparationTimeValue={preparationTimeValue}
                                shopName={shop.shopName}
                                price={productItems[0].sellingPrice}
                            />
                        </div>
                    </div>
                    <div className="mt-8 lg:mt-12">
                        <ProductDeliveryDetails />
                    </div>
                    <div className="mt-6 lg:mt-12 lg:px-16">
                        <FrequentlyBought />
                    </div>
                </main>
                <div className="mt-8">
                    <FooterTop />
                </div>
            </div>
        </>
    );
};

export default Home;

export const getServerSideProps = (async () => {
    //we can use env file and use the variable to use for below URL
    const response = await fetch("https://api.wowvir.com/store/products/660fe2961eae8f6506821bf4");
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    };
    const data = await response.json();
    return {
        props: {
            productDetails: data.data
        }
    }
})
