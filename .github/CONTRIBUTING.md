# Ways to contribute

- **Give feedback:** The main goal of this project is to use the latest technologies and best practices. Please share what features are missing and what is done well via [GitHub Discussions](https://github.com/alexander-trishin/personal-website/discussions).
- **Give us a code review:** Help us identify problems with the source code or make solution more performant.
- **Improve documentation:** Fix incomplete or missing docs, type declarations, bad wording, examples or explanations.
- **Contribute to the codebase:** Propose new features via [GitHub Issues](https://github.com/alexander-trishin/personal-website/issues), or find an existing issue that you are interested in and work on it!

## Contributing workflow

- Decide on what you want to contribute.
- If you would like to implement a new feature, discuss it with the maintainer ([GitHub Discussions](https://github.com/alexander-trishin/personal-website/discussions)) before jumping into coding.
- After finalizing issue details, as you begin working on the code.
- Run tests with `npm run test`, `npm run test:e2e` and submit a PR once all tests have passed.
- Get a code review and fix all issues noticed by the maintainer.
- If you cannot finish your task or if you change your mind – that's totally fine! Just let us know in the GitHub issue that you created during the first step of this process.
- Your PR is merged. You are awesome ❤️!

## Get started with Mantine locally

- Fork the [repository](https://github.com/alexander-trishin/personal-website), then clone or download your fork.
- Run nvm use to switch to the Node version specified in `.nvmrc` file ([install nvm](https://github.com/nvm-sh/nvm)).
- Install dependencies with npm – `npm i`
- To start dev server – `npm run dev`
- To start storybook – `npm run storybook`

### npm scripts

All npm scripts are located at [main package.json](https://github.com/alexander-trishin/personal-website/blob/main/package.json).

#### Development scripts

- `dev` – Starts the development server.
- `storybook` – Starts the storybook development server.

#### Testing scripts

- `typecheck` – runs TypeScript typechecking with `tsc --noEmit` on all packages
- `lint` – runs ESLint
- `test` – runs tests with jest
- `test:e2e` – runs tests with playwright
