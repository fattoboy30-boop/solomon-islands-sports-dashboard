# 🏆 Solomon Islands Sports Dashboard

A modern, glassmorphism-styled web dashboard tracking Solomon Islands sports performance against world standards across football, athletics, rugby, basketball, and Olympic participation.

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-38bdf8?style=flat-square&logo=tailwindcss)
![React](https://img.shields.io/badge/React-18-61dafb?style=flat-square&logo=react)
![Recharts](https://img.shields.io/badge/Recharts-2.10-ff6384?style=flat-square)

## 🔗 Live Demo

**[View Live Dashboard →](https://solo-sports-dashboard-x3.vercel.app/)**

## 📸 Screenshots

> Dashboard features glassmorphism UI with animated gradient background, frosted glass cards, interactive charts, and responsive design.

## ✨ Features

- **5 Sports Tracked**: Football, Athletics, Rugby, Basketball, Olympic Participation
- **28 Verified Records** with source URLs from ESPN, World Athletics, Sofascore, Olympedia
- **Interactive Filters**: Filter by sport, year, competition, or opponent
- **Visual Analytics**: Bar charts for yearly trends, pie charts for sport distribution
- **Detailed Results Table**: Sortable data with clickable source links
- **Modern UI**: Glassmorphism design with animated gradient background
- **Fully Responsive**: Works on desktop, tablet, and mobile

## 🛠 Tech Stack

| Technology | Purpose |
|------------|---------|
| **Next.js 14** | React framework with App Router |
| **React 18** | UI components and state management |
| **Tailwind CSS 3** | Utility-first styling |
| **Recharts** | Data visualization (bar & pie charts) |
| **PapaParse** | CSV data parsing |

## 📁 Project Structure

```
sport analyst/
├── data/
│   └── solomon_islands_sports.csv    # Sports dataset (28 records)
├── src/
│   ├── app/
│   │   ├── api/data/route.js         # API endpoint for data
│   │   ├── globals.css               # Global styles
│   │   ├── layout.js                 # Root layout
│   │   └── page.js                   # Main dashboard page
│   ├── components/
│   │   ├── AnimatedBackground.js     # Floating gradient orbs
│   │   ├── Charts.js                 # Bar & pie charts
│   │   ├── Filters.js                # Sport/year/competition filters
│   │   ├── ResultsTable.js           # Detailed results table
│   │   └── SummaryCards.js           # Overview stat cards
│   └── lib/
│       ├── data.js                   # Client-side data utilities
│       ├── data-server.js            # Server-side data loading
│       └── validate.js               # Data validation script
├── AGENTS.md                         # Project rules
├── next.config.js                    # Next.js configuration
├── tailwind.config.js                # Tailwind configuration
└── package.json                      # Dependencies
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation

```bash
# Clone the repository
git clone https://github.com/fattoboy30-boop/solomon-islands-sports-dashboard.git

# Navigate to project directory
cd solomon-islands-sports-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📊 Data Schema

Each record follows this normalized structure:

| Field | Description | Example |
|-------|-------------|---------|
| `sport` | Sport category | football, athletics, rugby, basketball, olympics |
| `athlete_or_team` | Team or athlete name | Solomon Islands, Kevin Pio |
| `event_or_match` | Event type | Match, 100m, Marathon |
| `opponent_or_country` | Opponent | Bulgaria, Fiji |
| `date` | Date (YYYY-MM-DD) | 2026-03-27 |
| `result` | Score or time | 2-10, 11.54 |
| `competition` | Competition name | International Friendly |
| `world_standard_type` | Benchmark type | FIFA Ranking, Personal Best |
| `world_standard_value` | Benchmark value | 129, 737 |
| `source_url` | Verification URL | https://espn.com/... |

## 📝 Adding New Data

1. Open `data/solomon_islands_sports.csv`
2. Add a new row following the schema above
3. Always include a valid `source_url`
4. Save the file - changes appear on next page load

### Validate Data

```bash
node src/lib/validate.js
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Deploy automatically

### Manual Build

```bash
npm run build
npm start
```

## 🎨 Design System

- **Background**: Animated gradient (deep blue → indigo → teal) with floating orbs
- **Cards**: Frosted glass with `backdrop-blur(20px)` and subtle borders
- **Colors**: Solomon Islands flag inspired (Blue #003580, Yellow #FFD700, Green #228B22)
- **Typography**: Inter font family
- **Animations**: Floating orbs, hover effects, loading spinner

## 📈 Data Sources

| Source | Sport | URL |
|--------|-------|-----|
| ESPN | Football | [espn.com](https://www.espn.com) |
| World Athletics | Athletics | [worldathletics.org](https://worldathletics.org) |
| Sofascore | Rugby, Basketball | [sofascore.com](https://www.sofascore.com) |
| Olympedia | Olympics | [olympedia.org](https://www.olympedia.org) |

## 👤 Author

GitHub: [fattoboy30-boop](https://github.com/fattoboy30-boop)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Built with Next.js, React, and Tailwind CSS*
