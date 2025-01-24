export interface ProductCore {
    title: string;
    description: string;
    type: string;
    price: number;
    weight?: number;
    available?: boolean;
    images: Array<string>;
    views?: number;
    readonly created?: Date;
    readonly isProductNew?: boolean;
}

export interface Product extends ProductCore {
    readonly _id: string;
}

export interface Pagination {
    limit: number;
    page: number;
    isLowToHigh: string;
}
