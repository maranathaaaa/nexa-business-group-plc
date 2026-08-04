import React from 'react';

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
  return (
    <section aria-labelledby="trusted-by-heading" className="bg-slate-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
        
          <h2 id="trusted-by-heading" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Companies we have worked with
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
            Proud to have partnered with leading organizations across multiple industries.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
          {trustedCompanies.map((company) => (
            <div
              key={company.name}
              className="group flex items-center justify-center rounded-3xl border border-slate-200/80 bg-white p-4 transition-shadow duration-300 hover:shadow-xl"
            >
              <img
                src={company.logo}
                alt={`${company.name} logo`}
                className="h-32 w-full max-h-36 object-contain transition duration-300 ease-in-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
