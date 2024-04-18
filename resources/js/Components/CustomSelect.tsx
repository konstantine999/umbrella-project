import { Form, Select, message } from "antd";

interface customSelectProps {
    categories: any;
    isRequired?: boolean;
}

const CustomSelect = ({ categories, isRequired }: customSelectProps) => {
    const requiredRules = {
        required: isRequired,
        message: "Please choose the Category!",
    };

    return (
        <Form.Item label="Category" name="category" rules={[requiredRules]}>
            <Select mode="multiple">
                {categories.map((category: any) => {
                    return (
                        <Select.Option value={category.id} key={category.id}>
                            {category.name}
                        </Select.Option>
                    );
                })}
            </Select>
        </Form.Item>
    );
};

export default CustomSelect;
