import { Card } from "antd";
import Meta from "antd/es/card/Meta";

interface ProductProps {
    productId: number;
    name: string;
    description: string;
    price: number;
    originalUrl: string;
    getSingleProduct: (productId: number) => void;
}

const ProductCard = ({
    productId,
    name,
    description,
    price,
    originalUrl,
    getSingleProduct,
}: ProductProps) => {
    return (
        <Card
            onClick={() => getSingleProduct(productId)}
            hoverable
            style={{
                width: 240,
            }}
            cover={
                <img
                    className="h-80"
                    alt="example"
                    src={
                        originalUrl
                            ? originalUrl
                            : "https://cloudinary-marketing-res.cloudinary.com/images/w_1000,c_scale/v1708082887/Media_URL_main_image/Media_URL_main_image-png?_i=AA"
                    }
                />
            }
        >
            <Meta title={name} />
            <p className="text-grey">
                {description.length > 30
                    ? `${description.slice(0, 30)}...`
                    : description}
            </p>
            <p>
                Price: <span>{price} Gel</span>
            </p>
        </Card>
    );
};

export default ProductCard;
