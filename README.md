# Famex
A simple expense tracking app for families.

## Getting Started
- `cp .env.local.example` to `.env.local` to enable browser integration with IntelliJ when working locally
- `yarn` to install NPM dependencies
- `yarn start` to start the app locally
- For a pleasant debugging experience in IntelliJ, set up your IntelliJ "Run Configuration" as per instructions [here](https://blog.jetbrains.com/webstorm/2017/01/debugging-react-apps/)

## Deploying To Prod
- `yarn build` to build the production-ready version of CRA. This generates the `./build` folder. 
- `docker build -t famex:latest .` to build the Docker image, which is basically an Nginx with the `./build` loaded.
- ... to be continued
