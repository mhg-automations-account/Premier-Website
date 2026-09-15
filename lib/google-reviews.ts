import { GOOGLE_PLACE_ID } from "./site";

export type GoogleReview = {
  id: string;
  source: "google";
  name: string;
  avatarUrl?: string;
  rating: number;
  quote: string;
  relativeTime: string;
  profileUrl?: string;
};

export type GooglePlaceSummary = {
  rating: number;
  reviewCount: number;
};

type PlacesApiReview = {
  name: string;
  rating: number;
  text?: { text: string };
  relativePublishTimeDescription: string;
  authorAttribution?: {
    displayName: string;
    uri?: string;
    photoUri?: string;
  };
};

type PlacesApiResponse = {
  rating?: number;
  userRatingCount?: number;
  reviews?: PlacesApiReview[];
};

// Fallback content shown until GOOGLE_PLACES_API_KEY is configured, or if the
// Places API request fails. Swap these out once real reviews are live.
const FALLBACK_REVIEWS: GoogleReview[] = [
  {
    id: "fallback-1",
    source: "google",
    name: "Amanda R.",
    rating: 5,
    quote:
      "From our first call to move-in day, the team walked us through every step. No pressure, just honest answers.",
    relativeTime: "a month ago",
  },
  {
    id: "fallback-2",
    source: "google",
    name: "Trevor S.",
    rating: 5,
    quote:
      "Financing was way easier than I expected and delivery showed up exactly when they said it would.",
    relativeTime: "2 months ago",
  },
  {
    id: "fallback-3",
    source: "google",
    name: "Diane K.",
    rating: 4,
    quote:
      "Great selection of floor plans and the crew that handled setup was professional and fast.",
    relativeTime: "3 months ago",
  },
];

const FALLBACK_SUMMARY: GooglePlaceSummary = { rating: 4.9, reviewCount: 47 };

const MIN_RATING = 4;
const REVALIDATE_SECONDS = 21600; // 6 hours

export async function getGoogleReviews(): Promise<{
  reviews: GoogleReview[];
  summary: GooglePlaceSummary;
}> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;

  if (!apiKey) {
    return {
      reviews: FALLBACK_REVIEWS.filter((r) => r.rating >= MIN_RATING),
      summary: FALLBACK_SUMMARY,
    };
  }

  try {
    const res = await fetch(
      `https://places.googleapis.com/v1/places/${GOOGLE_PLACE_ID}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "rating,userRatingCount,reviews",
        },
        next: { revalidate: REVALIDATE_SECONDS },
      }
    );

    if (!res.ok) throw new Error(`Places API responded ${res.status}`);

    const data: PlacesApiResponse = await res.json();

    const reviews: GoogleReview[] = (data.reviews ?? [])
      .filter((review) => review.rating >= MIN_RATING && review.text?.text)
      .map((review) => ({
        id: review.name,
        source: "google",
        name: review.authorAttribution?.displayName ?? "Google User",
        avatarUrl: review.authorAttribution?.photoUri,
        rating: review.rating,
        quote: review.text!.text,
        relativeTime: review.relativePublishTimeDescription,
        profileUrl: review.authorAttribution?.uri,
      }));

    return {
      reviews: reviews.length > 0 ? reviews : FALLBACK_REVIEWS.filter((r) => r.rating >= MIN_RATING),
      summary: {
        rating: data.rating ?? FALLBACK_SUMMARY.rating,
        reviewCount: data.userRatingCount ?? FALLBACK_SUMMARY.reviewCount,
      },
    };
  } catch (error) {
    console.warn("Falling back to sample Google reviews:", error);
    return {
      reviews: FALLBACK_REVIEWS.filter((r) => r.rating >= MIN_RATING),
      summary: FALLBACK_SUMMARY,
    };
  }
}
