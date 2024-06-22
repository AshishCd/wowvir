"use client";

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { ProductItem } from "./productItem";
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ISimilarProducts } from "../../interfaces/frequentlyBought";

interface IProductCarouselProps { }

export const ProductCarousel: React.FunctionComponent<IProductCarouselProps> = () => {
    const [similarProducts, setSimilarProdcuts] = useState<ISimilarProducts[]>([]);

    const fetchSimilarProducts = async () => {
        const similarProducts = await fetch("https://api.wowvir.com/store/products/660fe2961eae8f6506821bf4/similar");
        const data = await similarProducts.json();
        setSimilarProdcuts(data.data);
    }

    useEffect(() => {
        fetchSimilarProducts();
    }, []);

    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };


    return (
        <div>
            <Carousel
                infinite
                responsive={responsive}
            >
                {
                    similarProducts?.map((item) => {
                        return (
                            <div className='mr-2' key={item._id}>
                                <Link href={"#"}>
                                    <ProductItem
                                        image={item.mainImage}
                                        price={item.sellingPrice}
                                        productName={item.name}
                                    />
                                </Link>
                            </div>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}