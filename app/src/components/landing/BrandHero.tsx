import type { MouseEvent } from "react";
import type { TranslationKey } from "../../data/translations";
import { brandAssets } from "../../config/assets";
import { ArrowDownIcon, PhoneIcon, WhatsAppIcon } from "../common/icons";

type BrandHeroProps = {
  displayPhone: string;
  phoneLink: string;
  t: (key: TranslationKey) => string;
  whatsappLink: string;
  onScrollToForm: (event: MouseEvent<HTMLAnchorElement>) => void;
};

const heroFeatures = [
  {
    icon: "✓",
    title: "featureExperts",
    description: "featureExpertsDescription",
  },
  {
    icon: "∞",
    title: "featureFlexible",
    description: "featureFlexibleDescription",
  },
  {
    icon: "◎",
    title: "featurePlan",
    description: "featurePlanDescription",
  },
] satisfies {
  icon: string;
  title: TranslationKey;
  description: TranslationKey;
}[];

export default function BrandHero({
  displayPhone,
  phoneLink,
  t,
  whatsappLink,
  onScrollToForm,
}: BrandHeroProps) {
  return (
    <section
      className="brand-hero mx-auto mb-6 w-[min(1180px,100%)] items-center rounded-[28px] p-[clamp(22px,3.4vw,40px)] text-white max-[720px]:mb-4 max-[720px]:gap-[18px] max-[720px]:rounded-[18px] max-[720px]:p-[18px] max-[460px]:p-4"
      aria-labelledby="brand-hero-title"
    >
      <div className="brand-copy">
        <div className="brand-identity mb-[22px] inline-flex items-center gap-3 max-[720px]:mb-3.5">
          <span
            className="inline-grid h-12 w-12 place-items-center overflow-hidden rounded-[14px] bg-white shadow-[0_14px_30px_rgba(14,52,24,0.22)] max-[720px]:h-[42px] max-[720px]:w-[42px] max-[720px]:rounded-xl"
            aria-hidden="true"
          >
            <img
              className="h-full w-full object-contain p-1.5"
              src={brandAssets.logoUrl}
              alt=""
              loading="eager"
            />
          </span>
          <span>
            <strong className="block text-[22px] font-black">
              {t("brandName")}
            </strong>
            <small className="mt-0.5 block text-xs font-bold text-white/70">
              {t("brandDomain")}
            </small>
          </span>
        </div>

        <p className="hero-badge mb-3.5 w-fit rounded-full border border-[#f4b23b80] bg-[var(--accent-soft)] px-[13px] py-[7px] text-[13px] font-black text-[var(--brand-deep)] max-[460px]:mb-2.5 max-[460px]:max-w-full max-[460px]:text-xs">
          {t("heroBadge")}
        </p>
        <h1
          id="brand-hero-title"
          className="m-0 max-w-[760px] text-[clamp(32px,4.35vw,50px)] font-black leading-[1.08] max-[720px]:text-[clamp(28px,9vw,40px)] max-[720px]:leading-[1.12] max-[460px]:text-[clamp(26px,9.5vw,34px)]"
        >
          {t("heroTitle")}
        </h1>
        <p className="hero-subtitle mt-[18px] max-w-[690px] text-[clamp(16px,1.65vw,22px)] leading-[1.75] text-white/85 max-[720px]:mt-3 max-[720px]:text-[15px] max-[720px]:leading-[1.65]">
          {t("heroSubtitle")}
        </p>

        <div className="hero-actions mt-7 flex flex-wrap gap-3 max-[720px]:mt-4 max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-[9px]">
          <a
            className="hero-whatsapp inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[10px] bg-[#3eb85c] px-[18px] py-3 text-[15px] font-black text-white shadow-[0_16px_30px_rgba(11,62,23,0.25)] transition hover:-translate-y-0.5 hover:bg-[#2fa84d] hover:shadow-[0_20px_36px_rgba(11,62,23,0.32)] focus-visible:-translate-y-0.5 focus-visible:bg-[#2fa84d] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#fff4d6e6] max-[720px]:w-full"
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
          >
            <WhatsAppIcon />
            <span className="hero-whatsapp-label">{t("whatsappCta")}</span>
            <span className="hero-whatsapp-label-mobile">
              {t("whatsappMobileCta")}
            </span>
          </a>
          <a
            className="hero-phone inline-flex min-h-12 items-center justify-center gap-2.5 rounded-[10px] border border-white/20 bg-white px-[18px] py-3 text-[15px] font-black text-[var(--brand-deep)] shadow-[0_12px_24px_rgba(14,52,24,0.12)] transition hover:-translate-y-0.5 hover:border-[#f4b23bad] hover:text-[var(--brand-dark)] hover:shadow-[0_18px_32px_rgba(14,52,24,0.22)] focus-visible:-translate-y-0.5 focus-visible:border-[#f4b23bad] focus-visible:text-[var(--brand-dark)] focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-[#fff4d6e6] max-[720px]:w-full"
            href={phoneLink}
          >
            <PhoneIcon />
            <span>{displayPhone}</span>
          </a>
        </div>
      </div>

      <div className="hero-features grid gap-3.5 max-[460px]:gap-2" aria-label={t("heroBadge")}>
        {heroFeatures.map((feature) => (
          <article
            className="grid min-h-[92px] grid-cols-[54px_minmax(0,1fr)] items-center gap-x-3.5 rounded-[18px] border border-white/20 bg-white/10 p-[18px] max-[720px]:min-h-16 max-[720px]:grid-cols-[40px_minmax(0,1fr)] max-[720px]:rounded-[14px] max-[720px]:px-3 max-[720px]:py-2.5"
            key={feature.title}
          >
            <span className="row-span-2 grid h-[54px] w-[54px] place-items-center rounded-2xl bg-white text-[25px] font-black text-[var(--brand-dark)] max-[720px]:h-10 max-[720px]:w-10 max-[720px]:rounded-xl max-[720px]:text-xl">
              {feature.icon}
            </span>
            <h2 className="m-0 text-lg font-black">{t(feature.title)}</h2>
            <p className="mt-1 mb-0 text-sm text-white/75 max-[720px]:hidden">
              {t(feature.description)}
            </p>
          </article>
        ))}
      </div>

      <a
        className="hero-scroll-link absolute bottom-[-19px] left-1/2 z-[2] inline-flex min-h-[38px] max-w-[calc(100%-32px)] -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-[#f4b23bc7] bg-white/95 py-[7px] pr-3 pl-4 text-center text-[13px] font-black text-[var(--brand-deep)] shadow-[0_12px_24px_rgba(14,52,24,0.2)] transition hover:bg-white hover:shadow-[0_16px_30px_rgba(14,52,24,0.26)] max-[720px]:bottom-[-17px] max-[720px]:min-h-9 max-[720px]:px-3 max-[720px]:text-xs"
        href="#consultation-form"
        onClick={onScrollToForm}
      >
        <span>{t("bookFormCta")}</span>
        <ArrowDownIcon />
      </a>
    </section>
  );
}
