"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { PiX } from "react-icons/pi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

type Organization = { name: string; logo: string; className?: string };

const featured: Organization[] = [
  { name: "TEDCO", logo: "/tedco.png" },
  { name: "Pava Center", logo: "/pava.png" },
  { name: "Howard University and PNC National Center for Entrepreneurship", logo: "/howard_pnc.png" },
  { name: "Spark Baltimore", logo: "/spark_baltimore.png" },
  { name: "Jobberman", logo: "/jobberman.png" },
  { name: "PluralCode", logo: "/pluralcode.png" },
];

const trustedBy: Organization[] = [
  { name: "iBraid", logo: "/ibraid.avif", className: "is-ibraid" },
  { name: "GFG Coaching", logo: "/gfg.png", className: "is-gfg" },
  { name: "Props", logo: "/props-logo-20261006.png" },
];

export function TopCredibilityRail() {
  const customerRow = useRef<HTMLDivElement>(null);
  const [credibilityDismissed, setCredibilityDismissed] = useState(false);

  useEffect(() => {
    const row = customerRow.current;
    const hero = document.querySelector<HTMLElement>(".product-hero");
    if (!row || !hero) return;

    gsap.registerPlugin(ScrollTrigger);
    const context = gsap.context(() => {
      gsap.set(row, { overflow: "hidden" });
      gsap.to(row, {
        autoAlpha: 0,
        height: 0,
        paddingTop: 0,
        borderTopWidth: 0,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top-=40",
          end: "top top-=140",
          scrub: 0.55,
        },
      });
    }, row);

    return () => context.revert();
  }, []);

  return (
    <section
      className={`product-top-credibility${credibilityDismissed ? " is-dismissed" : ""}`}
      aria-label="Featured partners and backers"
    >
      <div className="product-top-credibility-inner">
        <div className="product-top-credibility-row">
          <p>Backed &amp; trusted by</p>
          <div className="product-top-credibility-marquee">
            <div className="product-top-credibility-track">
              {[0, 1].map((copy) => (
                <div
                  className="product-top-credibility-logos"
                  aria-hidden={copy === 1}
                  key={copy}
                >
                  {featured.map((item) => (
                    <span
                      className={`product-top-credibility-logo ${item.className ?? ""}`}
                      key={`${copy}-${item.name}`}
                    >
                      <Image src={item.logo} alt={item.name} width={160} height={56} priority />
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <button
            type="button"
            className="product-top-credibility-close"
            aria-label="Hide partner and customer organizations until reload"
            onClick={() => setCredibilityDismissed(true)}
          >
            <PiX aria-hidden="true" />
          </button>
        </div>

        <div ref={customerRow} className="product-top-credibility-row product-top-customer-row">
          <p>Customers &amp; strategic partners</p>
          <div className="product-top-customer-logos">
            {trustedBy.map((item) => (
              <span
                className={`product-top-credibility-logo ${item.className ?? ""}`}
                key={item.name}
              >
                <Image src={item.logo} alt={item.name} width={150} height={56} priority />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
