export interface User {
    id: number;
    name: string;
    email: string;
    email_verified_at: string;
}
export interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    originalUrl: string;
    media: Media[];
    categories: Category[];
}

export interface Category {
    id: number;
    name: string;
}

export interface Media {
    original_url: string;
}
export interface products {
    data: Product[];
    links: any;
    next_page_url: string;
    prev_page_url: string;
}

export type PageProps<
    T extends Record<string, unknown> = Record<string, unknown>
> = T & {
    auth: {
        user: User;
    };
    products: products;
    categories: Category[];
    product: Product;
};
