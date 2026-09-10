# CodeTracker 🚀

> **The Unified Coding Intelligence & Placement Analytics Platform**  
> Empowering students, engineering colleges, and recruiters with automated coding telemetry across competitive programming platforms.

[![React](https://img.shields.io/badge/React-19.0-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4.0-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.4-black?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![Status](https://img.shields.io/badge/Status-Live_in_Production-emerald)]()

---

## 🌟 Overview

**CodeTracker** is an all-in-one platform built to track student coding progress, analyze competitive programming performance in real-time, and benchmark placement readiness. 

By unifying data across top algorithmic and developer platforms—including **LeetCode**, **Codeforces**, **CodeChef**, **HackerRank**, **GeeksforGeeks**, **AtCoder**, and **GitHub**—CodeTracker provides educational institutions with real-time talent discovery tools while giving students an objective, verified coding portfolio.

🌐 **Student Portal**: [student.codetracker.ofzen.in](https://student.codetracker.ofzen.in)

---

## ⚡ Key Features

- **Orbital Platform Hub**: Concentric animated SVG arc canvas visualizing real-time telemetry syncing from LeetCode, Codeforces, CodeChef, HackerRank, GitHub, GFG, and AtCoder.
- **Institutional Ecosystem**: Built for scale—trusted by 120+ institutions with NAAC, NIRF, and NBA benchmark alignment.
- **Four-Step Onboarding Architecture**:
  1. *Universal Handle Sync* — Connect handles with one click.
  2. *Cross-Platform Telemetry* — Automated rating and streak verification.
  3. *AI-Powered Skill Radar* — Topic-wise mastery insights (DSA, DP, Graphs, etc.).
  4. *Placement Readiness Index* — Verified candidate profiles for campus drives.
- **Multi-Role Dashboards & Outcomes**: Tailored views and metrics for:
  - 🎓 **Students**: Personal ratings, streak calendar, contest rankings, and resume verification.
  - 🏫 **Placement Cell**: Batch filters, placement eligibility lists, and company-specific cutoffs.
  - 👨‍🏫 **Faculty & Mentors**: Lab tracking, assignment metrics, and early student intervention.
  - 💼 **Campus Recruiters**: Filter candidates by verified score, problem counts, and contest performance.
- **Interactive Live Demo Sandbox**: Instant in-browser dashboard simulation allowing campus directors to explore metrics before onboarding.
- **Campus Partnership Note**: Direct institution onboarding form with interactive toast notifications.
- **Modern Responsive Design**: Fluid layouts, smooth blur-in entry animations via Framer Motion, and consistent typography (`Outfit` & `Plus Jakarta Sans`).

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Frontend Framework** | React 19 (Hooks, Functional Architecture) |
| **Build Tool & Bundler** | Vite 6 |
| **Styling & Design System** | Tailwind CSS v4 (CSS-first `@theme` configuration) |
| **Motion & Micro-interactions** | Framer Motion 12 |
| **Icons & Visual Language** | Lucide React |
| **Typography** | Outfit (Headings & Display), Plus Jakarta Sans (Body), JetBrains Mono (Code & Badges) |

---

## 📂 Project Structure

```text
Codetracker/
├── public/                     # Static assets, SVG platform logos & illustrations
│   ├── college_illustration.jpg# Campus landscape artwork for institutional CTA
│   ├── hero image.png          # High-fidelity student community artwork
│   ├── landing.png             # UI design reference & mockups
│   ├── paper_sheet_note.png    # Tactile paper overlay graphics
│   └── *.svg / *.png           # LeetCode, Codeforces, CodeChef, GFG, AtCoder icons
├── src/
│   ├── components/             # Reusable UI & landing page sections
│   │   ├── BackToTop.jsx       # Floating smooth-scroll return button
│   │   ├── ContactSection.jsx  # Institution onboarding form & campus note
│   │   ├── CtaBanner.jsx       # Tactile torn-paper call-to-action banner
│   │   ├── FaqSection.jsx      # Accordion FAQs for colleges and students
│   │   ├── Features.jsx        # 8-card uncropped visual feature matrix
│   │   ├── Footer.jsx          # Frosted glass footer with quick links & portal CTA
│   │   ├── Hero.jsx            # Uncropped community banner & curved divider
│   │   ├── HowItWorks.jsx      # 4-stage workflow walkthrough
│   │   ├── LiveDemoModal.jsx   # Interactive modal dashboard simulator
│   │   ├── Navbar.jsx          # Glassmorphic pill header with portal redirect
│   │   ├── PlatformHub.jsx     # Concentric animated multi-platform arc hub
│   │   ├── RoleOutcomes.jsx    # Interactive 4-role switcher & live talent table
│   │   ├── Toast.jsx           # Animated notification alerts
│   │   └── TrustedBy.jsx       # Institutional credibility bar & accreditation
│   ├── App.jsx                 # Main application layout & global state
│   ├── main.jsx                # Application root mounting
│   └── index.css               # Design tokens, typography & Tailwind v4 theme
├── .vscode/                    # IDE settings (Tailwind v4 linting configurations)
├── package.json                # Project dependencies and script declarations
└── vite.config.js              # Vite bundler plugins & build configuration
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed on your machine:
- **Node.js**: v18.0.0 or higher
- **npm**: v9.0.0 or higher (or `pnpm` / `yarn`)

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Charantej111/Codetracker.git
   cd Codetracker
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the local development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Visit [http://localhost:5173](http://localhost:5173) to view the application.

---

## 📦 Available Scripts

In the project root directory, you can run:

| Command | Action |
|---|---|
| `npm run dev` | Runs the app in development mode with Hot Module Replacement (HMR). |
| `npm run build` | Compiles and optimizes assets into the `dist/` directory for production. |
| `npm run preview` | Locally preview the production build output. |
| `npm run lint` | Runs ESLint to check for code quality and syntax issues. |

---

## 🔗 Portals & Ecosystem

- **Student Portal**: [https://student.codetracker.ofzen.in](https://student.codetracker.ofzen.in)
- **Official Organization**: [Ofzen](https://ofzen.in/)

---

## 📄 License & Credits

- Designed & developed with ❤️ by the **[Ofzen](https://ofzen.in/)** engineering team.
- © 2025 CodeTracker. All rights reserved.
