import {
  Lightbulb,
  Network,
  PlugZap,
  Siren,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export const brand = {
  name: "VG EL AB",
  displayName: "Västergård El",
  tagline: "Din Elektriker!",
  phone: "+46 73-531 22 47",
  phoneHref: "+46735312247",
  email: "info@vgel.se",
  orgNr: "559560-6376",
  site: "www.vastergardel.se",
  url: "https://vastergardel.se",
  address: {
    street: "Söndagsgatan 7",
    postal: "256 64",
    city: "Helsingborg",
    region: "Skåne",
    country: "SE",
  },
  areas: ["Helsingborg", "Landskrona", "Malmö", "Skåne"],
  servicesTop: ["Elinstallation", "Elservice", "Nätverk"],
  social: {
    facebook:
      "https://www.facebook.com/people/V%C3%A4sterg%C3%A5rd-El-AB/61587689886333/",
    instagram: "https://www.instagram.com/vastergard_el/",
    // Lämnas tom tills företaget har en LinkedIn-sida – tomma länkar visas inte.
    linkedin: "",
  },
  // Länk till företagets profil på Google (används för "Lämna omdöme").
  googleProfileUrl:
    "https://www.google.com/maps/place/?q=place_id:ChIJdTJZVPMzUkYRIVA613lwjAM",
  // Direktlänk som öppnar Googles formulär för att skriva ett omdöme.
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJdTJZVPMzUkYRIVA613lwjAM",
};

export type ServiceFaq = { q: string; a: string };

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  short: string;
  metaTitle: string;
  metaDescription: string;
  hero: string;
  intro: string[];
  bullets: string[];
  process: { title: string; text: string }[];
  faq: ServiceFaq[];
};

