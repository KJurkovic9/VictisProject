const allShoes = {
  shoes: [
    {
      name: 'Nike Air More Uptempo Black',
      slug: 'nike-air-more-uptempo-black',
      category: 'Shoes',
      image: '/images/shoes/Nike Air More Uptempo Black.png',
      oldPrice: 209.99,
      newPrice: 149.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Nike Air More Uptempo Gray',
      slug: 'nike-air-more-uptempo-gray',
      category: 'Shoes',
      image: '/images/shoes/Nike Air More Uptempo Gray.png',
      oldPrice: 209.99,
      newPrice: 149.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: "YEEZY BOOST 350 V2 'MX OAT'",
      slug: 'yeezy-boost-350-v2-mx-oat',
      category: 'Shoes',
      image: '/images/shoes/shoe1.png',
      oldPrice: 229.99,
      newPrice: 179.99,
      brand: 'Adidas',
      rating: 4.5,
      numReviews: 8,
      countInStock: 20,
      description: 'A popular shirt',
    },
    {
      name: "YEEZY BOOST 350 V2 'MX ROCK'",
      slug: 'yeezy-boost-350-v2-mx-rock',
      category: 'Shoes',
      image: '/images/shoes/shoe2.png',
      oldPrice: 229.99,
      newPrice: 179.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 12,
      countInStock: 15,
      description: 'A popular shoes',
    },
    {
      name: "YEEZY BOOST 350 V2 'BELUGA'",
      slug: 'yeezy-boost-350-v2-beluga',
      category: 'Shoes',
      image: '/images/shoes/shoe3.png',
      oldPrice: 229.99,
      newPrice: 149.99,
      brand: 'Adidas',
      rating: 4.8,
      numReviews: 13,
      countInStock: 24,
      description: 'A popular shirts',
    },
    {
      name: "ADIDAS YEEZY BOOST 700 V3 'CLAY BROWN'",
      slug: 'yeezy-boost-700-v3-clay-brown',
      category: 'Shoes',
      image: '/images/shoes/shoe4.png',
      oldPrice: 319.99,
      newPrice: 279.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 350 V2 'MONO MIST'",
      slug: 'yeezy-boost-350-v2-mono-mist',
      category: 'Shoes',
      image: '/images/shoes/shoe5.png',
      oldPrice: 249.99,
      newPrice: 214.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'Nike Air More Uptempo Volt',
      slug: 'nike-air-more-uptempo-volt',
      category: 'Shoes',
      image: '/images/shoes/Nike Air More Uptempo Volt.png',
      oldPrice: 209.99,
      newPrice: 149.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: "YEEZY BOOST 350 V2 'MONO ICE'",
      slug: 'yeezy-boost-350-v2-mono-ice',
      category: 'Shoes',
      image: '/images/shoes/shoe6.png',
      oldPrice: 249.99,
      newPrice: 214.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "ADIDAS YEEZY 700 V3 'ARZARETH'",
      slug: 'yeezy-700-v3-arzareth',
      category: 'Shoes',
      image: '/images/shoes/shoe7.png',
      oldPrice: 319.99,
      newPrice: 279.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 350 V2 'CINDER NON-REFLECTIVE'",
      slug: 'yeezy-boost-350-v2-cinder-non-reflective',
      category: 'Shoes',
      image: '/images/shoes/shoe8.png',
      oldPrice: 229.99,
      newPrice: 169.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 350 V2 INFANTS 'SLATE'",
      slug: 'yeezy-boost-350-v2-infinite-slate',
      category: 'Shoes',
      image: '/images/shoes/shoe9.png',
      oldPrice: 229.99,
      newPrice: 169.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'Nike Air More Uptempo White',
      slug: 'nike-air-more-uptempo-white',
      category: 'Shoes',
      image: '/images/shoes/Nike Air More Uptempo White.png',
      oldPrice: 209.99,
      newPrice: 149.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: "YEEZY BOOST 350 V2 CMPCT 'SLATE RED'",
      slug: 'yeezy-boost-350-v2-cmpct-slate-red',
      category: 'Shoes',
      image: '/images/shoes/shoe10.png',
      oldPrice: 229.99,
      newPrice: 209.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 700 V2 'TEPHRA'",
      slug: 'yeezy-boost-700-v2-tephra',
      category: 'Shoes',
      image: '/images/shoes/shoe11.png',
      oldPrice: 249.99,
      newPrice: 199.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 700 'HI-RES RED'",
      slug: 'yeezy-boost-700-hi-res-red',
      category: 'Shoes',
      image: '/images/shoes/shoe12.png',
      oldPrice: 249.99,
      newPrice: 189.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "ADIDAS YEEZY 700 V3 'FADE CARBON'",
      slug: 'yeezy-700-v3-fade-carbon',
      category: 'Shoes',
      image: '/images/shoes/shoe13.png',
      oldPrice: 249.99,
      newPrice: 209.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'ADIDAS YEEZY BOOST 380 ALIENS',
      slug: 'yeezy-boost-380-aliens',
      category: 'Shoes',
      image: '/images/shoes/shoe14.png',
      oldPrice: 299.99,
      newPrice: 249.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 350 V2 'DAZZLING BLUE'",
      slug: 'yeezy-boost-350-v2-dazzling-blue',
      category: 'Shoes',
      image: '/images/shoes/shoe15.png',
      oldPrice: 229.99,
      newPrice: 159.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "YEEZY BOOST 350 V2 'MONO CLAY'",
      slug: 'yeezy-boost-350-v2-mono-clay',
      category: 'Shoes',
      image: '/images/shoes/shoe16.png',
      oldPrice: 259.99,
      newPrice: 214.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: "ADIDAS YEEZY 700 V3 'COOPER FADE'",
      slug: 'yeezy-700-v3-cooper-fade',
      category: 'Shoes',
      image: '/images/shoes/shoe17.png',
      oldPrice: 229.99,
      newPrice: 199.99,
      brand: 'Adidas',
      rating: 4.0,
      numReviews: 3,
      countInStock: 14,
      description: 'A popular pants',
    },
    {
      name: 'Jordan IV High Blue Black',
      slug: 'jordan-iv-high-blue-black',
      category: 'Shoes',
      image: '/images/shoes/jordan iv high blue black.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Khaki Black',
      slug: 'jordan-iv-khaki-black',
      category: 'Shoes',
      image: '/images/shoes/jordan iv khaki black.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV PSG',
      slug: 'jordan-iv-psg',
      category: 'Shoes',
      image: '/images/shoes/jordan iv psg.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Black White',
      slug: 'jordan-iv-retro-black-white',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro black white.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Blue Gray',
      slug: 'jordan-iv-retro-blue-gray',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro blue gray.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Brown Black',
      slug: 'jordan-iv-retro-brown-black',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro brown black.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Green Black',
      slug: 'jordan-iv-retro-green-black',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro green black.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Oreo',
      slug: 'jordan-iv-retro-oreo',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro oreo.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Purple Black Red',
      slug: 'jordan-iv-retro-purple-black-red',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro purple black red.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro Red White',
      slug: 'jordan-iv-retro-red-white',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro red white.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro White Gray Red',
      slug: 'jordan-iv-retro-white-gray-red',
      category: 'Shoes',
      image: '/images/shoes/jordan iv retro white gray red.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Jordan IV Retro White Navy Blue',
      slug: 'jordan-iv-retro-white-navy-blue',
      category: 'Shoes',
      image: '/images/shoes/shoe42.png',
      oldPrice: 219.99,
      newPrice: 159.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 15,
      countInStock: 20,
      description: 'Very good',
    },
    {
      name: 'Air Jordan 1 Retro High OG Heritage',
      slug: 'air-jordan-1-retro-high-og-heritage',
      category: 'Shoes',
      image: '/images/shoes/shoe18.png',
      oldPrice: 229.99,
      newPrice: 169.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Dunk Low Retro QS Argon',
      slug: 'nike-dunk-low-retro-qs-argon',
      category: 'Shoes',
      image: '/images/shoes/shoe19.png',
      oldPrice: 199.99,
      newPrice: 139.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'LeBron x Nike Dunk Low Fruity Pebbles',
      slug: 'lebron-x-nike-dunk-low-fruity-pebbles',
      category: 'Shoes',
      image: '/images/shoes/shoe20.png',
      oldPrice: 199.99,
      newPrice: 139.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Dunk Low Retro Miami Hurricanes',
      slug: 'nike-dunk-low-retro-miami-hurricanes',
      category: 'Shoes',
      image: '/images/shoes/shoe21.png',
      oldPrice: 159.99,
      newPrice: 109.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Dunk Low Ivory Hyper Royal (GS)',
      slug: 'nike-dunk-low-ivory-hyper-royal-gs',
      category: 'Shoes',
      image: '/images/shoes/shoe22.png',
      oldPrice: 129.99,
      newPrice: 99.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Union x SB Nike Dunk Low Passport Pack Pistachio',
      slug: 'union-x-sb-nike-dunk-low-passport-pack-pistachio',
      category: 'Shoes',
      image: '/images/shoes/shoe23.png',
      oldPrice: 219.99,
      newPrice: 169.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Union x SB Nike Dunk Low white/purple',
      slug: 'union-x-sb-nike-dunk-low-white-purple',
      category: 'Shoes',
      image: '/images/shoes/shoe24.png',
      oldPrice: 229.99,
      newPrice: 189.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 Low ’07 All Black',
      slug: 'nike-air-force-1-low-07-all-black',
      category: 'Shoes',
      image: '/images/shoes/shoe25.png',
      oldPrice: 129.99,
      newPrice: 99.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 High Flax',
      slug: 'nike-air-force-1-high-flax',
      category: 'Shoes',
      image: '/images/shoes/shoe28.png',
      oldPrice: 229.99,
      newPrice: 169.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 High White',
      slug: 'nike-air-force-1-high-white',
      category: 'Shoes',
      image: '/images/shoes/shoe29.png',
      oldPrice: 129.99,
      newPrice: 99.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 ’07 Athletic Club Marina Blue',
      slug: 'nike-air-force-1-07-athletic-club-marina-blue',
      category: 'Shoes',
      image: '/images/shoes/shoe30.png',
      oldPrice: 159.99,
      newPrice: 129.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 React',
      slug: 'nike-air-force-1-react',
      category: 'Shoes',
      image: '/images/shoes/shoe31.png',
      oldPrice: 159.99,
      newPrice: 119.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Air Force 1 ’07 Low White Medium Blue',
      slug: 'air-force-1-07-low-white-medium-blue',
      category: 'Shoes',
      image: '/images/shoes/shoe32.png',
      oldPrice: 149.99,
      newPrice: 109.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 Low Utility 07 LV8',
      slug: 'nike-air-force-1-low-utility-07-lv8',
      category: 'Shoes',
      image: '/images/shoes/shoe33.png',
      oldPrice: 129.99,
      newPrice: 99.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'Nike Air Force 1 Low ’07 White',
      slug: 'nike-air-force-1-low-07-white',
      category: 'Shoes',
      image: '/images/shoes/shoe34.png',
      oldPrice: 129.99,
      newPrice: 99.99,
      brand: 'Nike',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA MARS white/purple',
      slug: 'fila-mars-white-purple',
      category: 'Shoes',
      image: '/images/shoes/shoe35.png',
      oldPrice: 139.99,
      newPrice: 119.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA MARS khaki/white',
      slug: 'fila-mars-khaki-white',
      category: 'Shoes',
      image: '/images/shoes/shoe36.png',
      oldPrice: 139.99,
      newPrice: 119.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA MARS gray/white',
      slug: 'fila-mars-gray-white',
      category: 'Shoes',
      image: '/images/shoes/shoe37.png',
      oldPrice: 149.99,
      newPrice: 119.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA Lava Womens WMNS white',
      slug: 'fila-mars-womens-wmns-white',
      category: 'Shoes',
      image: '/images/shoes/shoe38.png',
      oldPrice: 139.99,
      newPrice: 109.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA FUSION white/pink',
      slug: 'fila-fusion-white-pink',
      category: 'Shoes',
      image: '/images/shoes/shoe39.png',
      oldPrice: 139.99,
      newPrice: 109.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA FUSION white/gray',
      slug: 'fila-fusion-white-gray',
      category: 'Shoes',
      image: '/images/shoes/shoe40.png',
      oldPrice: 139.99,
      newPrice: 109.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
    {
      name: 'FILA FUSION all pink',
      slug: 'fila-fusion-all-pink',
      category: 'Shoes',
      image: '/images/shoes/shoe41.png',
      oldPrice: 149.99,
      newPrice: 109.99,
      brand: 'Fila',
      rating: 4.5,
      numReviews: 9,
      countInStock: 10,
      description: 'Very good',
    },
  ],
};

export default allShoes;
