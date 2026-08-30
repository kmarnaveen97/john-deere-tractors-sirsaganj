import type { Metadata } from "next";
import { BadgeCheck, IndianRupee, Landmark } from "lucide-react";
import { DealerCta, SiteFooter, SiteHeader } from "@/components/site-shell";
import styles from "@/app/section-page.module.css";

export const metadata: Metadata = {
  title: "ट्रैक्टर फाइनेंस जानकारी | S.B. Auto Sirsaganj",
  description: "ट्रैक्टर और कृषि मशीन finance की प्रक्रिया, संभावित दस्तावेज़, down payment, अवधि और approval की जरूरी जानकारी हिंदी में पढ़ें।",
};

const steps = [
  ["जरूरत समझें", "मॉडल, कुल कीमत, उपलब्ध अग्रिम राशि और खेती से अनुमानित cash flow पर S.B. Auto से चर्चा करें।"],
  ["Quotation लें", "चुने हुए tractor या implement का quotation और उपलब्ध finance scheme की शुरुआती जानकारी लें।"],
  ["आवेदन व जाँच", "Lender मांगे गए KYC, आय/कृषि और bank documents की जाँच करके पात्रता तय करता है।"],
  ["Sanction समझें", "Down payment, ब्याज, अवधि, instalment, insurance और सभी charges पढ़कर ही सहमति दें।"],
];

export default function FinancePage() {
  return (
    <main className={styles.page}>
      <SiteHeader active="finance" />
      <section className={styles.hero}><div className={styles.shell}><div className={styles.heroGrid}><div><p className={styles.kicker}>S.B. AUTO · FINANCE सहायता</p><h1>फाइनेंस को आसान<br />भाषा में समझें</h1></div><p className={styles.heroLead}>यह page आपको आवेदन से पहले तैयार होने में मदद करता है। अंतिम पात्रता, ब्याज दर, margin money, अवधि और approval संबंधित lender की शर्तों पर निर्भर हैं।</p></div><div className={styles.heroStats}><span><strong>4 चरण</strong><small>आवेदन की सामान्य प्रक्रिया</small></span><span><strong>KYC</strong><small>दस्तावेज़ जाँच</small></span><span><strong>स्पष्ट</strong><small>Charges और repayment</small></span></div></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>क्या finance हो सकता है?</p><h2>खेती की जरूरत के अनुसार विकल्प</h2></div><p>उपलब्ध scheme समय, product, applicant profile और lender के अनुसार बदल सकती है। S.B. Auto current options समझने में सहायता करेगा।</p></div><div className={styles.contentGrid}><article className={styles.infoCard}><IndianRupee size={30} /><h2>नया John Deere ट्रैक्टर</h2><p>चुने हुए मॉडल की कीमत में eligible loan amount, down payment और repayment अवधि applicant की profile और lender policy के आधार पर तय होती है।</p></article><article className={styles.infoCard}><Landmark size={30} /><h2>कृषि मशीन व इम्प्लीमेंट</h2><p>Scheme उपलब्ध होने पर compatible implement को tractor के साथ या अलग finance करने की संभावना पूछी जा सकती है। Approval lender करेगा।</p></article><article className={styles.infoCard}><BadgeCheck size={30} /><h2>योग्य पुराने उपकरण</h2><p>Used equipment finance केवल उपलब्ध scheme, valuation, age, condition और ownership documents के अनुसार हो सकता है; पहले शोरूम से पुष्टि करें।</p></article></div></div></section>

      <section className={styles.sectionAlt}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>आवेदन की प्रक्रिया</p><h2>चार साफ चरण</h2></div><p>किसी भी document पर हस्ताक्षर से पहले sanction letter और repayment schedule की प्रति लें।</p></div><ol className={styles.stepList}>{steps.map(([title, text], index) => <li key={title}><span>0{index + 1}</span><h3>{title}</h3><p>{text}</p></li>)}</ol></div></section>

      <section className={styles.section}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>संभावित दस्तावेज़</p><h2>पहले से क्या तैयार रखें</h2></div><p>Lender और applicant profile के अनुसार अतिरिक्त दस्तावेज़ माँगे जा सकते हैं। नीचे सामान्य तैयारी सूची है, final checklist नहीं।</p></div><ul className={styles.checkList}><li>आधार कार्ड और PAN या lender द्वारा स्वीकार अन्य KYC</li><li>पता प्रमाण और हाल की passport-size photos</li><li>Bank passbook या हाल की bank statement</li><li>भूमि, खेती, आय या व्यवसाय से संबंधित उपलब्ध प्रमाण</li><li>चुने हुए tractor/implement का dealer quotation</li><li>Co-applicant या guarantor documents, यदि lender माँगे</li></ul><p className={styles.notice}><strong>जरूरी:</strong> Interest rate, processing fee, insurance, documentation charge, late-payment charge और foreclosure नियम लिखित में समझें। S.B. Auto आवेदन coordination में मदद कर सकता है; loan sanction केवल lender करता है।</p></div></section>

      <section className={styles.sectionAlt}><div className={styles.shell}><div className={styles.heading}><div><p className={styles.kicker}>सामान्य सवाल</p><h2>आवेदन से पहले जानें</h2></div><p>सही monthly instalment केवल official sanction terms मिलने के बाद ही तय मानी जानी चाहिए।</p></div><div className={styles.faq}><article><h3>Down payment कितनी होगी?</h3><p>यह product price, lender policy, applicant eligibility और scheme पर निर्भर करती है। एक निश्चित प्रतिशत सभी ग्राहकों पर लागू नहीं होता।</p></article><article><h3>Loan कितने समय के लिए मिलेगा?</h3><p>Tenure lender तय करता है। लंबी अवधि से instalment कम हो सकती है, लेकिन कुल ब्याज बढ़ सकता है—दोनों आंकड़े compare करें।</p></article><article><h3>क्या approval निश्चित है?</h3><p>नहीं। Approval credit assessment, repayment capacity, documents, asset और lender rules पर निर्भर है। कोई भी verbal promise final sanction नहीं है।</p></article><article><h3>क्या early repayment कर सकते हैं?</h3><p>Prepayment या foreclosure की अनुमति और charge lender agreement में होता है। Sign करने से पहले यह clause जरूर पढ़ें।</p></article></div></div></section>
      <DealerCta title="अपनी budget range और finance जरूरत बताइए" subject="tractor या implement finance options" />
      <SiteFooter />
    </main>
  );
}
