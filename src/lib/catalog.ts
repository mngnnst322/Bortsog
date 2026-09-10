// Bortsog-маягийн жишээ каталог. Зургууд нь Unsplash-ийн hoodie / t-shirt эвент зураг (жишээ).
export type Product = {
  id: string;
  name: string;
  subtitle: string;
  price: number;
  description: string;
  category: string;
  colors: string[];
  sizes: string[];
  inStock: boolean;
  legacy: boolean;
  images: string[];
  order: number;
};

export const products: Product[] = [
  {
    "id": "grey-diamond-hoodie",
    "name": "Grey diamond hoodie",
    "subtitle": "full zipped hoodie",
    "price": 230000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Хар"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 18
  },
  {
    "id": "purple-glamour-hoodie",
    "name": "Purple glamour hoodie",
    "subtitle": "zipped hoodie",
    "price": 230000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "purple"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 17
  },
  {
    "id": "black-glamour-hoodie",
    "name": "BLACK GLAMOUR HOODIE",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Black"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1685354217981-26c14a211bf8?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 16
  },
  {
    "id": "never-die-hoodie",
    "name": "NEVER DIE hoodie",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Хар"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 15
  },
  {
    "id": "5-zipped-hoodie",
    "name": "5 zipped hoodie",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Хар"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1622567893612-a5345baa5c9a?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 14
  },
  {
    "id": "red-heart-hoodie",
    "name": "Red heart hoodie",
    "subtitle": "full zipped hoodie",
    "price": 170000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Хар"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 13
  },
  {
    "id": "purple-heart-hoodie",
    "name": "Purple heart hoodie",
    "subtitle": "zipped hoodie",
    "price": 200000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Хар"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 12
  },
  {
    "id": "black-diamond-zip-up-hoodie",
    "name": "Black diamond zip-up hoodie",
    "subtitle": "Hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Black"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - ( 175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1685354217981-26c14a211bf8?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 10
  },
  {
    "id": "glamour-hoodie",
    "name": "Glamour Hoodie",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1609873814058-a8928924184a?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 9
  },
  {
    "id": "phantom-panther-hoodie",
    "name": "Phantom panther hoodie",
    "subtitle": "ZIPPED HOODIE",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Black"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1517942420142-6a296f9ee4b1?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1542406775-ade58c52d2e4?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1622567893612-a5345baa5c9a?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 8
  },
  {
    "id": "phanter-hoodie",
    "name": "Phanter hoodie",
    "subtitle": "ZIPPED HOODIE",
    "price": 230000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "grey"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1680292783974-a9a336c10366?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 7
  },
  {
    "id": "blue-aura-hoodie",
    "name": "Blue aura hoodie",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "Blue"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1564557287817-3785e38ec1f5?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1579572331145-5e53b299c64e?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 6
  },
  {
    "id": "white-black-hoodie",
    "name": "White & Black hoodie",
    "subtitle": "zipped hoodie",
    "price": 195500,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "White"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1685354218016-3899c9ef79ad?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1601063476271-a159c71ab0b3?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 5
  },
  {
    "id": "white-camo-hoodie",
    "name": "WHITE CAMO HOODIE",
    "subtitle": "zipped hoodie",
    "price": 230000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "white"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": true,
    "images": [
      "https://images.unsplash.com/photo-1685354217981-26c14a211bf8?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1615397587950-3cbb55f95b77?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 2
  },
  {
    "id": "camo-hoodie",
    "name": "CAMO HOODIE",
    "subtitle": "zipped hoodie",
    "price": 190000,
    "description": "( Эрэгтэй, эмэгтэй өмсөж болно) МАЛГАЙ ХАНЦУЙ ТОМТОЙ, БИЕ ХЭСЭГ ТАШАА ХҮРСЭН УРТТАЙ, БИЕТЭЙ ДААВУУН МАТЕРИАЛТАЙ, СУНАХГҮЙ.",
    "category": "Hoodie",
    "colors": [
      "brown"
    ],
    "sizes": [
      "L - (160-175cm)",
      "XL - (175-190cm)"
    ],
    "inStock": false,
    "legacy": true,
    "images": [
      "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 1
  },
  {
    "id": "bortsog-classic-tee",
    "name": "BORTSOG classic tee",
    "subtitle": "T-Shirt",
    "price": 65000,
    "description": "- Эрэгтэй, эмэгтэй өмсөж болно\r\n- 100% cotton, bietэй даавуу\r\n- Oversized fit\r\n- Урд, ард нь хэвлэлтэй",
    "category": "T-Shirt",
    "colors": [
      "Black",
      "White"
    ],
    "sizes": [
      "L(160-175cm)",
      "XL (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1581655353564-df123a1eb820?w=1100&q=75&auto=format&fit=crop&fm=jpg",
      "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 14
  },
  {
    "id": "diamond-graphic-tee",
    "name": "Diamond graphic tee",
    "subtitle": "T-Shirt",
    "price": 72000,
    "description": "- Эрэгтэй, эмэгтэй өмсөж болно\r\n- 100% cotton\r\n- Regular fit\r\n- Урд талдаа diamond принттэй",
    "category": "T-Shirt",
    "colors": [
      "Grey"
    ],
    "sizes": [
      "L(160-175cm)",
      "XL (175-190cm)"
    ],
    "inStock": true,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 13
  },
  {
    "id": "camo-tee",
    "name": "Camo tee",
    "subtitle": "T-Shirt",
    "price": 69000,
    "description": "- Эрэгтэй, эмэгтэй өмсөж болно\r\n- 100% cotton\r\n- Oversized fit\r\n- Camo хээтэй",
    "category": "T-Shirt",
    "colors": [
      "Brown"
    ],
    "sizes": [
      "L(160-175cm)",
      "XL (175-190cm)"
    ],
    "inStock": false,
    "legacy": false,
    "images": [
      "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?w=1100&q=75&auto=format&fit=crop&fm=jpg"
    ],
    "order": 12
  }
];

export const activeProducts = products.filter((p) => !p.legacy);
export const legacyProducts = products.filter((p) => p.legacy);

export const categories = Array.from(new Set(activeProducts.map((p) => p.category)));

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function formatMNT(value: number): string {
  return value.toLocaleString("en-US") + "₮";
}