export const services: Service[] = [
  {
    slug: "elinstallation",
    title: "Elinstallation",
    icon: PlugZap,
    short: "Installation i nybygge och renovering – säkert och snyggt.",
    metaTitle: "Elinstallation i Helsingborg – nybygge och renovering",
    metaDescription:
      "Elinstallation i Helsingborg och Skåne. Vi installerar el i nybygge, renovering och tillbyggnad – säkert, fackmässigt och med tydlig kommunikation. Begär offert.",
    hero: "Trygg elinstallation i Helsingborg och Skåne – från nybygge till renovering.",
    intro: [
      "Behöver du ny el, flytta uttag eller bygga ut elen i hemmet? Vi planerar och utför elinstallationer så att de är säkra, funktionella och anpassade efter hur du faktiskt använder rummen.",
      "Vi tar hand om både mindre jobb och större projekt, för privatpersoner och företag. Du får en tydlig genomgång av vad som ska göras och en offert innan arbetet startar.",
    ],
    bullets: [
      "Elinstallation i villa, lägenhet och lokal",
      "Nybygge, renovering och tillbyggnad",
      "Uttag, strömbrytare och elcentraler",
      "Anslutning av vitvaror och utrustning",
      "Kontroll och dokumentation efter utfört arbete",
    ],
    process: [
      {
        title: "Kontakt och behov",
        text: "Vi pratar igenom vad du behöver, tittar på förutsättningarna och svarar på dina frågor.",
      },
      {
        title: "Offert och planering",
        text: "Du får en skriftlig offert med vad som ingår. Vi planerar tid och utförande så att det passar dig.",
      },
      {
        title: "Utförande",
        text: "Vi utför installationen fackmässigt och håller dig uppdaterad under arbetets gång.",
      },
      {
        title: "Kontroll och överlämning",
        text: "Vi kontrollerar installationen, rensar efter oss och går igenom resultatet med dig.",
      },
    ],
    faq: [
      {
        q: "Kan ni hjälpa till vid renovering där elen redan finns?",
        a: "Ja. Vi går igenom den befintliga installationen och föreslår vad som behöver bytas eller kompletteras innan vi sätter igång.",
      },
      {
        q: "Tar ni mindre jobb, som att byta uttag?",
        a: "Ja, vi hjälper till med både små och stora eljobb. Ring eller skicka en offertförfrågan med en kort beskrivning så återkommer vi.",
      },
      {
        q: "Lämnar ni dokumentation efter arbetet?",
        a: "Ja, efter installationen går vi igenom vad som är gjort. Kontakta oss för att höra vilken dokumentation som är relevant för just ditt projekt.",
      },
    ],
  },
  {
    slug: "felsokning",
    title: "Felsökning",
    icon: Wrench,
    short: "Snabb felsökning och åtgärd av elfel.",
    metaTitle: "Felsökning av elfel i Helsingborg – snabb hjälp",
    metaDescription:
      "Elfel som inte går att lösa själv? Vi felsöker och åtgärdar elfel i Helsingborg och Skåne – strömlöst, säkringar som löser ut och jordfelsbrytare. Ring oss.",
    hero: "Snabb felsökning av elfel i Helsingborg – vi hittar orsaken och åtgärdar den.",
    intro: [
      "Har strömmen försvunnit, går säkringen gång på gång eller fungerar inte jordfelsbrytaren som den ska? Vi felsöker systematiskt och hjälper dig att både lösa felet och förebygga att det händer igen.",
      "Vi felsöker i villor, lägenheter, företagslokaler och fastigheter i Helsingborg med omnejd.",
    ],
    bullets: [
      "Strömlöst i delar av bostaden",
      "Säkringar som löser ut upprepade gånger",
      "Fel på jordfelsbrytare",
      "Fel i uttag, brytare och belysning",
      "Felsökning inför renovering eller inflyttning",
    ],
    process: [
      {
        title: "Berätta vad som händer",
        text: "Ring eller skicka en beskrivning av felet. Ju mer du berättar, desto snabbare kan vi förbereda oss.",
      },
      {
        title: "Felsökning på plats",
        text: "Vi mäter och kontrollerar systematiskt för att hitta orsaken – inte bara symtomen.",
      },
      {
        title: "Åtgärd",
        text: "När felet är identifierat går vi igenom vad som behöver göras och vilken kostnad det innebär.",
      },
      {
        title: "Kontroll",
        text: "Vi kontrollerar att allt fungerar som det ska innan vi lämnar jobbet.",
      },
    ],
    faq: [
      {
        q: "Vad kan jag göra innan elektrikern kommer?",
        a: "Kontrollera om jordfelsbrytaren har löst ut och försök återställa den en gång. Koppla bort misstänkta apparater. Vid lukt av bränt, rök eller värme – stäng av strömmen om det går och ring 112 vid brand.",
      },
      {
        q: "Kan ni komma akut?",
        a: "Vi har jour 24/7. Ring oss så bedömer vi felet och berättar hur snabbt vi kan vara på plats.",
      },
      {
        q: "Varför löser jordfelsbrytaren ut?",
        a: "Det kan bero på ett fel i en apparat, fukt i en installation eller ett jordfel. Vi felsöker för att hitta orsaken innan vi byter ut något.",
      },
    ],
  },
  {
    slug: "belysning",
    title: "Belysning",
    icon: Lightbulb,
    short: "Planering och installation av modern belysning.",
    metaTitle: "Belysning och ljusinstallation i Helsingborg",
    metaDescription:
      "Planering och installation av belysning i Helsingborg. Spotlights, pendlar, dimmer och utomhusbelysning – vi hjälper dig från idé till färdigt resultat.",
    hero: "Belysning som lyfter hemmet – planering och installation i Helsingborg.",
    intro: [
      "Rätt belysning gör stor skillnad för både trivsel och funktion. Vi hjälper dig att planera placering, välja dimmer och installera allt från spotlights till utomhusbelysning.",
      "Vi arbetar med både nya installationer och byte av befintlig belysning, i hem, företag och utemiljöer.",
    ],
    bullets: [
      "Spotlights och infälld belysning",
      "Pendlar, plafonder och ljusslingor",
      "Dimmer och styrning",
      "Utomhus- och fasadbelysning",
      "Byte till energieffektiv LED",
    ],
    process: [
      {
        title: "Idé och behov",
        text: "Vi går igenom rummen, önskemål och förutsättningar – och vad som är praktiskt genomförbart.",
      },
      {
        title: "Förslag och offert",
        text: "Du får ett förslag på lösning och en offert med vad som ingår.",
      },
      {
        title: "Installation",
        text: "Vi installerar belysning och styrning med fokus på ett rent och genomtänkt resultat.",
      },
      {
        title: "Genomgång",
        text: "Vi visar hur dimmer och styrning fungerar och kontrollerar att allt lirar som det ska.",
      },
    ],
    faq: [
      {
        q: "Kan ni hjälpa till att välja belysning?",
        a: "Ja. Vi kan ge råd om placering, armaturer och ljuskällor utifrån rummets användning och din budget.",
      },
      {
        q: "Kan ni installera belysning i befintligt tak?",
        a: "Ofta går det bra. Vi tittar på takets konstruktion och befintlig el innan vi föreslår en lösning.",
      },
      {
        q: "Fungerar dimmer med LED?",
        a: "Ja, men dimmer och lampor behöver passa ihop. Vi hjälper dig välja en kombination som fungerar utan flimmer.",
      },
    ],
  },
  {
    slug: "natverk",
    title: "Nätverk",
    icon: Network,
    short: "Stabil uppkoppling och nätverk för hem och företag.",
    metaTitle: "Nätverk och data i Helsingborg – installation och felsökning",
    metaDescription:
      "Nätverk, wifi och kabeldragning i Helsingborg. Vi installerar datauttag, routrar och mesh-lösningar för stabil uppkoppling i hem och företag.",
    hero: "Nätverk och data som fungerar – hemma och på kontoret.",
    intro: [
      "Dålig wifi-täckning eller krånglande nätverk? Vi hjälper till med kabeldragning, nätverksuttag, routrar och mesh-lösningar så att uppkopplingen blir stabil i hela lokalen.",
      "Vi tar både nya installationer och felsökning av befintliga nätverk.",
    ],
    bullets: [
      "Nätverkskablage och datauttag",
      "Wifi och mesh i hem och kontor",
      "Router- och switchinstallation",
      "Kabeldragning vid renovering och nybygge",
      "Felsökning av nätverksproblem",
    ],
    process: [
      {
        title: "Kartläggning",
        text: "Vi går igenom lokalens storlek, antal användare och var uppkopplingen behöver fungera.",
      },
      {
        title: "Lösning och offert",
        text: "Du får ett förslag på kablage, placering och utrustning – med en tydlig offert.",
      },
      {
        title: "Installation",
        text: "Vi drar kabel, monterar uttag och sätter upp utrustningen på ett snyggt sätt.",
      },
      {
        title: "Test och överlämning",
        text: "Vi testar täckning och hastighet och visar hur systemet fungerar.",
      },
    ],
    faq: [
      {
        q: "Kan ni dra nätverkskabel i befintligt hem?",
        a: "Ja, vi tittar på vägar som går att använda utan onödiga ingrepp och föreslår en lösning som passar bostaden.",
      },
      {
        q: "Vad är skillnaden mellan wifi och mesh?",
        a: "Ett mesh-system använder flera enheter som samarbetar för att ge bättre täckning i större bostäder eller lokaler.",
      },
      {
        q: "Hjälper ni även företag?",
        a: "Ja, vi utför nätverksjobb för både privatpersoner och företag.",
      },
    ],
  },
  {
    slug: "eljour",
    title: "Eljour 24/7",
    icon: Siren,
    short: "Akut elfel? Vi finns tillgängliga dygnet runt.",
    metaTitle: "Eljour 24/7 i Helsingborg – akut hjälp vid elfel",
    metaDescription:
      "Akut elfel i Helsingborg? VG EL AB har jour dygnet runt för elfel i hem och företag. Ring 073-531 22 47 så hjälper vi dig så snabbt vi kan.",
    hero: "Eljour 24/7 i Helsingborg – akut hjälp när elen inte fungerar.",
    intro: [
      "Elfel kommer sällan lägligt. Därför finns vi tillgängliga dygnet runt för akuta elproblem i Helsingborg med omnejd.",
      "Ring oss direkt så bedömer vi felet och berättar hur vi kan hjälpa dig vidare.",
    ],
    bullets: [
      "Akut elfel i hemmet",
      "Strömlöst i hela eller delar av bostaden",
      "Jordfelsbrytare som inte går att återställa",
      "Överslag och lukt av bränt",
      "Jour för företag och fastigheter",
    ],
    process: [
      {
        title: "Ring oss",
        text: "Beskriv felet och vad som händer. Vi ställer några frågor för att bedöma situationen.",
      },
      {
        title: "Säkerhet först",
        text: "Vid rök, brand eller lukt av bränt – stäng av strömmen om det är säkert och ring 112 vid brand.",
      },
      {
        title: "Åtgärd",
        text: "Vi kommer ut och felsöker, och åtgärdar felet så snart det är möjligt.",
      },
      {
        title: "Uppföljning",
        text: "Vi går igenom vad som har hänt och vad du kan göra för att undvika samma problem igen.",
      },
    ],
    faq: [
      {
        q: "Vad räknas som akut elfel?",
        a: "Till exempel strömlös bostad, återkommande jordfel, överslag eller situationer där elen inte kan användas säkert. Ring oss så bedömer vi fallet.",
      },
      {
        q: "Vad gör jag om det luktar bränt?",
        a: "Stäng av strömmen till det berörda området om det går utan fara, undvik att använda uttaget och ring oss. Vid rök eller brand – ring 112.",
      },
      {
        q: "Kostar jouren extra?",
        a: "Arbete utanför ordinarie tid kan innebära tillkommande kostnad. Ring oss så får du besked innan vi åker ut.",
      },
    ],
  },
];

