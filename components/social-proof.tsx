import { BadgeCheck, ExternalLink, Quote } from "lucide-react";
import {
  activityPhotos,
  dealerStats,
  hasStats,
  hasTestimonials,
  testimonials,
  verifiedFacts,
} from "@/lib/social-proof";
import styles from "@/app/section-page.module.css";

/**
 * Renders only what is actually true today. The stats and testimonial blocks
 * stay hidden until real values are added to lib/social-proof.ts, so the page
 * never shows a placeholder or an invented number to a customer.
 */
export function SocialProof() {
  const stats = [
    { value: dealerStats.yearsInBusiness, label: "साल से सेवा में" },
    { value: dealerStats.farmersServed, label: "किसान जुड़े" },
    { value: dealerStats.villagesCovered, label: "गाँव तक पहुँच" },
  ].filter((item) => item.value !== null);

  return (
    <section className={styles.sectionAlt}>
      <div className={styles.shell}>
        <div className={styles.heading}>
          <div>
            <p className={styles.kicker}>हमारा काम</p>
            <h2>शोरूम से खेत तक</h2>
          </div>
          <p>डिलीवरी, प्रदर्शन और खेत में चलते ट्रैक्टर — हमारे अपने ग्राहकों और मशीनों की असली तस्वीरें।</p>
        </div>

        {hasStats ? (
          <div className={styles.proofGrid}>
            {stats.map((item) => (
              <article className={styles.proofCard} key={item.label}>
                <strong>{item.value}</strong>
                <small>{item.label}</small>
              </article>
            ))}
          </div>
        ) : null}

        <div className={styles.proofGrid}>
          {verifiedFacts.map((fact) => (
            <article className={styles.proofCard} key={fact.label}>
              <BadgeCheck size={26} color="#0b5f2a" />
              <small><strong style={{ fontSize: 15, display: "block", marginBottom: 4 }}>{fact.label}</strong>{fact.detail}</small>
            </article>
          ))}
        </div>

        <div className={styles.realPhotoGrid}>
          {activityPhotos.map((photo) => (
            <figure key={photo.src}>
              <img src={photo.src} alt={photo.caption} loading="lazy" />
              <figcaption>{photo.caption}</figcaption>
            </figure>
          ))}
        </div>

        {hasTestimonials ? (
          <div className={styles.quoteGrid}>
            {testimonials.map((item) => (
              <blockquote className={styles.quoteCard} key={`${item.name}-${item.village}`}>
                <Quote size={20} color="#ffde00" />
                <p>{item.quote}</p>
                <footer>
                  <cite>{item.name}</cite>
                  <span>{item.village}{item.model ? ` · ${item.model}` : ""}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        ) : null}

        <p className={styles.formNote}>
          और तस्वीरें एवं अपडेट हमारे Facebook पेज पर देखें —{" "}
          <a href="https://www.facebook.com/sbautosirsaganj/" target="_blank" rel="noreferrer">
            S.B. Auto Sirsaganj <ExternalLink size={12} />
          </a>{" "}
          ·{" "}
          <a href="https://www.facebook.com/johnsbautotrac/" target="_blank" rel="noreferrer">
            John S.B. Auto Trac <ExternalLink size={12} />
          </a>
        </p>
      </div>
    </section>
  );
}
