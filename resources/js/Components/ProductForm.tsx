import { Button, Form, Input, InputNumber, Select } from "antd";
import TextArea from "antd/es/input/TextArea";
import CustomSelect from "./CustomSelect";
import ImageUpload from "./ImageUpload";

interface productFormProps {
    categories: any;
    fileList: any;
    imageUploadError: string;
    validationRules: {
        required: boolean;
        message: string;
    };
    handleProductSubmit: (values: any) => void;
    setFileList: (values: any) => void;
}

const ProductForm = ({
    handleProductSubmit,
    validationRules,
    fileList,
    setFileList,
    categories,
    imageUploadError,
}: productFormProps) => {
    return (
        <Form
            onFinish={(values: any) => {
                handleProductSubmit(values);
            }}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="horizontal"
            style={{
                maxWidth: 600,
            }}
        >
            <Form.Item name="name" label="Name" rules={[validationRules]}>
                <Input />
            </Form.Item>
            <Form.Item
                name="description"
                label="Description"
                rules={[validationRules]}
            >
                <TextArea rows={4} style={{ height: 120, resize: "none" }} />
            </Form.Item>
            <CustomSelect categories={categories} isRequired={true} />
            <Form.Item name="price" label="Price" rules={[validationRules]}>
                <InputNumber />
            </Form.Item>
            <ImageUpload
                fileList={fileList}
                setFileList={setFileList}
                imageUploadError={imageUploadError}
            />
            <div className="flex justify-center">
                <Button htmlType="submit" type="primary">
                    Submit
                </Button>
            </div>
        </Form>
    );
};

export default ProductForm;
