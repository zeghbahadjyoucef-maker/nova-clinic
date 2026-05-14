# Cabinet Dentaire NOVA — Site web

Site web bilingue (FR / AR) pour le Cabinet Dentaire NOVA — Dr Boulounis.

## Stack

- Next.js 14 (App Router) + TypeScript
- Tailwind CSS
- next-intl (FR + AR, avec RTL automatique)
- framer-motion, lucide-react

## Démarrage rapide

```bash
npm install
npm run dev
```

Le site démarre sur <http://localhost:3000> et redirige automatiquement vers `/fr`.
Switch FR ⇄ AR via le bouton dans l'entête.

## Personnaliser le contenu

| Fichier | Contenu |
|---|---|
| `messages/fr.json` | Tous les textes français |
| `messages/ar.json` | Tous les textes arabes |
| `lib/siteConfig.ts` | Téléphones, adresse, horaires, coordonnées Maps |
| `public/logo.svg` | Logo |

## Déploiement

Vercel :

```bash
npx vercel
```

## Notes

- Les photos viennent d'Unsplash (CDN). Pour utiliser des photos du cabinet, remplacer les URLs dans les composants `Hero.tsx`, `WhyUs.tsx`, `DoctorCard.tsx`, `Reviews.tsx`, `TipsNews.tsx`.
- Le formulaire de rendez-vous ouvre WhatsApp (`wa.me`) avec un message pré-rempli vers le numéro choisi.
