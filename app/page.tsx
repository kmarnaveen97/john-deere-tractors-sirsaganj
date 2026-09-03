import {
  ArrowRight,
  BadgeCheck,
  Camera,
  CircleGauge,
  Clock3,
  ExternalLink,
  IndianRupee,
  MapPin,
  MessageCircle,
  ShieldCheck,
  Wrench,
} from "lucide-react";
import { implementGroups, precisionItems, seriesItems, tractorItems } from "@/lib/catalog";
import { districtName, serviceAreas } from "@/lib/service-area";
import { MobileDock } from "@/components/mobile-dock";
import { WhatsAppQueryLink } from "@/components/whatsapp-query-link";

const highlights = [
  {
    icon: ShieldCheck,
    title: "28 से 130 HP तक",
    text: "D, E, Speciality और 5M — चारों सीरीज़ के मौजूदा मॉडल एक ही जगह देखिए और तुलना कीजिए।",
  },
  {
    icon: Wrench,
    title: "पार्ट्स पहले जाँच लीजिए",
    text: "आने से पहले WhatsApp पर मॉडल और पार्ट का नाम भेजिए — स्टॉक की पुष्टि करके ही बुलाएँगे।",
  },
  {
    icon: IndianRupee,
    title: "EMI खुद जोड़िए",
    text: "कीमत, डाउन पेमेंट और अवधि डालकर मासिक किस्त तुरंत देखिए — किसी से पूछने की जरूरत नहीं।",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="S.B. Auto Sales and Services home">
          <img className="dealer-wordmark" src="/sb-auto-wordmark.svg" alt="" width="296" height="64" />
        </a>
        <nav aria-label="Primary navigation">
          <a href="/tractors">ट्रैक्टर</a>
          <a href="/implements">कृषि मशीनें</a>
          <a href="/precision-ag">Precision Ag</a>
          <a href="/finance">फाइनेंस</a>
          <a href="/service">सर्विस/पार्ट्स</a>
          <a href="/service-area">सेवा क्षेत्र</a>
          <a href="/tractor-emi-calculator">EMI</a>
          <a href="/dealer">S.B. Auto</a>
        </nav>
        <WhatsAppQueryLink className="header-call" subject="सामान्य enquiry">
          <MessageCircle size={16} />
          <span>WhatsApp Query</span>
        </WhatsAppQueryLink>
      </header>
      <WhatsAppQueryLink className="whatsapp-float" subject="सामान्य enquiry" aria-label="WhatsApp पर S.B. Auto को सामान्य enquiry भेजें"><MessageCircle size={21} /><span>WhatsApp Query</span></WhatsAppQueryLink>
      <MobileDock />

      <section className="hero" id="top">
        <div className="hero-image" aria-hidden="true" />
        <div className="hero-overlay" />
        <div className="hero-content page-shell">
          <div className="eyebrow reveal-one">
            <span className="eyebrow-dot" />
            JOHN DEERE TRACTORS · SALES · SERVICE · PARTS
          </div>
          <h1 className="dealer-hero-title reveal-two">
            S.B. AUTO
            <span>SALES &amp; SERVICES</span>
          </h1>
          <p className="dealer-tagline reveal-three">सिरसागंज का भरोसेमंद कृषि मशीनरी साथी</p>
          <p className="hero-lead reveal-three">
            सिरसागंज के शोरूम पर John Deere ट्रैक्टर और GreenSystem™ इम्प्लीमेंट देखिए।
            खरीद, फाइनेंस, असली पार्ट्स और सर्विस—पूरी मदद एक ही जगह।
          </p>
          <div className="hero-actions reveal-four">
            <WhatsAppQueryLink className="button button-primary" subject="सामान्य enquiry">
              <MessageCircle size={18} /> WhatsApp पर पूछें
            </WhatsAppQueryLink>
            <a className="button button-ghost" href="/tractors">
              ट्रैक्टर देखें <ArrowRight size={18} />
            </a>
          </div>
          <div className="hero-proof reveal-four">
            <span className="dealer-proof-mark" aria-hidden="true">SB</span>
            <p><strong>S.B. Auto · Sirsaganj</strong><br />स्थानीय बिक्री, सर्विस और पार्ट्स सहायता</p>
          </div>
        </div>
        <div className="hero-stat" aria-label="Service region">
          <MapPin size={20} />
          <span><strong>Etawah Road, Sirsaganj</strong>Firozabad · 283151</span>
        </div>
      </section>

      <section className="trust-bar" aria-label="Key benefits">
        <div className="page-shell trust-grid">
          <div><BadgeCheck /><span><strong>S.B. Auto Sirsaganj</strong>सेल्स एवं सर्विस सहायता</span></div>
          <div><Clock3 /><span><strong>फोन: 70885 01000</strong>सीधे शोरूम से बात करें</span></div>
          <div><CircleGauge /><span><strong>28–130 HP</strong>पूरी पावर रेंज</span></div>
        </div>
      </section>

      <section className="dealer-intro" aria-label="S.B. Auto Sales and Services परिचय">
        <div className="page-shell dealer-intro-grid">
          <span className="dealer-intro-monogram" aria-hidden="true">SB</span>
          <div className="dealer-intro-copy">
            <p>SIRSAGANJ · FIROZABAD</p>
            <h2>S.B. Auto Sales &amp; Service</h2>
            <span>John Deere ट्रैक्टर, कृषि मशीनें, फाइनेंस, पार्ट्स और सर्विस के लिए आपका स्थानीय केंद्र।</span>
          </div>
          <div className="dealer-intro-actions">
            <span><MapPin size={17} /><strong>Etawah Road, Sirsaganj</strong><small>Uttar Pradesh 283151</small></span>
            <a href="/dealer">शोरूम की पूरी जानकारी <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="page-directory-section" aria-label="वेबसाइट के मुख्य पेज">
        <div className="page-shell page-directory">
          <a href="/tractors"><strong>ट्रैक्टर</strong><span>मॉडल देखें <ArrowRight size={14} /></span></a>
          <a href="/implements"><strong>कृषि मशीनें</strong><span>मशीनें देखें <ArrowRight size={14} /></span></a>
          <a href="/precision-ag"><strong>Precision Ag</strong><span>समाधान देखें <ArrowRight size={14} /></span></a>
          <a href="/finance"><strong>फाइनेंस गाइड</strong><span>पूरी जानकारी <ArrowRight size={14} /></span></a>
          <a href="/service"><strong>सर्विस/पार्ट्स</strong><span>बुकिंग व enquiry <ArrowRight size={14} /></span></a>
          <a href="/dealer"><strong>S.B. Auto</strong><span>पता व संपर्क <ArrowRight size={14} /></span></a>
        </div>
      </section>

      <section className="models-section page-shell" id="models">
        <div className="section-heading">
          <div>
            <p className="kicker">S.B. AUTO · सभी ट्रैक्टर मॉडल</p>
            <h2>John Deere India की<br />पूरी ट्रैक्टर रेंज</h2>
          </div>
          <p className="section-copy">
            D Series, E Series, Speciality और 5M Series के सभी मौजूदा मॉडल।
            खेत, काम और इम्प्लीमेंट के अनुसार सही HP और ड्राइव चुनें।
          </p>
        </div>

        <div className="series-card-grid" aria-label="ट्रैक्टर सीरीज़">
          {seriesItems.map((series) => (
            <a className="series-card" href={`/products/${series.slug}`} key={series.slug}>
              <div><small>ट्रैक्टर सीरीज़</small><strong>{series.name}</strong></div>
              <span>{series.category}</span>
              <ArrowRight size={17} />
            </a>
          ))}
        </div>

        <div className="tractor-card-grid">
          {tractorItems.map((model) => (
            <article className="tractor-card" key={model.slug}>
              <a className="tractor-card-image" href={`/products/${model.slug}`} aria-label={`${model.name} की जानकारी देखें`}>
                <img
                  src={model.image}
                  alt={`${model.name} John Deere ट्रैक्टर`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <span>{model.category}</span>
              </a>
              <div className="tractor-card-body">
                <p>John Deere ट्रैक्टर</p>
                <h3><a href={`/products/${model.slug}`}>{model.name}</a></h3>
                <div className="tractor-specs">
                  <span><small>इंजन पावर</small><strong>{model.specs[0][1]}</strong></span>
                  <span><small>ड्राइव</small><strong>{model.specs[1][1]}</strong></span>
                </div>
                <a className="tractor-card-link" href={`/products/${model.slug}`}>
                  पूरी जानकारी देखें <ArrowRight size={15} />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="catalog-footer">
          <p>* मॉडल, ट्रांसमिशन, टायर और वेरिएंट की उपलब्धता बदल सकती है। स्थानीय स्टॉक के लिए शोरूम से पुष्टि करें।</p>
          <div className="catalog-actions">
            <a href="/tractors">सभी 19 मॉडल देखें <ArrowRight size={16} /></a>
            <WhatsAppQueryLink subject="John Deere ट्रैक्टर मॉडल, कीमत और उपलब्धता">WhatsApp पर कीमत पूछें <ArrowRight size={16} /></WhatsAppQueryLink>
          </div>
        </div>

        <figure className="range-field-image">
          <img
            src="/tractor-hero.webp"
            alt="खेत में काम करता John Deere ट्रैक्टर"
            loading="lazy"
          />
          <figcaption>
            <small>S.B. AUTO · SIRSAGANJ</small>
            <strong>खेत से सड़क तक,<br />हर काम के लिए सही ताक़त।</strong>
          </figcaption>
        </figure>
      </section>

      <section className="machines-section" id="machines">
        <div className="page-shell">
          <div className="section-heading machines-heading">
            <div>
              <p className="kicker light">S.B. AUTO · सभी कृषि मशीनें</p>
              <h2>बुवाई से कटाई तक<br />उपयोगी कृषि मशीनें</h2>
            </div>
            <p className="section-copy">
              John Deere GreenSystem™ की मौजूदा India catalogue रेंज—भूमि तैयारी,
              बुवाई, फसल देखभाल, कटाई और अवशेष प्रबंधन के अनुसार व्यवस्थित।
            </p>
          </div>

          <div className="machine-catalogue">
            {implementGroups.map((group, groupIndex) => (
              <section className="machine-category" key={group.category} aria-labelledby={`machine-category-${groupIndex}`}>
                <div className="machine-category-head">
                  <div>
                    <h3 id={`machine-category-${groupIndex}`}>{group.category}</h3>
                    <p>{group.english}</p>
                  </div>
                </div>
                <div className="machine-product-grid">
                  {group.items.map((item, itemIndex) => (
                    <a
                      className="machine-product-card"
                      href={`/products/${item.slug}`}
                      aria-label={`${item.hindiName ?? item.name} की पूरी जानकारी देखें`}
                      key={item.slug}
                    >
                        <span className="machine-product-image">
                          <img
                            src={item.image}
                            alt={`${item.hindiName ?? item.name} कृषि मशीन`}
                            loading="lazy"
                            decoding="async"
                          />
                          <span className="machine-product-number">
                            {String(groupIndex + 1).padStart(2, "0")}.{String(itemIndex + 1).padStart(2, "0")}
                          </span>
                          <span className="machine-product-brand">GREENSYSTEM™</span>
                        </span>
                        <span className="machine-product-copy">
                          <strong>{item.hindiName ?? item.name}</strong>
                          <small>{item.name}</small>
                          <span>पूरी जानकारी देखें <ArrowRight size={14} /></span>
                        </span>
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <div className="precision-panel">
            <div className="precision-title">
              <p>PRECISION AGRICULTURE</p>
              <h3>सटीक खेती की तकनीक</h3>
            </div>
            <div className="precision-list">
              {precisionItems.map((item) => (
                <a href={`/products/${item.slug}`} key={item.slug}>
                  <strong>{item.name}</strong>
                  <small>{item.category}</small>
                </a>
              ))}
            </div>
          </div>

          <div className="catalog-footer machines-footer">
            <p>* इम्प्लीमेंट आकार, HP compatibility और स्थानीय उपलब्धता के लिए S.B. Auto से संपर्क करें।</p>
            <a href="/implements">पूरी मशीन catalogue page <ArrowRight size={16} /></a>
          </div>
        </div>
      </section>

      <section className="gallery-section" id="gallery">
        <div className="page-shell">
          <div className="section-heading gallery-heading">
            <div>
              <p className="kicker">असली S.B. Auto तस्वीरें</p>
              <h2>शोरूम से खेत तक<br />हमारी अपनी झलकियाँ</h2>
            </div>
            <div className="gallery-side">
              <p className="section-copy">
                दिए गए आधिकारिक S.B. Auto Facebook pages से चुनी गई वास्तविक
                John Deere ट्रैक्टर, किसान और मशीनों की तस्वीरें।
              </p>
              <div className="facebook-links" aria-label="S.B. Auto के आधिकारिक Facebook pages">
                <a href="https://www.facebook.com/johnsbautotrac/" target="_blank" rel="noreferrer">
                  John Deere page <ExternalLink size={14} />
                </a>
                <a href="https://www.facebook.com/sbautosirsaganj/" target="_blank" rel="noreferrer">
                  Sirsaganj page <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </div>

          <div className="real-photo-grid">
            <a className="real-photo photo-showroom" href="https://www.facebook.com/photo/?fbid=1308791601273482&set=pb.100064279624046.-2207520000" target="_blank" rel="noreferrer">
              <img src="/sb-auto-showroom.jpg" alt="S.B. Auto की प्रदर्शनी में John Deere 5M ट्रैक्टर" loading="lazy" />
              <span><Camera size={15} /><small>वास्तविक फोटो</small><strong>John Deere 5M की शोरूम झलक</strong></span>
            </a>
            <a className="real-photo photo-field" href="https://www.facebook.com/photo/?fbid=467351115417539&set=a.467351105417540" target="_blank" rel="noreferrer">
              <img src="/sb-auto-field.jpg" alt="खेत में काम करता John Deere 5045 D ट्रैक्टर" loading="lazy" />
              <span><Camera size={15} /><small>खेत की तस्वीर</small><strong>John Deere 5045 D</strong></span>
            </a>
            <a className="real-photo photo-gathering" href="https://www.facebook.com/photo/?fbid=1492502369235418&set=pb.100054270079951.-2207520000" target="_blank" rel="noreferrer">
              <img src="/sb-auto-gathering.jpg" alt="स्थानीय किसानों के बीच प्रदर्शित John Deere ट्रैक्टर" loading="lazy" />
              <span><Camera size={15} /><small>स्थानीय प्रदर्शन</small><strong>किसानों के बीच John Deere</strong></span>
            </a>
            <a className="real-photo photo-loader" href="https://www.facebook.com/photo/?fbid=1492502389235416&set=pb.100054270079951.-2207520000" target="_blank" rel="noreferrer">
              <img src="/sb-auto-loader.jpg" alt="Loader attachment के साथ John Deere ट्रैक्टर" loading="lazy" />
              <span><Camera size={15} /><small>मशीन की झलक</small><strong>Loader setup के साथ John Deere</strong></span>
            </a>
          </div>
        </div>
      </section>

      <section className="support-section" id="support">
        <div className="page-shell support-layout">
          <div className="support-intro">
            <p className="kicker light">S.B. AUTO · सेवा सहायता</p>
            <h2>खेती के हर मौसम में<br />आपके साथ।</h2>
            <p>
              खरीद से लेकर नियमित रखरखाव तक, सही सलाह आपको बेहतर उत्पादकता
              और कम रुकावट के साथ काम करने में मदद करती है।
            </p>
            <a className="text-link" href="/service">सर्विस बुक करें / पार्ट्स पूछें <ArrowRight size={18} /></a>
          </div>
          <div className="highlight-list">
            {highlights.map(({ icon: Icon, title, text }) => (
              <article key={title}>
                <Icon />
                <div><h3>{title}</h3><p>{text}</p></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="finance-section page-shell" id="finance">
        <div className="finance-card">
          <div className="finance-art" aria-hidden="true">
            <IndianRupee />
            <span>आसान<br />फाइनेंस</span>
          </div>
          <div className="finance-copy">
            <p className="kicker">John Deere Financial</p>
            <h2>बजट के अनुरूप<br />खरीद की शुरुआत करें</h2>
            <p>ट्रैक्टर, इम्प्लीमेंट और योग्य पुराने उपकरणों के लिए उपलब्ध फाइनेंस विकल्पों की जानकारी पाएँ।</p>
            <a className="button button-dark" href="/finance">
              वेबसाइट पर फाइनेंस समझें <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="page-shell contact-grid">
          <div>
            <p className="kicker light">S.B. AUTO से संपर्क करें</p>
            <h2>S.B. Auto के साथ<br />सही ट्रैक्टर चुनें</h2>
          </div>
          <div className="contact-actions">
            <p>मॉडल, कीमत, फाइनेंस, इम्प्लीमेंट या सर्विस की जानकारी के लिए सीधे S.B. Auto Sales &amp; Service से संपर्क करें।</p>
            <div className="contact-details">
              <div className="contact-detail">
                <MapPin size={18} />
                <span><strong>शोरूम</strong>Etawah Road, Sirsaganj, Firozabad, Uttar Pradesh 283151</span>
              </div>
              <div className="contact-detail">
                <MessageCircle size={18} />
                <span><strong>WhatsApp enquiries</strong>+91 70885 01000</span>
              </div>
            </div>
            <WhatsAppQueryLink className="button button-primary" subject="सामान्य enquiry">
              <MessageCircle size={18} /> WhatsApp Query भेजें
            </WhatsAppQueryLink>
            <a className="dealer-link" href="https://www.google.com/maps/search/?api=1&query=S%20B%20Auto%20Sales%20%26%20Service%20Etawah%20Road%20Sirsaganj%20283151" target="_blank" rel="noreferrer">
              Google Maps पर दिशा देखें <ArrowRight size={16} />
            </a>
          </div>
          <div className="dealer-map">
            <iframe
              title="S.B. Auto Sales & Service, Sirsaganj का नक्शा"
              src="https://www.google.com/maps?q=S.B.%20Auto%20Sales%20%26%20Service%2C%20Etawah%20Road%2C%20Sirsaganj%2C%20Firozabad%2C%20Uttar%20Pradesh%20283151&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <div className="map-caption">
              <span><MapPin size={18} /><strong>S.B. Auto Sales &amp; Service</strong>Etawah Road, Sirsaganj, Firozabad, Uttar Pradesh 283151</span>
              <a href="https://www.google.com/maps/search/?api=1&query=S%20B%20Auto%20Sales%20%26%20Service%20Etawah%20Road%20Sirsaganj%20Firozabad%20283151" target="_blank" rel="noreferrer">
                पूरा नक्शा खोलें <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="page-shell footer-grid">
          <a className="brand footer-brand" href="#top" aria-label="S.B. Auto Sales and Services home">
            <img className="dealer-wordmark" src="/sb-auto-wordmark.svg" alt="" width="296" height="64" />
          </a>
          <p>Etawah Road, Sirsaganj, Firozabad, Uttar Pradesh 283151<br />Phone: +91 70885 01000</p>
          <p className="legal">John Deere ट्रैक्टर एवं इम्प्लीमेंट के लिए स्थानीय सेल्स और सर्विस सहायता। मॉडल, कीमत और उपलब्धता के लिए शोरूम से पुष्टि करें।</p>
          <div className="footer-areas">
            <strong>{districtName} ज़िले में हमारा अधिकृत सेवा क्षेत्र</strong>
            <div>
              {serviceAreas.map((area) => (
                <a href={`/${area.slug}`} key={area.slug}>{area.hindiName}</a>
              ))}
              <a href="/service-area">पूरा सेवा क्षेत्र →</a>
              <a href="/tractor-emi-calculator">EMI कैलकुलेटर</a>
              <a href="/purana-tractor-exchange">पुराना ट्रैक्टर एक्सचेंज</a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
