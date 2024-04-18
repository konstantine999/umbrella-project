import CategoryForm from "@/Components/CategoryForm";
import ChooseFormButtons from "@/Components/ChooseFormButtons";
import Header from "@/Components/Header";
import ProductForm from "@/Components/ProductForm";
import { PageProps } from "@/types";
import { router } from "@inertiajs/react";
import { message } from "antd";
import { useState } from "react";

const Admin = ({ categories }: PageProps) => {
    const [fileList, setFileList] = useState<any>([]);
    const [isProductsChoosen, setIsProductsChoosen] = useState(false);
    const [imageUploadError, setImageUploadError] = useState("");
    const validationRules = {
        required: true,
        message: "Please fill the value!",
    };

    const handleProductSubmit = (values: any) => {
        if (fileList.length === 0) {
            setImageUploadError("Please upload at least one image.");
            return;
        }
        try {
            const formData = new FormData();
            formData.append("name", values.name);
            formData.append("description", values.description);
            formData.append("category", values.category);
            formData.append("price", values.price);
            fileList.forEach((file: BinaryType, index: number) => {
                formData.append(`file${index + 1}`, file);
            });
            router.post("product", formData);
            message.success("Product Added sucessfully");
        } catch (error) {
            message.error("There was an error, please try again!");
        }
    };
    const handleCategorySubmit = (values: any) => {
        try {
            const formData = new FormData();
            formData.append("name", values.productName);
            router.post("category", formData);
            message.success("Category added sucessfully");
        } catch (error) {
            message.error("There was an error please try again!");
        }
    };

    return (
        <div className="w-1/2 mx-auto">
            <Header />
            <ChooseFormButtons
                isProductsChoosen={isProductsChoosen}
                setIsProductsChoosen={setIsProductsChoosen}
            />
            {isProductsChoosen ? (
                <CategoryForm
                    handleCategorySubmit={handleCategorySubmit}
                    validationRules={validationRules}
                />
            ) : (
                <ProductForm
                    handleProductSubmit={handleProductSubmit}
                    validationRules={validationRules}
                    fileList={fileList}
                    setFileList={setFileList}
                    categories={categories}
                    imageUploadError={imageUploadError}
                />
            )}
        </div>
    );
};

export default Admin;
