This is a [Next.js](https://nextjs.org) project for VG EL AB / Västergård El.

## Kom igång

```bash
npm install
npm run dev
```

Öppna [http://localhost:3000](http://localhost:3000).

## Bygg och kör produktion

```bash
npm run build
npm start
```

## Kontaktformuläret

Formuläret på startsidan skickar förfrågan till `app/api/contact/route.ts`.

För att aktivera riktig e-postutskickning, lägg till följande miljövariabler i Vercel
(Project → Settings → Environment Variables) och gör en ny deploy:

| Variabel | Beskrivning |
| --- | --- |
| `RESEND_API_KEY` | API-nyckel från [resend.com](https://resend.com) |
| `CONTACT_TO` | Mottagare, t.ex. `info@vgel.se` (valfri) |
| `CONTACT_FROM` | Avsändare, t.ex. `VG EL AB <hej@vastergardel.se>` (valfri) |

Saknas `RESEND_API_KEY` fungerar formuläret fortfarande: då öppnas användarens
mail-app med en färdig ifylld förfrågan i stället.

## SEO och innehåll

- Metadata per sida ligger i respektive `page.tsx`.
- Företagsuppgifter, tjänster och FAQ finns i `app/data/site.ts`.
- Recensioner finns i `app/data/reviews.ts`. Sidan `/recensioner` är `noindex`
  så länge något omdöme är markerat som platshållare.
- `app/sitemap.ts` och `app/robots.ts` genererar `sitemap.xml` och `robots.txt`.
- Strukturerad data (LocalBusiness/Electrician, Service, FAQPage, BreadcrumbList)
  läggs in automatiskt via komponenterna.

Efter publicering: skicka in `https://vastergardel.se/sitemap.xml` i
[Google Search Console](https://search.google.com/search-console) under Sitemaps.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Deploy on Vercel](https://vercel.com/docs)
