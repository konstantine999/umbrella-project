import { Button, Form, Input, InputNumber, Modal } from "antd";
import CustomSelect from "./CustomSelect";
import { Category } from "@/types";

interface filterModalProps {
    isModalOpen: boolean;
    setIsModalOpen: (value: boolean) => void;
    onSubmit: (values: any) => void;
    categories: Category[];
}

const FilterModal = ({
    isModalOpen,
    setIsModalOpen,
    onSubmit,
    categories,
}: filterModalProps) => {
    return (
        <Modal
            style={{
                top: 20,
            }}
            open={isModalOpen}
            onCancel={() => setIsModalOpen(false)}
            footer={[]}
        >
            <Form
                onFinish={(values: any) => {
                    onSubmit(values);
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
                <Form.Item name="name" label="Name">
                    <Input />
                </Form.Item>
                <Form.Item name="priceFrom" label="Price From">
                    <InputNumber />
                </Form.Item>
                <Form.Item name="priceTo" label="Price To">
                    <InputNumber />
                </Form.Item>
                <CustomSelect categories={categories} />
                <div className="flex justify-center">
                    <Button htmlType="submit" type="primary">
                        Filter
                    </Button>
                </div>
            </Form>
        </Modal>
    );
};

export default FilterModal;
