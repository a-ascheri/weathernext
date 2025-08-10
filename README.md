# Weather Forecast Application

[![CI](https://github.com/a-ascheri/weathernext/actions/workflows/ci.yml/badge.svg)](https://github.com/a-ascheri/weathernext/actions/workflows/ci.yml)

A Next.js application that displays weather forecast data using the OpenWeather API.

## Features

- Server-side API calls for secure API key handling
- Real-time weather data visualization using Chart.js
- Responsive design with Tailwind CSS
- TypeScript for type safety

## Tech Stack

- Next.js 15
- React 19
- TypeScript 5
- Chart.js 4
- Tailwind CSS 4
- OpenWeather API

## Requirements

- Node.js 20 (see `.nvmrc`)
- npm 10+

## Setup

1) Install dependencies

```
npm ci
```

2) Create a `.env.local` file in the root directory and add your OpenWeather API key:

```
OPENWEATHER_API_KEY=your_api_key_here
```

3) Run the development server:

```
npm run dev
```

4) Open http://localhost:3000

## Scripts

- `npm run dev` - Start dev server
- `npm run build` - Build production
- `npm start` - Start production
- `npm run lint` - Lint the codebase

## CI

GitHub Actions runs on push/PR to `main`:
- install deps with `npm ci`
- lint
- build

Workflow file: `.github/workflows/ci.yml`

## Deployment

- Vercel recommended (Connect repo and set `OPENWEATHER_API_KEY` in Project Settings > Environment Variables)
- Alternatively any Node host that supports Next.js 15

## License

MIT © 2025 a-ascheri
