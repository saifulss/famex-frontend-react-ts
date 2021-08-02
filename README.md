# Famex
A simple expense tracking app for families.

## Getting Started
- `cp .env.local.example` to `.env.local` to enable browser integration with IntelliJ when working locally
- `yarn` to install NPM dependencies
- `yarn start` to start the app locally
- For a pleasant debugging experience in IntelliJ, set up your IntelliJ "Run Configuration" as per instructions [here](https://blog.jetbrains.com/webstorm/2017/01/debugging-react-apps/)

## Deploying To Prod
### GitHub Pages
- This thing is deployed to GitHub Pages.
- Run `yarn run deploy`. Then you can visit the deployed app [here](https://saifulss.github.io/famex-frontend-react-ts/).
### Docker
- Run `cp .env.local.example .env` and edit values accordingly
- Run the deploy script with `./deploy`