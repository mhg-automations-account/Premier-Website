"use client";

import { useMemo, useState } from "react";
import HomeCard from "./HomeCard";
import Reveal from "./Reveal";
import { homeTypes, parsePriceValue, parseSqftValue, type Home, type HomeTypeLabel } from "@/lib/homes";

const MIN_PRICE = 30_000;
const MAX_PRICE = 200_000;

const bedroomOptions = ["Any", "2+", "3+", "4+"] as const;
const bathroomOptions = ["Any", "2+", "3+"] as const;
const homeTypeOptions = ["Any", ...homeTypes.map((t) => t.label)] as const;

function formatPrice(value: number) {
  return `$${value.toLocaleString()}`;
}

export default function HomesFilters({ homes }: { homes: Home[] }) {
  const [search, setSearch] = useState("");
  const [homeType, setHomeType] = useState<"Any" | HomeTypeLabel>("Any");
  const [maxPrice, setMaxPrice] = useState(MAX_PRICE);
  const [bedrooms, setBedrooms] = useState<(typeof bedroomOptions)[number]>("Any");
  const [bathrooms, setBathrooms] = useState<(typeof bathroomOptions)[number]>("Any");
  const [brands, setBrands] = useState<string[]>([]);

  const allBrands = useMemo(
    () => Array.from(new Set(homes.map((home) => home.brand))).sort(),
    [homes],
  );

  const filteredHomes = useMemo(() => {
    const minBeds = bedrooms === "Any" ? 0 : Number(bedrooms.replace("+", ""));
    const minBaths = bathrooms === "Any" ? 0 : Number(bathrooms.replace("+", ""));
    const query = search.trim().toLowerCase();

    return homes.filter((home) => {
      if (query) {
        const haystack = `${home.name} ${home.brand} ${home.series}`.toLowerCase();
        if (!haystack.includes(query)) return false;
      }

      if (home.beds < minBeds) return false;
      if (home.baths < minBaths) return false;
      if (brands.length > 0 && !brands.includes(home.brand)) return false;

      if (homeType !== "Any") {
        const range = homeTypes.find((t) => t.label === homeType)!;
        const sqftValue = parseSqftValue(home.sqft);
        if (sqftValue === null || sqftValue < range.min || sqftValue > range.max) return false;
      }

      const priceValue = parsePriceValue(home.price);
      if (priceValue !== null && priceValue > maxPrice) return false;

      return true;
    });
  }, [homes, search, homeType, maxPrice, bedrooms, bathrooms, brands]);

  function toggleBrand(brand: string) {
    setBrands((current) =>
      current.includes(brand) ? current.filter((b) => b !== brand) : [...current, brand],
    );
  }

  function clearFilters() {
    setSearch("");
    setHomeType("Any");
    setMaxPrice(MAX_PRICE);
    setBedrooms("Any");
    setBathrooms("Any");
    setBrands([]);
  }

  const hasActiveFilters =
    search !== "" ||
    homeType !== "Any" ||
    maxPrice !== MAX_PRICE ||
    bedrooms !== "Any" ||
    bathrooms !== "Any" ||
    brands.length > 0;

  return (
    <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
      <aside className="h-fit rounded-3xl border border-maroon-200/70 bg-white/70 p-6">
        <div className="flex items-center justify-between">
          <h2 className="font-display text-lg text-ink">Filters</h2>
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearFilters}
              className="text-xs font-semibold text-maroon-500 hover:text-maroon-600"
            >
              Clear all
            </button>
          )}
        </div>

        <div className="mt-6">
          <label className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase" htmlFor="home-search">
            Search
          </label>
          <input
            id="home-search"
            type="text"
            value={search}
            onChange={(event) => setSearch(event.target.value)}
            placeholder="Name, model, style..."
            className="w-full rounded-xl border border-maroon-200 bg-white px-4 py-2.5 text-sm text-ink placeholder:text-muted-soft outline-none transition-colors focus:border-maroon-400"
          />
        </div>

        <div className="mt-7">
          <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Home Type
          </span>
          <div className="flex flex-wrap gap-2">
            {homeTypeOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setHomeType(option)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  homeType === option
                    ? "border-ink bg-ink text-cream"
                    : "border-maroon-200 text-ink/70 hover:border-maroon-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Price
          </span>
          <div className="flex items-center justify-between text-sm text-ink">
            <span>{formatPrice(MIN_PRICE)}</span>
            <span>{formatPrice(maxPrice)}+</span>
          </div>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={5_000}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="mt-2 w-full accent-maroon-400"
          />
        </div>

        <div className="mt-7">
          <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Bedrooms
          </span>
          <div className="flex flex-wrap gap-2">
            {bedroomOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBedrooms(option)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  bedrooms === option
                    ? "border-ink bg-ink text-cream"
                    : "border-maroon-200 text-ink/70 hover:border-maroon-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Bathrooms
          </span>
          <div className="flex flex-wrap gap-2">
            {bathroomOptions.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setBathrooms(option)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  bathrooms === option
                    ? "border-ink bg-ink text-cream"
                    : "border-maroon-200 text-ink/70 hover:border-maroon-400"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-7">
          <span className="mb-2 block text-xs font-semibold tracking-[0.14em] text-muted uppercase">
            Series
          </span>
          <div className="flex flex-wrap gap-2">
            {allBrands.map((brand) => (
              <button
                key={brand}
                type="button"
                onClick={() => toggleBrand(brand)}
                className={`rounded-full border px-3.5 py-1.5 text-xs font-semibold transition-colors ${
                  brands.includes(brand)
                    ? "border-ink bg-ink text-cream"
                    : "border-maroon-200 text-ink/70 hover:border-maroon-400"
                }`}
              >
                {brand}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <div>
        <h2 className="sr-only">Available Homes</h2>
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm text-muted">
            <span className="font-semibold text-ink">{filteredHomes.length}</span> of{" "}
            {homes.length} homes
          </p>
        </div>

        {filteredHomes.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-maroon-200 bg-white/50 px-6 py-16 text-center">
            <p className="font-display text-xl text-ink">No homes match your filters</p>
            <p className="text-muted mt-2 text-sm">Try widening your search or clearing a filter.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="btn-pill mt-6 border border-ink/80 bg-ink text-cream hover:bg-charcoal"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
            {filteredHomes.map((home, i) => (
              <Reveal key={home.slug} delay={i * 90} className="group">
                <HomeCard home={home} />
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
