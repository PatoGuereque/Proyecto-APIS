# Try Phish Me [![Netlify Status](https://api.netlify.com/api/v1/badges/7bb5db96-d22d-488f-ad8c-ecfae11210bb/deploy-status)](https://app.netlify.com/sites/proyecto-apis/deploys)

[Live deployment](https://proyecto-apis.netlify.app/)

## About

Try Phish Me was developed as a final project for a project administration course at ITESM university. The website consists of three different sections that showcase the dangers of being targeted online or even in person.

The sections are:

- Phishing
- Malware
- Social Engineering

## Building and Running

### Prerequisites

This project utilizes [Yarn Package Manager](https://yarnpkg.com/) for managing dependencies, running, and building the project. Install it if you don't have it already.

### Cloning and Installing Dependencies

```sh
git clone https://github.com/PatoGuereque/Proyecto-APIS.git
cd Proyecto-APIS
yarn install
```

### Building

You can build the static files by using

```sh
yarn build
```

This will output the bundled single page application into `build/`

### Running Locally

This project only contains a frontend, so running it is pretty simple. You run

```sh
yarn start
```

and this will open a browser window pointing to `localhost:3000`

## Code Style

This project contains a linter and a prettier to ensure code quality and consistency across the entire codebase. Husky is used for `pre-commit` and `pre-push` hooks, using prettier on pre-commit and eslint on pre-push.

### Eslint

We are using the default react's eslint rules. We recommend using the `Eslint Extension for VS Code`. More info [here](https://create-react-app.dev/docs/setting-up-your-editor/#experimental-extending-the-eslint-config)

### Prettier

Our prettier config is straight-forward, nothing must be said about it. Also the `Prettier extension for VS Codde` is recommended.

```json
{
  "trailingComma": "es5",
  "tabWidth": 2,
  "semi": true,
  "singleQuote": true
}
```

## Deployment

[Netlify](https://www.netlify.com/) is an awesome service that we use for free to build and deploy our application. This helps us tremendously speed up code reviews and also deploy changes to our website without the need to setup a complex pipeline.

## Contributing

We have a workflow diagram that details how new features and bugfixes go from a commit to production.

![Current Workflow](https://i.imgur.com/jAkpDDz.jpg)
