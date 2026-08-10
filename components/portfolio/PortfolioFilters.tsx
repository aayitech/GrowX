"use client";

import { useState } from "react";

export type PortfolioFilter = "All" | "Amazon" | "TikTok Shop" | "Wayfair";

interface PortfolioFiltersProps {
  activeFilter?: PortfolioFilter;
  onFilterChange?: (filter: PortfolioFilter) => void;
}

const filters: PortfolioFilter[] = [
  "All",
  "Amazon",
  "TikTok Shop",
  "Wayfair",
];

export default function PortfolioFilters({
  activeFilter: controlledFilter,
  onFilterChange,
}: PortfolioFiltersProps) {
  const [internalFilter, setInternalFilter] =
    useState<PortfolioFilter>("All");

  const activeFilter = controlledFilter ?? internalFilter;

  const handleFilterChange = (filter: PortfolioFilter) => {
    if (!controlledFilter) {
      setInternalFilter(filter);
    }

    onFilterChange?.(filter);
  };

  return (
    <section className="bg-white px-6 py-8 sm:px-8 lg:px-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          {/* Section label */}
          <div>
            <p className="font-poppins text-sm font-bold text-[#151515]">
              Explore Our Work
            </p>

            <p className="mt-1 font-inter text-sm text-black/50">
              Filter results by marketplace
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((filter) => {
              const isActive = activeFilter === filter;

              return (
                <button
                  key={filter}
                  type="button"
                  onClick={() => handleFilterChange(filter)}
                  aria-pressed={isActive}
                  className={`
                    rounded-full px-5 py-2.5
                    font-inter text-sm font-medium
                    transition-all duration-200
                    ${
                      isActive
                        ? "bg-[#7B3FF2] text-white shadow-sm"
                        : "border border-black/10 bg-white text-[#151515] hover:border-[#7B3FF2]/40 hover:text-[#7B3FF2]"
                    }
                  `}
                >
                  {filter}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}