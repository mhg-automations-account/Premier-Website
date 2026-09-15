export type WrittenTestimonial = {
  id: string;
  source: "written";
  name: string;
  role: string;
  rating: number;
  quote: string;
};

export type VideoTestimonial = {
  id: string;
  source: "video";
  name: string;
  role: string;
  videoSrc?: string;
};

export const writtenTestimonials: WrittenTestimonial[] = [
  {
    id: "written-1",
    source: "written",
    name: "The Harmon Family",
    role: "Joplin, MO",
    rating: 5,
    quote:
      "We didn't think we could afford a new home. Premier found us a plan and a payment that actually worked.",
  },
  {
    id: "written-2",
    source: "written",
    name: "Carlos M.",
    role: "Pittsburg, KS",
    rating: 5,
    quote:
      "They handled the permits and site work so we didn't have to chase anyone down. Moved in ahead of schedule.",
  },
  {
    id: "written-3",
    source: "written",
    name: "The Whitfields",
    role: "Neosho, MO",
    rating: 4,
    quote:
      "Straightforward pricing, no upsell games. Our sales rep answered questions for weeks before we signed anything.",
  },
];

// No footage yet — cards render with a "Coming Soon" badge instead of a
// play button until a videoSrc is added here.
export const videoTestimonials: VideoTestimonial[] = [
  {
    id: "video-1",
    source: "video",
    name: "The Bennett Family",
    role: "Homeowner Story",
  },
  {
    id: "video-2",
    source: "video",
    name: "Rachel & Tom",
    role: "Homeowner Story",
  },
  {
    id: "video-3",
    source: "video",
    name: "The Ortiz Family",
    role: "Homeowner Story",
  },
];
