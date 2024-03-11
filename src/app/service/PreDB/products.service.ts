export interface Product {
  id: number;
  name: string;
  priceInclVat: number;
  priceExVat: number;
  vat: number;
  description: string;
  productCategory: string;
  sizes: string;
  quantity: number;
  productImage: string;
}

export class ProductsService {
  static productCategories: string[] = [
    'Bær',
    'Chilli & Peber',
    'Citrus',
    'Div. Grønt',
    'Frugt',
    'Kartofler',
    'Kolonial',
    'Kål',
    'Løg',
    'Meloner',
    'Olie',
    'Oliven',
    'Rodfrugter & Grovgrønt',
    'Salater & Fintgrønt',
    'specialiteter',
    'Spirer & Urter',
    'Svampe',
    'Tomater',
    'Vindruer'
  ];
}
