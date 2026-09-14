export type Home = {
  slug: string;
  name: string;
  series: string;
  beds: number;
  baths: number;
  sqft: string;
  tags: string[];
  price: string;
  photo: { src: string; alt: string };
};

export const homes: Home[] = [
  {
    slug: "serenity",
    name: "The Serenity",
    series: "Skyline Embrace 2864H42A7C",
    beds: 4,
    baths: 2,
    sqft: "1,707",
    tags: ["Ranch Style", "Two-Section"],
    price: "Call For Price",
    photo: { src: "/model-cascade-living-room.webp", alt: "Living room in The Serenity" },
  },
  {
    slug: "bellamy",
    name: "The Bellamy",
    series: "Skyline Prairie Dune 8850",
    beds: 3,
    baths: 2,
    sqft: "1,494",
    tags: ["Kitchen Island", "Soaking Tub"],
    price: "Call For Price",
    photo: { src: "/model-ridgeline-kitchen.webp", alt: "Open kitchen with island in The Bellamy" },
  },
  {
    slug: "madi",
    name: "The Madi",
    series: "Skyline Prairie Dune 8452",
    beds: 3,
    baths: 2,
    sqft: "1,306",
    tags: ["Open Floor Plan", "Walk-In Shower"],
    price: "Call For Price",
    photo: { src: "/model-magnolia-living-room.webp", alt: "Living room in The Madi" },
  },
  {
    slug: "simplicity-2",
    name: "Simplicity 2",
    series: "Skyline Embrace 1676H32A7H",
    beds: 3,
    baths: 2,
    sqft: "1,153",
    tags: ["Open Concept", "Single-Section"],
    price: "Call For Price",
    photo: {
      src: "/03.28.2023_15.05.19.jpg.webp",
      alt: "Open-concept kitchen and living room in Simplicity 2",
    },
  },
  {
    slug: "pike",
    name: "The Pike",
    series: "Champion Homes Tiny Home",
    beds: 1,
    baths: 1,
    sqft: "546",
    tags: ["Tiny Home", "Efficient Layout"],
    price: "Call For Price",
    photo: {
      src: "/StT6eo67YXv-Living_Room.jpg.webp",
      alt: "Living room in The Pike tiny home",
    },
  },
];
