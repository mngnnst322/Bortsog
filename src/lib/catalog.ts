// Bortsog-маягийн жишээ каталог. Зургууд public R2 bucket-ээс.
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/a2750d6d-5cd2-4a21-8a63-5dbe66ab0761-ec223f45-0f8e-4b59-a233-0bfc29d06826-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/249fc7bc-4b24-47dc-965a-3b0e71fba9eb-71c25d2e-4b65-49d8-ae0e-f3d29e4549ce-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/86091f18-0df6-4174-a4f2-8af09b1f347b-94b94918-43a6-407a-87c4-e95310d96a6e-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1ac94b7a-e591-4c52-93fe-7e337870f576-7e433eac-9459-4e50-a1dd-cf8b89cfee0f-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/8bea8172-8d1c-484e-9343-92212a0bbfd0-16d5718d-501a-4295-b6ec-d91b10ab21a6-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/6e132a47-2f1c-4729-9d0b-70c67d1efc58-508b22e1-f1ae-4426-aa32-d9bdad55760f-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/e9ee06f6-b1f1-40b6-a960-9c1e00a5ee1c-814de438-5f27-4259-9fd8-60db4000b117-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/3e4da392-9859-4039-b4c6-ce2ab278e342-7ac5918e-cf86-48d2-819d-9d82b655b6c7-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/33d5732c-c3b4-4936-bf82-603acbaf9860-0339c8e5-de1e-4496-8778-f0c5dbe56d88-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/0ada6696-d19c-4f61-8377-e8a5f0433fe9-0f08f13f-ec36-412d-a29d-73b1ca9b0ed8-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/40ed1540-bdfc-43c9-9920-811b88e62f54-bwmsgl-138adb9e-eccf-4f28-9de4-e3f8defa0e7e-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/9aaeb269-74f4-4e58-a2a5-87c98cc4b139-yeu6w7-0881e13a-2edd-4a16-9291-bd0c1d45bb1f-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/6f590115-9044-4df8-81d8-6c2a100548dc-hxxyhw-192c08b9-cde1-4818-9cb9-df0204fe2c7e-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/img-1820-d8gg6t-f302e9bc-de4c-43be-b552-9c37745bd9d4-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/db609038-6ca7-4eba-b83b-b55f0f148c17-yx18fr-8e0c6645-abae-48c6-936b-a9205749e968-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/610ef864-5003-43a0-ba58-7122ec60aa07-bd85dd-00d286a8-cd37-480d-8170-bdb17168a527-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/04b8d5a1-c471-4d22-beec-ae96cf4c16df-al3nbh-0195386b-638c-4d17-bf12-71e677979757-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/b44f6919-8411-4096-af0b-63f5ad3511cc-s5sc3s-57d1d8a0-16e9-4d93-96ca-cd651a6c7328-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/8ab5542f-239d-4860-9cb5-4a5862c7b435-jul6de-1fe07017-ba0f-4dff-b3c8-672063b45331-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/43391405-32d2-4edb-b60e-e764536a79b5-pifxt6-7054e673-35fc-4c71-bc7d-7b8cde0d304f-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/f3e85aee-7840-46d3-8338-badb2f13f485-qhsxwy-8ec3179c-86ed-4f7c-96a4-44697483766d-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/b4208b07-a1d8-4ba8-a70b-cda7b39aff21-jzswws-b4203b4b-3245-4375-88cc-8520bb8e2428-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783304950786-1ae0faab-ae8e-43b0-a201-541a7e303b-d4e8b002-4df2-4bb8-937c-be55a10402c5-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783304952813-ba4d75d3-7030-44f7-a2ce-2984a98086-242fa0fd-192c-4ec1-8178-0fb45c8da7cb-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783304977316-3119f754-865c-404b-8361-3cfbce55d8-5ab15ad3-ae6e-4134-a934-8b46b42a2277-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305032445-4378375e-3845-46e4-84ed-048aa96f0f-ea85f451-d2e3-44cc-bb99-9c330129da3b-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305033911-ae346115-e044-43af-befc-abe88fe2ec-14d88df5-7ec7-41a6-a600-bde187fa5b9a-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305638362-bdaf458a-9cd9-468b-a982-9922f682f2-b0731429-3834-4bc5-955f-810af52592f0-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305641356-deb114b3-8ff7-4c31-9e6e-7e91a5df83-f51dc01c-83bc-4bfa-aad5-44b06bf9a0b2-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305644458-9ef3db57-6692-438c-8a55-6ae5a66805-9f5c07ab-d469-487f-a121-7361542bc972-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305888932-be9728b2-9c19-49cb-ba49-4e1b581555-f13093f8-0b75-466e-b550-b84ee70fc318-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305891031-6deef3e1-b85d-40b9-b62a-a71906e9eb-c1f73189-a2db-417a-b704-fedccc8444c0-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783305894161-2ea976a2-c712-42b7-a83f-4b61800dfc-41d854db-6432-4c54-9db0-6f72f040ad80-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783306468210-1d6cbdec-a20c-4cb3-886b-0a194e33f7-e45aa41c-3871-46c3-935e-6ddb3968bfd6-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/1783306519038-6ecf134a-8641-47c5-9664-66085c8078-6110d985-fcab-44c8-88d9-abbb2c8c3295-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/491c1647-67ce-4c96-90a0-3accb73d0e6b-vpy2fy-024b3768-b0f3-4842-a11a-45a46cacd0ac-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/09437c86-d981-42b1-b2c4-df62baa7ce60-zw3bvz-92930f41-8623-4468-8d28-7260a296c157-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/d93e3c1b-0a0e-4bf6-8119-6b37cbe94467-jpd0go-ac688fbd-b0c0-414e-a133-11934d1b7bb7-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/f750a8ca-185e-4056-b4fb-b2d236cd70b9-43cb8e95-d40e-44a1-8c81-5744b9eae272-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/c3c896a2-745c-41e5-96ac-b447e8a88f01-cc7e109d-3c98-4fee-9e4c-4933ce7015dc-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/9326cbf0-dd83-4156-a510-c894399d1140-6f003882-e924-4ee8-b0fc-cd44cce403c3-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/a2750d6d-5cd2-4a21-8a63-5dbe66ab0761-ec223f45-0f8e-4b59-a233-0bfc29d06826-main.webp",
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/249fc7bc-4b24-47dc-965a-3b0e71fba9eb-71c25d2e-4b65-49d8-ae0e-f3d29e4549ce-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/86091f18-0df6-4174-a4f2-8af09b1f347b-94b94918-43a6-407a-87c4-e95310d96a6e-main.webp"
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
      "https://pub-cc9be6a741434f95bc9c90bba1617d16.r2.dev/sadcream/products/40ed1540-bdfc-43c9-9920-811b88e62f54-bwmsgl-138adb9e-eccf-4f28-9de4-e3f8defa0e7e-main.webp"
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
