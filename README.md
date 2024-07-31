# [alexander-trishin.ru](https://alexander-trishin.ru/) \([Migration](https://github.com/alexander-trishin/personal-site) is still ongoing\)

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexander-trishin/personal-website/tree/main/LICENSE.txt)
[![Run tests](https://github.com/alexander-trishin/personal-website/actions/workflows/run-tests.yml/badge.svg)](https://github.com/alexander-trishin/personal-website/actions/workflows/run-tests.yml)
[![Deploy storybook](https://github.com/alexander-trishin/personal-website/actions/workflows/deploy-storybook.yml/badge.svg)](https://github.com/alexander-trishin/personal-website/actions/workflows/deploy-storybook.yml)

My personal website. Built using:

- [Next.js 14](https://nextjs.org/)
- [React.js 18](https://reactjs.org/)
- [Typescript 5](https://www.typescriptlang.org/)
- [Mantine 7](https://mantine.dev/)

## Features

- [PostCSS](https://postcss.org/) with [mantine-postcss-preset](https://mantine.dev/styles/postcss-preset)
- [Jest](https://jestjs.io/) setup with [React Testing Library](https://testing-library.com/docs/react-testing-library/intro)
- [Playwright](https://playwright.dev/)
- [Storybook](https://storybook.js.org/) deployed to [GitHub Pages](https://alexander-trishin.github.io/personal-website/)

## Scripts

### Build and dev scripts

- `dev` – start dev server
- `build` – bundle application for production
- `analyze` – analyzes application bundle with [@next/bundle-analyzer](https://www.npmjs.com/package/@next/bundle-analyzer)

### Testing scripts

- `typecheck` – checks TypeScript types
- `lint` – runs ESLint
- `prettify` – formats all files with Prettier
- `test` – runs `jest` tests
- `test:e2e` – runs `@playwright/test` tests

### Other scripts

- `storybook` – starts storybook dev server
- `storybook:build` – build production storybook bundle to `storybook-static`
