import Image from "next/image";
import { BookingForm } from "@/components/BookingForm";
import { ShopCarousel } from "@/components/ShopCarousel";

const navItems = [
  ["服務項目", "#services"],
  ["洗護流程", "#process"],
  ["店內特色", "#about"],
  ["門店位置", "#location"],
  ["預約資訊", "#booking"],
] as const;

const services = [
  {
    icon: "泡",
    title: "基礎沐浴",
    text: "含梳毛、耳朵清潔、指甲修剪、肛門腺與低溫吹整。",
    price: "NT$ 600 起",
  },
  {
    icon: "剪",
    title: "美容造型",
    text: "依品種與生活習慣設計修剪，兼顧美感與居家照護。",
    price: "NT$ 1,200 起",
  },
  {
    icon: "護",
    title: "皮毛護理",
    text: "針對乾燥、打結、換毛期或敏感肌，搭配深層護毛流程。",
    price: "NT$ 400 加購",
  },
  {
    icon: "車",
    title: "接送服務",
    text: "鄰近區域可預約接送，回程附當日洗護紀錄與照片。",
    price: "NT$ 150 起",
  },
];

const steps = [
  ["到店評估", "確認皮膚、毛結、指甲與情緒狀態，建立今日照護重點。"],
  ["溫和清潔", "選用合適洗劑與水溫，避開眼鼻耳等敏感部位。"],
  ["吹整修剪", "低溫分段吹整，依需求完成腳底、腹部或全身造型。"],
  ["回報交接", "提供照片、照護建議與下次洗護間隔，讓居家照顧更輕鬆。"],
] as const;

const contactItems = [
  ["電", "電話", "02-2345-8899"],
  ["訊", "LINE", "@mori-grooming"],
  ["地", "地址", "新北市永和區永和路一段 2 號，靠近永和路與永貞路路口。"],
] as const;

