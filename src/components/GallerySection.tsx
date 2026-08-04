import React, { useEffect, useMemo, useRef, useState } from 'react';

const galleryModules = import.meta.glob('../../gallery/*.{png,jpg,jpeg,jfif}', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

const galleryImages = Object.entries(galleryModules)
  .map(([path, url]) => {
    const fileName = path.split('/').pop() ?? path;
    const label = fileName.replace(/\.[^/.]+$/, '').replace(/[-_]+/g, ' ').trim();
    return { label, url };
  })
  .sort((a, b) => a.label.localeCompare(b.label));

export const GallerySection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef(0);
  const scrollStart = useRef(0);

  useEffect(() => {
    if (isPaused || !carouselRef.current || galleryImages.length === 0) return;

    const interval = window.setInterval(() => {
      const el = carouselRef.current;
      if (!el) return;
      const step = el.clientWidth * 0.35;
      const maxScroll = el.scrollWidth - el.clientWidth;

      if (el.scrollLeft >= maxScroll - 2) {
        el.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        el.scrollBy({ left: step, behavior: 'smooth' });
      }
    }, 2800);

    return () => window.clearInterval(interval);
  }, [isPaused]);

  const scrollByOffset = (offset: number) => {
    const el = carouselRef.current;
    if (!el) return;
    el.scrollBy({ left: offset, behavior: 'smooth' });
  };

  const handlePointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    const el = carouselRef.current;
    if (!el) return;
    setIsPaused(true);
    dragStart.current = event.clientX;
    scrollStart.current = el.scrollLeft;
    if (event.pointerType === 'mouse') {
      setIsDragging(true);
      el.setPointerCapture(event.pointerId);
    }
  };

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging || !carouselRef.current) return;
    const delta = dragStart.current - event.clientX;
    carouselRef.current.scrollLeft = scrollStart.current + delta;
  };

  const handlePointerUp = (event: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    setIsPaused(false);
    if (event.pointerType === 'mouse' && carouselRef.current) {
      carouselRef.current.releasePointerCapture(event.pointerId);
    }
  };

  return (
    <section aria-labelledby="gallery-heading" className="bg-sky-50 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.32em] text-sky-700">
            Gallery
          </p>
          <h2 id="gallery-heading" className="mt-4 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Our Journey in Pictures
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 leading-7">
            Capturing the moments that shaped Nexa Business Group PLC.
          </p>
        </div>

        <div className="mt-10 relative">
          <div className="absolute left-2 sm:-left-2 top-1/2 z-20 flex -translate-y-1/2">
            <button
              type="button"
              aria-label="Scroll gallery left"
              onClick={() => scrollByOffset(-320)}
              className="inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100"
            >
              ‹
            </button>
          </div>
          <div className="absolute right-2 sm:-right-2 top-1/2 z-20 flex -translate-y-1/2">
            <button
              type="button"
              aria-label="Scroll gallery right"
              onClick={() => scrollByOffset(320)}
              className="inline-flex h-9 w-9 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition hover:bg-slate-100"
            >
              ›
            </button>
          </div>

          <div
            ref={carouselRef}
            className="no-scrollbar mt-6 flex gap-5 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory"
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => setIsDragging(false)}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {galleryImages.map((item) => (
              <div
                key={item.url}
                className="snap-start min-w-[260px] sm:min-w-[300px] md:min-w-[340px] lg:min-w-[380px] flex-shrink-0 overflow-hidden rounded-3xl bg-white shadow-lg transition-transform duration-500 hover:-translate-y-1 hover:shadow-2xl"
              >
                <img
                  src={item.url}
                  alt={item.label}
                  className="h-[320px] w-full object-cover transition-transform duration-500 ease-out hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