export type Faq = { q: string; a: string };

export const faqs: Faq[] = [
  {
    q: "Vad kostar det att anlita en elektriker i Helsingborg?",
    a: "Priset beror på jobbets omfattning, material och hur akut det är. Vi lämnar alltid en offert eller ett tydligt prisförslag innan arbetet påbörjas, så att du vet vad det innebär.",
  },
  {
    q: "Hur snabbt kan ni komma vid akut elfel?",
    a: "Vi har jour 24/7. Ring 073-531 22 47 och beskriv felet, så bedömer vi situationen och berättar hur snabbt vi kan vara på plats.",
  },
  {
    q: "Arbetar ni i hela Skåne?",
    a: "Vi utgår från Helsingborg och arbetar i Helsingborg, Landskrona, Malmö och övriga Skåne. Kontakta oss med din adress så bekräftar vi att vi kan hjälpa dig.",
  },
  {
    q: "Är ni behöriga att utföra elinstallationer?",
    a: "Vårt arbete utförs av behörig personal och enligt gällande regler. Hör av dig om du vill veta mer om behörighet och vad som gäller för just ditt jobb.",
  },
  {
    q: "Vad ingår i en offert?",
    a: "Offerten beskriver arbetet, material och förutsättningar. Vi går igenom den med dig så att du vet vad som ingår och vad som eventuellt tillkommer.",
  },
  {
    q: "Kan jag få ROT-avdrag för elarbete?",
    a: "Reglerna beror på bostad och typ av arbete. Vi går igenom förutsättningarna med dig och berättar vad som gäller i ditt fall.",
  },
  {
    q: "Gör ni jobb för både privatpersoner och företag?",
    a: "Ja, vi hjälper privatpersoner, företag och fastighetsägare med elinstallation, service, belysning och nätverk.",
  },
  {
    q: "Vad gör jag om jordfelsbrytaren löser ut?",
    a: "Prova att återställa den en gång. Om den löser ut igen, koppla bort misstänkta apparater och ring oss. Vi felsöker orsaken istället för att bara återställa brytaren.",
  },
  {
    q: "Hur bokar jag en tid?",
    a: "Ring 073-531 22 47, maila info@vgel.se eller skicka en offertförfrågan via formuläret. Vi återkommer med förslag på tid.",
  },
];

