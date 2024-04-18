import { Head, router } from "@inertiajs/react";
import { PageProps } from "@/types";
import ProductCard from "@/Components/ProductCard";
import Header from "@/Components/Header";
import { Button, Flex, message } from "antd";
import { useEffect, useState } from "react";
import { FilterOutlined } from "@ant-design/icons";
import FilterModal from "@/Components/FilterModal";
import Pagination from "@/Components/Pagination";

export default function Main({ products, categories }: PageProps) {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const goToNextPage = async () => {
        await router.get(products.next_page_url);
    };

    const goToPrevPage = async () => {
        await router.get(products.prev_page_url);
    };

    const onFilterSubmit = async (values: any) => {
        try {
            await router.get("/", values);
            message.success("Filter applied successfully!");
        } catch (error) {
            message.error("Failed to apply filter. Please try again.");
        }
    };

    const clearFilter = () => {
        router.get("/");
    };

    const getSingleProduct = (productId: number) => {
        router.get(`product/${productId}`);
    };

    console.log(products);
    return (
        <>
            <Header />
            <Head title="Main" />
            <div className="flex justify-center gap-3 mt-4 mb-10">
                <Button
                    type="primary"
                    onClick={() => setIsModalOpen(true)}
                    style={{ display: "flex", alignItems: "center" }}
                >
                    Filter
                    <FilterOutlined />
                </Button>
                <Button type="primary" onClick={() => clearFilter()}>
                    Clear Filter
                </Button>
            </div>
            <FilterModal
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                onSubmit={onFilterSubmit}
                categories={categories}
            />

            {products.data.length > 0 ? (
                <Flex justify="space-evenly" wrap="wrap" gap={60}>
                    {products.data.map((product: any) => {
                        return (
                            <ProductCard
                                key={product.id}
                                productId={product.id}
                                name={product.name}
                                description={product.description}
                                originalUrl={product.media[0]?.original_url}
                                getSingleProduct={getSingleProduct}
                                price={product.price}
                            />
                        );
                    })}
                </Flex>
            ) : (
                <h4 className="text-center mt-10">
                    There are no products to display! Add them&nbsp;
                    <a href="/admin" className="text-blue-500 underline">
                        Here
                    </a>
                </h4>
            )}
            {products.next_page_url || products.prev_page_url ? (
                <Pagination
                    prev_page_url={products.prev_page_url}
                    next_page_url={products.next_page_url}
                    goToNextPage={goToNextPage}
                    goToPrevPage={goToPrevPage}
                />
            ) : null}
        </>
    );
}
