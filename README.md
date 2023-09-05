# Install

## install react:

npx create-react-app sportdapp
npm i react-router-dom
in react install:
npm install -D tailwindcss // tailwindcss and create tailwind.config.js : npx tailwindcss init

    npm install --save @web3auth/modal

## install hardhat:

npm install --save-dev hardhat
npx hardhat

For testing (mocha)
npm install --save-dev mocha
npm install mocha chai

in hardat install:
npm install @openzeppelin/contracts

Deploying your contracts
npx hardhat run

For compile contract:
npx hardhat compile

For test contract:
npx hardhat test

For deploy contract:
npx hardhat run scripts/deploy.js --network localhost

install Openzeppelin:
npm install @openzeppelin/contracts

## install locally (recommended)

npm install dotenv --save

I create one contract Nft and one test for it.
I want try TDD methode for this project.

\*Use tailwind (not finish): https://tailwindcss.com/docs/installation

Add the Tailwind directives to your CSS
Add the @tailwind directives for each of Tailwind’s layers to your main CSS file.

@tailwind base;
@tailwind components;
@tailwind utilities;

Start the Tailwind CLI build process
Run the CLI tool to scan your template files for classes and build your CSS.

npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch

Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

```
  <!doctype html>
  <html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="/dist/output.css" rel="stylesheet">
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">
      Hello world!
    </h1>
  </body>
  </html>
```
