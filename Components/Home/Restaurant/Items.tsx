
export interface Restaurant {
  id:number;
  name: string;
  description: string;
  image: string;
  rating:number;
}
export const restaurants:Restaurant[] = [
  {
     id:1,
    name: "Spice Symphony",
    description:
      "A modern Indian bistro serving bold curries, sizzling tandoori dishes, and handcrafted naan – a true symphony of flavors.",
    image: "/images/img1.jpg",
    rating:3.5
  },
  {
    id:2,
    name: "The Pasta Palette",
    description:
      "An Italian haven offering freshly made pasta, creamy sauces, and artisanal pizzas baked to perfection.",
    image: "/images/img2.jpg",
    rating:4.5
  },
  {
     id:3,
    name: "Urban Bites Café",
    description:
      "A cozy city café specializing in gourmet sandwiches, smoothies, and specialty coffees for foodies on the go.",
    image: "/images/img3.jpg",
    rating:3
  },
  {
    id:4,
    name: "Sakura Street Kitchen",
    description:
      "A Japanese-inspired kitchen serving sushi rolls, ramen bowls, and sizzling teppanyaki with a street-style twist.",
    image: "/images/img4.jpg",
    rating:4
  },
  {
    id:5,
    name: "Grill & Chill Smokehouse",
    description:
      "A rustic BBQ restaurant featuring slow-smoked meats, juicy steaks, and tangy house-made sauces.",
    image: "/images/img5.jpg",
    rating:3.5
  },
  {
    id:6,
    name: "Harvest & Hearth",
    description:
      "A farm-to-table eatery offering fresh salads, wholesome grain bowls, and hearty dishes made with local ingredients.",
    image: "/images/img6.jpg",
    rating:4.5
  }
];




