import { Button, Form, Input } from "antd";
import React from "react";

interface categoryFormProps {
    handleCategorySubmit: (values: any) => void;
    validationRules: {
        required: boolean;
        message: string;
    };
}

const CategoryForm = ({
    handleCategorySubmit,
    validationRules,
}: categoryFormProps) => {
    return (
        <Form
            onFinish={(values: any) => {
                handleCategorySubmit(values);
            }}
        >
            <Form.Item
                name="productName"
                label="Category Name"
                rules={[validationRules]}
            >
                <Input />
            </Form.Item>
            <Button htmlType="submit" type="primary">
                Submit
            </Button>
        </Form>
    );
};

export default CategoryForm;