function ButtonLink({
  children,
  href,
  variant = "primary",
  external = false,
}: {
  children: React.ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  external?: boolean;
}) {
  const classes =
    variant === "primary"
      ? "bg-coral text-white shadow-[0_12px_24px_rgba(240,122,103,.24)]"
      : "bg-white text-ink shadow-[inset_0_0_0_1px_#d9e9e4]";

  return (
    <a
      className={`inline-flex min-h-[46px] items-center justify-center rounded-full px-5 font-extrabold ${classes}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener" : undefined}
    >
      {children}
    </a>
  );
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex min-h-[34px] items-center rounded-full border border-mint-deep/20 bg-white/70 px-3.5 text-sm font-extrabold text-mint-deep">
      {children}
    </span>
  );
}

function SectionHeading({
  title,
  text,
}: {
  title: string;
  text: string;
}) {
  return (
    <div className="mb-[34px] flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
      <h2 className="max-w-xl text-[clamp(30px,4vw,46px)] font-extrabold leading-[1.15] tracking-normal">
        {title}
      </h2>
      <p className="max-w-[420px] text-muted">{text}</p>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-20 border-b border-line/70 bg-paper/90 backdrop-blur-2xl">
        <nav
          className="mx-auto flex min-h-[72px] w-[min(1160px,calc(100%-32px))] flex-col items-start justify-between gap-4 py-4 lg:flex-row lg:items-center lg:gap-6 lg:py-0"
          aria-label="主選單"
        >
          <a
            className="inline-flex items-center gap-3 whitespace-nowrap font-extrabold"
            href="#top"
            aria-label="毛日和寵物洗護首頁"
          >
            <span
              className="brand-mark grid size-[42px] place-items-center rounded-full shadow-[0_10px_24px_rgba(43,141,131,.22)]"
              aria-hidden="true"
            />
            <span>毛日和寵物洗護</span>
          </a>
          <div className="flex w-full items-center gap-4 overflow-x-auto pb-1 text-sm text-muted sm:gap-[22px] sm:text-[15px] lg:w-auto">
            {navItems.map(([label, href]) => (
              <a className="whitespace-nowrap transition hover:text-mint-deep" href={href} key={href}>
                {label}
              </a>
            ))}
          </div>
          <div className="hidden sm:block">
            <ButtonLink href="#booking">立即預約</ButtonLink>
          </div>
        </nav>
      </header>

      <main id="top">
        <section
          className="hero-bg relative grid min-h-[760px] items-center overflow-hidden bg-[#e9faf6] lg:min-h-[calc(100vh-72px)]"
          aria-label="毛日和寵物洗護主視覺"
        >
          <div className="relative mx-auto w-[min(1160px,calc(100%-32px))] py-16 lg:py-[76px_104px]">
            <div className="w-[min(580px,100%)] pt-2">
              <Eyebrow>犬貓友善 · 預約制洗護美容</Eyebrow>
              <h1 className="mb-5 mt-4 max-w-[10em] text-[clamp(42px,7vw,76px)] font-extrabold leading-[1.05] tracking-normal">
                把洗澡變成毛孩放鬆的一天
              </h1>
              <p className="mb-[30px] max-w-[540px] text-[clamp(18px,2vw,22px)] text-[#435052]">
                從皮膚狀況檢查、低敏沐浴到吹整修剪，讓每一次洗護都乾淨、舒服，也讓你安心看見毛孩被溫柔照顧。
              </p>
              <div className="mb-[34px] flex flex-wrap gap-3.5">
                <ButtonLink href="#booking">預約洗護</ButtonLink>
                <ButtonLink href="#services" variant="secondary">
                  查看價目
                </ButtonLink>
              </div>
              <div
                className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:[grid-template-columns:repeat(3,minmax(0,150px))]"
                aria-label="服務亮點"
              >
                {[
                  ["1 對 1", "專人照護"],
                  ["低敏", "洗劑可選"],
                  ["犬貓", "分區安置"],
                ].map(([value, label], index) => (
                  <div
                    className={`rounded-lg border border-line/80 bg-white/75 p-4 ${
                      index === 2 ? "col-span-2 sm:col-span-1" : ""
                    }`}
                    key={label}
                  >
                    <strong className="block text-[22px] leading-tight">{value}</strong>
                    <span className="text-[13px] text-muted">{label}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-[86px]" id="services">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHeading
              title="從日常清潔到造型修剪，都有細緻照顧"
              text="依照毛孩體型、毛量、皮膚狀況與個性安排服務時間，不趕場、不共用毛巾。"
            />
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              {services.map((service, index) => (
                <article
                  className="min-h-[260px] rounded-lg border border-line bg-gradient-to-b from-white to-[#f9fffd] p-6"
                  key={service.title}
                >
                  <div
                    className={`mb-[18px] grid size-12 place-items-center rounded-full text-2xl text-white ${
                      index === 1 || index === 3 ? "bg-coral" : "bg-mint-deep"
                    }`}
                    aria-hidden="true"
                  >
                    {service.icon}
                  </div>
                  <h3 className="mb-2.5 text-[22px] font-extrabold leading-tight">{service.title}</h3>
                  <p className="mb-[18px] text-muted">{service.text}</p>
                  <span className="font-black text-mint-deep">{service.price}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-cloud py-16 lg:py-[86px]" id="process">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHeading
              title="透明流程，讓毛孩知道下一步會發生什麼"
              text="我們先安撫再進行洗護，遇到緊張或高齡毛孩會調整節奏，必要時主動與飼主討論。"
            />
            <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-4">
              {steps.map(([title, text], index) => (
                <article
                  className="rounded-lg border-l-4 border-mint bg-white p-6 shadow-[0_10px_28px_rgba(43,141,131,.08)]"
                  key={title}
                >
                  <span className="mb-5 block text-sm font-black text-coral">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mb-2 text-xl font-extrabold">{title}</h3>
                  <p className="text-muted">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-[86px]" id="about">
          <div className="mx-auto grid w-[min(1160px,calc(100%-32px))] grid-cols-1 items-stretch gap-7 lg:grid-cols-[.82fr_1.18fr]">
            <div className="feature-bg rounded-lg p-[clamp(28px,5vw,48px)] text-white shadow-soft">
              <Eyebrow>為敏感與膽小毛孩設計</Eyebrow>
              <h2 className="mt-4 max-w-[540px] text-[clamp(30px,4vw,48px)] font-extrabold leading-[1.15]">
                安靜、明亮、乾淨的洗護空間
              </h2>
              <p className="mt-4 max-w-xl text-lg text-white/85">
                店內採預約制控量，犬貓分區等待，工具每次消毒，讓毛孩少一點壓力，也讓照護品質更穩定。
              </p>
              <ul className="mt-7 grid list-none gap-3.5 p-0">
                {[
                  "獨立毛巾與消毒後工具組",
                  "高齡犬貓可預約舒緩慢洗時段",
                  "完成後提供梳毛與皮膚觀察建議",
                ].map((item) => (
                  <li className="flex items-start gap-3" key={item}>
                    <span className="grid size-[26px] flex-none place-items-center rounded-full bg-mint font-black text-ink">
                      ✓
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <ShopCarousel />
          </div>
        </section>

        <section className="bg-cloud py-16 lg:py-[86px]" id="location">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHeading
              title="永和路一段的可愛小據點"
              text="照著你提供的地圖標記，我們把店放在永和路一段 2 號的位置，靠近永和路與永貞路路口。"
            />
            <div className="grid grid-cols-1 items-stretch gap-7 lg:grid-cols-[1.02fr_.98fr]">
              <div className="relative min-h-[360px] overflow-hidden rounded-lg border border-line bg-[#fffdf6] shadow-panel lg:min-h-[430px]">
                <Image
                  src="/assets/yonghe-location-map.png"
                  alt="毛日和寵物洗護位於新北市永和區永和路一段2號，鄰近永和路一段、永貞路、永貞路249巷與好鄰居麵食館的可愛寵物店風格地圖"
                  fill
                  sizes="(max-width: 920px) 100vw, 51vw"
                  className="object-cover"
                />
              </div>
              <aside className="flex flex-col justify-center rounded-lg border border-line bg-white p-[clamp(28px,4vw,42px)] shadow-panel">
                <Eyebrow>門店位置</Eyebrow>
                <h3 className="mb-3 mt-4 text-[clamp(26px,3vw,36px)] font-extrabold leading-tight">
                  毛日和寵物洗護
                </h3>
                <p className="mb-5 text-xl font-black text-mint-deep">新北市永和區永和路一段 2 號</p>
                <ul className="mb-6 grid list-none gap-3 p-0 text-muted">
                  {[
                    "地圖標記已放在你截圖中藍點旁的店面位置。",
                    "鄰近永和路一段、永貞路與永貞路 249 巷交會一帶。",
                    "預約到店前可先用 LINE 傳毛孩照片，方便我們安排洗護時間。",
                  ].map((item) => (
                    <li className="flex items-start gap-2.5" key={item}>
                      <span className="mt-[.58em] size-2.5 flex-none rounded-full bg-coral" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <ButtonLink
                  href="https://www.google.com/maps/search/?api=1&query=%E6%96%B0%E5%8C%97%E5%B8%82%E6%B0%B8%E5%92%8C%E5%8D%80%E6%B0%B8%E5%92%8C%E8%B7%AF%E4%B8%80%E6%AE%B52%E8%99%9F"
                  external
                >
                  在 Google 地圖開啟
                </ButtonLink>
              </aside>
            </div>
          </div>
        </section>

        <section className="bg-white py-16 lg:py-[86px]" id="booking">
          <div className="mx-auto w-[min(1160px,calc(100%-32px))]">
            <SectionHeading
              title="預約前先告訴我們毛孩的小習慣"
              text="填寫後我們會在營業時間內回覆，確認服務項目、預估時間與實際報價。"
            />
            <div className="grid grid-cols-1 items-start gap-7 lg:grid-cols-[.9fr_1.1fr]">
              <aside className="rounded-lg border border-line bg-gradient-to-b from-white to-cloud p-[30px] shadow-panel">
                {contactItems.map(([symbol, title, text]) => (
                  <div
                    className="grid grid-cols-[42px_1fr] gap-3.5 border-b border-line py-[18px] last:border-b-0"
                    key={title}
                  >
                    <span className="grid size-[42px] place-items-center rounded-full bg-mint-deep text-white">
                      {symbol}
                    </span>
                    <div>
                      <strong className="mb-0.5 block">{title}</strong>
                      <span className="text-muted">{text}</span>
                    </div>
                  </div>
                ))}
              </aside>
              <BookingForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-[34px] text-white/80">
        <div className="mx-auto flex w-[min(1160px,calc(100%-32px))] flex-wrap justify-between gap-5">
          <strong>毛日和寵物洗護</strong>
          <span>專業洗護、美容修剪、皮毛照護與預約接送</span>
        </div>
      </footer>
    </>
  );
}
