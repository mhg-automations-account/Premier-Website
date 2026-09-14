import { PhoneIcon } from "./icons";

export default function FloatingCallButton() {
  return (
    <a
      href="tel:14173820829"
      aria-label="Call Premier Midwest Homes"
      className="animate-float-slow fixed right-6 bottom-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-maroon-400 text-white shadow-lg shadow-maroon-600/30 ring-4 ring-white/50 transition-transform hover:scale-110"
    >
      <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-maroon-400/50" />
      <PhoneIcon className="h-6 w-6" />
    </a>
  );
}
