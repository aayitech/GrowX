"use client";

import { useState } from "react";

import PortfolioHero from "@/components/portfolio/PortfolioHero";
import PortfolioFilters, {
  PortfolioFilter,
} from "@/components/portfolio/PortfolioFilters";
import CaseStudyCard, {
  caseStudies,
} from "@/components/portfolio/CaseStudyCard";

export default function PortfolioPage() {
  const [filter, setFilter] = useState<PortfolioFilter>("All");

  const filteredStudies =
    filter === "All"
      ? caseStudies
      : caseStudies.filter(
          (study) => study.platform === filter
        );

  return (
    <main>
      <PortfolioHero />

      <PortfolioFilters
        activeFilter={filter}
        onFilterChange={setFilter}
      />

      <section
        id="case-studies"
        className="bg-[#FAFAFA] px-6 py-16 sm:px-8 lg:px-12 lg:py-20"
      >
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
          {filteredStudies.map((study) => (
            <CaseStudyCard
              key={study.slug}
              study={study}
            />
          ))}
        </div>
      </section>
    </main>
  );
}