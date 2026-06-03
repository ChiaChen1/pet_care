"use client";

import { useEffect, useState } from "react";

const slides = [
  {
    src: "/assets/shop-reception-waiting.png",
    alt: "寵物洗護店接待櫃台與等待區",
    title: "接待與等候區",
    text: "預約制分流，讓初次到店也能慢慢熟悉環境。",
  },
  {
    src: "/assets/shop-bathing-area.png",
    alt: "寵物洗護店沐浴洗護作業區",
    title: "沐浴洗護區",
    text: "防滑檯面、低敏洗劑與獨立毛巾，維持乾淨節奏。",
  },
  {
    src: "/assets/shop-grooming-station.png",
    alt: "寵物洗護店美容修剪與吹整區",
    title: "美容吹整區",
    text: "工具分區消毒收納，修剪與吹整都保留舒緩空間。",
  },
];

export function ShopCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const showSlide = (index: number) => {
    setActiveIndex((index + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isPaused) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5200);

    return () => window.clearInterval(timerId);
  }, [isPaused]);

  return (
    <div
      className="relative min-h-full overflow-hidden rounded-lg bg-white shadow-soft"
      aria-label="店內環境輪播"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div
        className="flex h-full transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <figure
            className="relative aspect-[4/5] min-h-full flex-[0_0_100%] overflow-hidden sm:aspect-[16/10]"
            key={slide.title}
          >
            {/* eslint-disable-next-line @next/next/no-img-element -- Carousel slides use direct public assets to avoid Next image fill issues in transformed flex tracks. */}
            <img
              src={slide.src}
              alt={slide.alt}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <figcaption className="absolute bottom-[18px] left-[18px] right-[18px] rounded-lg border border-white/40 bg-ink/70 p-4 text-white backdrop-blur-md">
              <strong className="block text-lg leading-tight">{slide.title}</strong>
              <span className="mt-1 block text-sm text-white/80">{slide.text}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="absolute right-[18px] top-[18px] flex gap-2" aria-label="輪播控制">
        <button
          className="grid size-[42px] place-items-center rounded-full bg-white/90 text-2xl leading-none text-ink shadow-[0_8px_20px_rgba(38,52,53,.14)] transition hover:bg-mint-deep hover:text-white focus-visible:bg-mint-deep focus-visible:text-white focus-visible:outline-none"
          type="button"
          aria-label="上一張"
          onClick={() => showSlide(activeIndex - 1)}
        >
          ‹
        </button>
        <button
          className="grid size-[42px] place-items-center rounded-full bg-white/90 text-2xl leading-none text-ink shadow-[0_8px_20px_rgba(38,52,53,.14)] transition hover:bg-mint-deep hover:text-white focus-visible:bg-mint-deep focus-visible:text-white focus-visible:outline-none"
          type="button"
          aria-label="下一張"
          onClick={() => showSlide(activeIndex + 1)}
        >
          ›
        </button>
      </div>

      <div
        className="absolute left-[18px] top-[18px] flex gap-2 rounded-full bg-ink/40 p-3 backdrop-blur-md"
        role="tablist"
        aria-label="切換店內區域"
      >
        {slides.map((slide, index) => (
          <button
            className={`h-[9px] rounded-full transition-all ${
              index === activeIndex ? "w-[26px] bg-mint" : "w-[9px] bg-white/50"
            }`}
            key={slide.title}
            type="button"
            role="tab"
            aria-label={`顯示${slide.title}`}
            aria-selected={index === activeIndex}
            onClick={() => showSlide(index)}
          />
        ))}
      </div>
    </div>
  );
}
