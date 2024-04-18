import Header from "@/Components/Header";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { Button, Carousel, message } from "antd";

const Product = ({ product }: PageProps) => {
    const deleteProduct = (id: number) => {
        try {
            router.delete(`delete/${id}`);
            message.success("product deleted successfully!");
        } catch (error) {
            message.error("There was an error, please try again!");
        }
    };
    console.log(product);

    return (
        <>
            <Header />
            <div className="w-96 mx-auto mt-8">
                <h1 className="text-5xl mb-4">{product.name}</h1>
                <Carousel autoplay={true}>
                    {product.media.length > 0 ? (
                        product.media.map((image: any) => {
                            return (
                                <div key={image.id} className="w-full">
                                    <img
                                        src={image.original_url}
                                        className="w-full h-[300px] rounded-xl"
                                    />
                                </div>
                            );
                        })
                    ) : (
                        <img src="https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1708082887/Media_URL_main_image/Media_URL_main_image-png?_i=AA" />
                    )}
                    {}
                </Carousel>
                <p className="w-96 mt-3 break-words">
                    Description: {product.name}
                </p>
                <span>Price: {product.price} $</span>
                <div className="flex gap-4 mb-5">
                    Categories:
                    {product.categories.map((category: any) => {
                        return (
                            <div className="bg-green-500 rounded-lg px-2 py-1">
                                {category.name}
                            </div>
                        );
                    })}
                </div>
                <Button
                    htmlType="submit"
                    type="primary"
                    danger
                    onClick={() => {
                        deleteProduct(product.id);
                    }}
                >
                    Delete
                </Button>
            </div>
        </>
    );
};

export default Product;
