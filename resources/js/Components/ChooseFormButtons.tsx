import { Button } from "antd";
import React from "react";

interface chooseFormButtonsProps {
    isProductsChoosen: boolean;
    setIsProductsChoosen: (value: boolean) => void;
}

const ChooseFormButtons = ({
    isProductsChoosen,
    setIsProductsChoosen,
}: chooseFormButtonsProps) => {
    return (
        <div className="flex justify-center gap-4 mt-10 mb-10">
            <Button
                type="primary"
                ghost={isProductsChoosen}
                onClick={() => setIsProductsChoosen(false)}
            >
                Product
            </Button>
            <Button
                ghost={!isProductsChoosen}
                type="primary"
                onClick={() => setIsProductsChoosen(true)}
            >
                Category
            </Button>
        </div>
    );
};

export default ChooseFormButtons;
