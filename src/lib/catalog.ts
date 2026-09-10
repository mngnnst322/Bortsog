// Bortsog-маягийн жишээ каталог. Зургууд нь loremflickr-ийн санамсаргүй хувцасны зураг (жишээ).
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
      "https://loremflickr.com/800/1000/hoodie?lock=100",
      "https://loremflickr.com/800/1000/streetwear?lock=101",
      "https://loremflickr.com/800/1000/jacket?lock=102"
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
      "https://loremflickr.com/800/1000/tshirt?lock=103",
      "https://loremflickr.com/800/1000/fashion?lock=104",
      "https://loremflickr.com/800/1000/apparel?lock=105",
      "https://loremflickr.com/800/1000/clothing?lock=106"
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
      "https://loremflickr.com/800/1000/sweatshirt?lock=107",
      "https://loremflickr.com/800/1000/hoodie?lock=108",
      "https://loremflickr.com/800/1000/streetwear?lock=109"
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
      "https://loremflickr.com/800/1000/jacket?lock=110",
      "https://loremflickr.com/800/1000/tshirt?lock=111",
      "https://loremflickr.com/800/1000/fashion?lock=112",
      "https://loremflickr.com/800/1000/apparel?lock=113"
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
      "https://loremflickr.com/800/1000/clothing?lock=114",
      "https://loremflickr.com/800/1000/sweatshirt?lock=115",
      "https://loremflickr.com/800/1000/hoodie?lock=116"
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
      "https://loremflickr.com/800/1000/streetwear?lock=117",
      "https://loremflickr.com/800/1000/jacket?lock=118",
      "https://loremflickr.com/800/1000/tshirt?lock=119"
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
      "https://loremflickr.com/800/1000/fashion?lock=120",
      "https://loremflickr.com/800/1000/apparel?lock=121"
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
      "https://loremflickr.com/800/1000/clothing?lock=122",
      "https://loremflickr.com/800/1000/sweatshirt?lock=123",
      "https://loremflickr.com/800/1000/hoodie?lock=124"
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
      "https://loremflickr.com/800/1000/streetwear?lock=125",
      "https://loremflickr.com/800/1000/jacket?lock=126"
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
      "https://loremflickr.com/800/1000/tshirt?lock=127",
      "https://loremflickr.com/800/1000/fashion?lock=128",
      "https://loremflickr.com/800/1000/apparel?lock=129"
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
      "https://loremflickr.com/800/1000/clothing?lock=130",
      "https://loremflickr.com/800/1000/sweatshirt?lock=131",
      "https://loremflickr.com/800/1000/hoodie?lock=132"
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
      "https://loremflickr.com/800/1000/streetwear?lock=133",
      "https://loremflickr.com/800/1000/jacket?lock=134"
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
      "https://loremflickr.com/800/1000/tshirt?lock=135",
      "https://loremflickr.com/800/1000/fashion?lock=136",
      "https://loremflickr.com/800/1000/apparel?lock=137"
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
      "https://loremflickr.com/800/1000/clothing?lock=138",
      "https://loremflickr.com/800/1000/sweatshirt?lock=139"
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
      "https://loremflickr.com/800/1000/hoodie?lock=140"
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
      "https://loremflickr.com/800/1000/streetwear?lock=141",
      "https://loremflickr.com/800/1000/jacket?lock=142"
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
      "https://loremflickr.com/800/1000/tshirt?lock=143"
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
      "https://loremflickr.com/800/1000/fashion?lock=144"
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