export type Review = {
  name: string;
  rating: number;
  text: string;
  /** ISO-datum för omdömet. */
  date: string;
  source: string;
  sourceUrl: string;
  isPlaceholder?: boolean;
};

// Riktiga kundomdömen hämtade från företagets Reco-profil (2026-10-31).
// Sidan sätts automatiskt till noindex om något omdöme är en platshållare.
export const reviews: Review[] = [
  {
    name: "Niclas Sven Åke K.",
    rating: 5,
    text: "Snabb respons och mycket professionellt bemötande. Tydlig kommunikation under hela arbetet och jag är supernöjd med resultatet. Kan varmt rekommenderas och jag förblir nu en trogen kund. Tack! MVH Niclas",
    date: "2026-08-03",
    source: "Reco.se",
    sourceUrl: "https://www.reco.se/r/3302032",
  },
  {
    name: "Zgjim H.",
    rating: 5,
    text: "Väldigt bra bemötande och tydlig kommunikation. Allt gick smidigt och jag är nöjd med helheten. Rekommenderas.",
    date: "2026-05-11",
    source: "Reco.se",
    sourceUrl: "https://www.reco.se/r/3223535",
  },
  {
    name: "Arberesha A.",
    rating: 5,
    text: "Jag är väldigt nöjd med Västergård El! Vi gjorde om elen i hela lägenheten och Dino var så proffsig, noggrann och det märktes att han verkligen brydde sig om att göra ett bra och hållbart jobb. Kände mig trygg genom hela processen och resultatet blev jättebra! Kan varmt rekommendera.",
    date: "2026-04-05",
    source: "Reco.se",
    sourceUrl: "https://www.reco.se/r/3185387",
  },
  {
    name: "Admir K.",
    rating: 5,
    text: "Dino har gjort all el hemma hos oss och vi är väldigt nöjda. Han kom snabbt, var professionell och löste allt på ett noggrant och smidigt sätt. Det märks att han bryr sig om detaljerna och ser till att allt blir ordentligt gjort. Jag kan varmt rekommendera Dino till alla som söker en kunnig och pålitlig elektriker.",
    date: "2026-03-31",
    source: "Reco.se",
    sourceUrl: "https://www.reco.se/r/3180032",
  },
  {
    name: "Mostafa A.",
    rating: 5,
    text: "Supernöjd med Västergård El. Dem hjälpte mig med installationer och dragningar i huset på ett snabbt, smidigt och väldigt professionellt sätt! Allt med Dino och Västergård El sköttes professionellt. Nu är jag en trogen och återkommande kund :)",
    date: "2026-03-18",
    source: "Reco.se",
    sourceUrl: "https://www.reco.se/r/3166884",
  },
];

export const reviewSummary = {
  ratingValue: 5,
  reviewCount: 6,
  source: "Reco.se",
  sourceUrl: "https://www.reco.se/vastergardel-el-ab",
};

export const hasPlaceholderReviews = reviews.some((review) => review.isPlaceholder);
