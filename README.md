# 🌐 Velito Ecosystem

Velito est un écosystème numérique modulaire développé par **VENA** (Velito Expertise Numérique Amiens). Ce projet repose sur une architecture **multi-site unifiée** (Monorepo conceptual), où chaque branche (association, services, applications) dispose de sa propre identité visuelle et de sa navigation dédiée, tout en partageant une base technique commune.

## 🚀 Concept

L'objectif est de centraliser plusieurs entités sous une même bannière technique tout en leur laissant leur autonomie visuelle et fonctionnelle :

1.  **Top Bar (Niveau 1)** : Barre de navigation globale "Écosystème" qui permet de naviguer entre les différents modules.
2.  **Navbar Contextuelle (Niveau 2)** : Change dynamiquement selon le module actif (Logo, Menu, Couleurs).
3.  **Modules** :
    *   🎮 **Velito Esport Amiens (VEA)** : Association esportive (Actif).
    *   ⚡ **VENA** : Agence/Studio créatif (Porteur du projet).
    *   🏙️ **Ma Ville** : Citoyenneté numérique.
    *   🤖 **Hub IA** : Innovation et recherche.
    *   🏗️ **Autres** : Plateforme, Interactive, Messages (En construction).

## 🛠️ Stack Technique

*   **Framework** : React 19 (TypeScript)
*   **Styling** : Tailwind CSS
*   **Routing** : React Router DOM v7
*   **Icons** : Lucide React
*   **Assets** : Gestion optimisée des logos et images (support PNG/SVG).

## 📂 Structure du Projet

```bash
/
├── assets/             # Images, Logos, Icons (ex: logo/png/vea/...)
├── features/           # Logique métier par module
│   ├── admin/          # Back-office
│   ├── auth/           # Authentification unifiée
│   ├── comingSoon/     # Page d'attente générique
│   └── esport/         # Module VEA (Pages, Components)
├── layout/             # Composants structurels globaux
│   ├── MainLayout.tsx  # Wrapper principal (TopBar + Navbar + Footer)
│   ├── MainNavbar.tsx  # Navbar intelligente (Context-aware)
│   └── TopEcosystemBar.tsx # Navigation globale
├── services/           # Mock CMS / API calls
├── types.ts            # Définitions TypeScript globales
├── App.tsx             # Routing principal
└── index.tsx           # Point d'entrée
```

## 🎨 Identité Visuelle & UX

*   **Context-Aware Navigation** : Le composant `MainNavbar` détecte l'URL active (`/esport`, `/vena`, etc.) et adapte instantanément :
    *   Le Logo (Image spécifique VEA / VENA).
    *   Le nom et sous-titre.
    *   La couleur d'accentuation (Bleu pour Esport, Émeraude pour VENA, etc.).
    *   Les liens du menu.
*   **Footer Stratégique** : Le footer rappelle la hiérarchie en mettant en avant **VENA** comme l'entreprise porteuse de l'écosystème, quel que soit le module visité.

## 🚀 Déploiement

Ce projet est configuré pour un déploiement SPA (Single Page Application) sur des plateformes comme Netlify ou Vercel.

### Configuration Routing
- **Netlify** : Le fichier `public/_redirects` redirige toutes les routes vers `index.html` pour le routing côté client.
- **Vercel** : Le fichier `vercel.json` configure les rewrites pour servir `index.html` sur toutes les routes.

### Base Path
Par défaut, déployé à la racine (`/`). Si nécessaire pour un sous-chemin, modifier `vite.config.ts` :
```typescript
export default defineConfig({
  base: '/mon-chemin/',
  // ...
});
```

### Limites en Production
⚠️ **Ce projet est une démonstration technique** et présente plusieurs limitations pour un environnement de production réel :

- **Authentification** : Utilise `localStorage` uniquement (pas de JWT, OAuth, ou backend sécurisé). Les sessions ne persistent pas réellement.
- **Base de Données** : Toutes les données sont mockées dans `services/cms.ts` (pas de vraie BDD). Les formulaires simulent l'envoi sans traitement réel.
- **Sécurité** : Aucune validation côté serveur, protection CSRF, ou chiffrement des données sensibles.
- **Performance** : Pas d'optimisation avancée (code-splitting partiel, lazy loading limité).
- **Évolutivité** : Architecture monorepo conceptuelle, mais pas adaptée à une vraie séparation de services.

Pour une mise en production réelle, il faudrait :
- Intégrer un backend (Node.js/Express, Next.js API, ou service externe).
- Configurer une vraie BDD (PostgreSQL, MongoDB).
- Implémenter une authentification sécurisée (Auth0, Firebase Auth).
- Ajouter des tests automatisés et monitoring.

---

*Propulsé par VENA – Velito Expertise Numérique Amiens.*
