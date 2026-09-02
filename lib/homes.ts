export type Home = {
  slug: string;
  name: string;
  type: string;
  rating: string;
  beds: number;
  baths: number;
  sqft: string;
  tags: string[];
  price: string;
  photo: { src: string; alt: string };
};

export const homes: Home[] = [
  {
    slug: "magnolia",
    name: "The Magnolia",
    type: "Single-Section",
    rating: "4.9",
    beds: 2,
    baths: 1,
    sqft: "728",
    tags: ["Open Floor Plan", "Covered Porch"],
    price: "62,900",
    photo: { src: "/model-magnolia-living-room.webp", alt: "Living room in The Magnolia" },
  },
  {
    slug: "ridgeline",
    name: "The Ridgeline",
    type: "Double-Section",
    rating: "5.0",
    beds: 3,
    baths: 2,
    sqft: "1,600",
    tags: ["Island Kitchen", "Primary Suite"],
    price: "94,500",
    photo: { src: "/model-ridgeline-kitchen.webp", alt: "Open kitchen and living room in The Ridgeline" },
  },
  {
    slug: "cascade",
    name: "The Cascade",
    type: "Double-Section",
    rating: "4.8",
    beds: 4,
    baths: 2,
    sqft: "1,808",
    tags: ["Bonus Room", "Energy Star"],
    price: "118,900",
    photo: { src: "/model-cascade-living-room.webp", alt: "Living room with fireplace in The Cascade" },
  },
  {
    slug: "birchwood",
    name: "The Birchwood",
    type: "Double-Section",
    rating: "4.9",
    beds: 3,
    baths: 2,
    sqft: "1,512",
    tags: ["Chef's Kitchen", "Tray Ceiling"],
    price: "104,900",
    photo: {
      src: "/03.28.2023_15.05.19.jpg.webp",
      alt: "Open-concept kitchen and living room with tray ceiling in The Birchwood",
    },
  },
  {
    slug: "aspen",
    name: "The Aspen",
    type: "Single-Section",
    rating: "4.7",
    beds: 3,
    baths: 2,
    sqft: "1,140",
    tags: ["Stone Fireplace", "Split Bedrooms"],
    price: "78,400",
    photo: {
      src: "/StT6eo67YXv-Living_Room.jpg.webp",
      alt: "Living room with stone fireplace accent wall in The Aspen",
    },
  },
];
