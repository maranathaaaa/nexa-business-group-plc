import React, { useState } from 'react';

const trustedCompanyModules = import.meta.glob('../../assets/companies/*.{png,jpg,jpeg,jfif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const trustedCompanies = Object.entries(trustedCompanyModules)
  .map(([path, url]) => {
    const rawName = path.split('/').pop() ?? path;
    const name = rawName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim();
    return { name, logo: url };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export const TrustedBySection: React.FC = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section aria-labelledby="trusted-by-heading" className="bg-slate-50 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 id="trusted-by-heading" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Companies we have worked with
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
            Proud to have partnered with leading organizations across multiple industries.
          </p>
        </div>
      </div>

      <div
        className="mt-12"
        onPointerDown={() => setIsPaused(true)}
        onPointerUp={() => setIsPaused(false)}
        onPointerLeave={() => setIsPaused(false)}
        onPointerCancel={() => setIsPaused(false)}
      >
        <div
          role="list"
          aria-label="Trusted companies logo strip"
          className="flex w-max"
          style={{
            animation: `marquee 80s linear infinite`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {[0, 1].map((copy) => (
            <div key={copy} role="listitem" className="flex w-max items-center gap-6 pr-6">
              {trustedCompanies.map((company) => (
                <div
                  key={`${copy}-${company.name}`}
                  className="group flex h-28 w-40 sm:w-44 flex-shrink-0 items-center justify-center rounded-3xl border border-slate-200/80 bg-white p-4 transition-shadow duration-300 hover:shadow-xl"
                >
                  <img
                    src={company.logo}
                    alt={`${company.name} logo`}
                    className="max-h-full w-full object-contain transition duration-300 ease-in-out"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
