import { Bid } from "./bid";

export class ProductDetail{
    productName!: string;
    shortDescription!: string;
    detailedDescription!: string;
    category!: number;
    startingPrice!: number;
    bidEndDate!: Date;
    bids!: Bid[];
}