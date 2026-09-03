"use client";

import { useState } from "react";
import { ArrowRight, MessageCircle, RotateCcw } from "lucide-react";
import {
  farmSizes,
  mainWorks,
  recommendTractors,
  recommendationReason,
  type FarmSize,
  type MainWork,
} from "@/lib/tractor-advisor";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";
import styles from "@/app/section-page.module.css";

export function TractorAdvisor() {
  const [size, setSize] = useState<FarmSize | null>(null);
  const [work, setWork] = useState<MainWork | null>(null);

  const ready = size !== null && work !== null;
  const results = ready ? recommendTractors(size, work) : [];

  return (
    <div className={styles.advisor}>
      <fieldset className={styles.advisorStep}>
        <legend><span>1</span> आपका खेत कितना बड़ा है?</legend>
        <div className={styles.advisorOptions}>
          {farmSizes.map((option) => (
            <button
              key={option.value}
              type="button"
              className={size === option.value ? styles.advisorActive : undefined}
              onClick={() => setSize(option.value)}
              aria-pressed={size === option.value}
            >
              <strong>{option.label}</strong>
              <small>{option.hint}</small>
            </button>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.advisorStep}>
        <legend><span>2</span> सबसे ज्यादा कौन सा काम लेंगे?</legend>
        <div className={styles.advisorOptions}>
          {mainWorks.map((option) => (
            <button
              key={option.value}
              type="button"
              className={work === option.value ? styles.advisorActive : undefined}
              onClick={() => setWork(option.value)}
              aria-pressed={work === option.value}
            >
              <strong>{option.label}</strong>
              <small>{option.hint}</small>
            </button>
          ))}
        </div>
      </fieldset>

      {ready ? (
        <div className={styles.advisorResult}>
          <div className={styles.advisorResultHead}>
            <div>
              <small>आपके लिए सुझाव</small>
              <strong>ये {results.length} मॉडल देखिए</strong>
            </div>
            <button type="button" onClick={() => { setSize(null); setWork(null); }}>
              <RotateCcw size={14} /> फिर से चुनें
            </button>
          </div>
          <p className={styles.advisorReason}>{recommendationReason(size, work)}</p>
          <div className={styles.seriesGrid}>
            {results.map((item) => (
              <a className={styles.seriesCard} href={`/products/${item.slug}`} key={item.slug}>
                <small>{item.specs[0][1]} · {item.specs[1][1]}</small>
                <strong>{item.name}</strong>
                <span>पूरी जानकारी<ArrowRight size={15} /></span>
              </a>
            ))}
          </div>
          <WhatsAppQueryLink
            className={styles.whatsappSubmit}
            subject="मेरे खेत के लिए सही ट्रैक्टर"
            interestDetails={[
              `खेत का आकार: ${farmSizes.find((item) => item.value === size)?.label}`,
              `मुख्य काम: ${mainWorks.find((item) => item.value === work)?.label}`,
              `सुझाए गए मॉडल: ${results.map((item) => item.name).join(", ")}`,
            ]}
          >
            <MessageCircle size={18} /> इन्हीं पर WhatsApp पर सलाह लें
          </WhatsAppQueryLink>
          <p className={styles.formNote}>
            यह केवल शुरुआती सुझाव है। मिट्टी, इम्प्लीमेंट और बजट देखकर अंतिम चुनाव शोरूम पर तय कीजिए।
          </p>
        </div>
      ) : (
        <p className={styles.advisorHint}>दोनों सवालों के जवाब चुनते ही सुझाव यहीं दिख जाएँगे।</p>
      )}
    </div>
  );
}
