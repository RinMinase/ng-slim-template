<h1 align="center"> Angular 10 Slim Template </h1>

<p align="center">
    <a href="https://angular.io/">
        <img alt="Angular" src="https://img.shields.io/badge/angular-%5E10.0-red.svg?logo=angular&style=for-the-badge">
    </a>
    <a href="https://david-dm.org/RinMinase/ng-slim-template">
        <img alt="David-DM" src="https://img.shields.io/david/RinMinase/ng-slim-template?style=for-the-badge">
    </a>
    <a href="https://david-dm.org/RinMinase/ng-slim-template">
        <img alt="David-DM" src="https://img.shields.io/david/dev/RinMinase/ng-slim-template?label=dev%20dependencies&style=for-the-badge">
    </a>
</p>

## Introduction
_Add info here_

## Getting Started

### Running the project
Installations Required:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/latest.msi)

1. Clone the project and modify the ENV file based on your Firebase configuration

    ```
    git clone https://github.com/RinMinase/ng-slim-template.git ng-slim
    cd ng-slim
    cp .env.example .env
    ```

2. Install the dependencies then run the project

    ```
    yarn install
    yarn start
    ```

3. Fire up your browser and go to `localhost:4200`

### Building the project
Installations Required:
- [Node](https://nodejs.org/en/)
- [Yarn](https://yarnpkg.com/latest.msi)

1. Fire up your terminal inside the project folder and build the project by running:

    ```
    yarn build
    ```

2. This should generate a `dist/` folder inside the project folder.

### Code Scaffolding
This is using `yarn ng generate <schematic> <name>` command. This can be shortened to `yarn ng g <schematic> <name>`.

Schematics
- `class` - Creates a new [class](https://angular.io/api/common/NgClass)
- `component` or `c` - Creates a new [component](https://angular.io/guide/architecture-components)
- `directive` or `d` - Creates a new [generic directive](https://angular.io/guide/architecture-components#directives)
- `module` or `m` - Creates a new [NgModule](https://angular.io/guide/architecture-modules)
- `service` or `s` - Creates a new [service](https://angular.io/guide/architecture-services)

## Built with
* <img width=20 height=20 src="https://angular.io/assets/images/favicons/favicon.ico"> [Angular 10](https://angular.io/) - Web Framework
* <img width=20 height=20 src="https://sass-lang.com/favicon.ico"> [Sassy CSS (SCSS)](https://sass-lang.com/) - CSS pre-processor
* <img width=20 height=20 src="https://webpack.js.org/bc3effb418df77da9e04825c48a58a49.ico"> [Webpack 4](https://webpack.js.org/) - Project bundler
