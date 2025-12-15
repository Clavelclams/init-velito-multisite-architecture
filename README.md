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

## 🏃‍♂️ Démarrage

1.  Installer les dépendances :
    ```bash
    npm install
    ```
2.  Lancer le serveur de développement :
    ```bash
    npm start
    ```

## 🔐 Accès Démo

Pour tester les différentes interfaces :

*   **Visiteur** : Accès libre à `/esport`.
*   **Admin** : Se connecter via `/auth/login`.
    *   Email : `admin@velito.fr`
    *   Password : `admin`

---

*Propulsé par VENA – Velito Expertise Numérique Amiens.*
