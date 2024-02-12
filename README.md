[![semantic-release: angular](https://img.shields.io/badge/semantic--release-angular-e10079?logo=semantic-release)](https://github.com/semantic-release/semantic-release)

# pagoPA Editorial Components
A react component library to be used to compose pagoPa product pages based on [MUI italia](https://github.com/pagopa/mui-italia)

## Installation
To add this package to your `package.json` run in your terminal:
```console
// with npm
$ npm install @pagopa/pagopa-editorial-components
// with yarn
$ yarn add @pagopa/pagopa-editorial-components
```

## Usage
```jsx
import { Hero } from "@pagopa/pagopa-editorial-components";
  ....
  <Hero ... />
  ....
```

## Storybook
A storybook is available at this [address](http://pagopa.github.io/pagopa-editorial-components). 

### CLI Commands
Here's an explanation of the commands you can find in the `package.json`:
* `build`: It compiles the entire library project using the relative `tsconfig.json` file. We use it to release new versions
* `storybook`: It launches a local Storybook application using 6006 port. We use it when new developments are required
* `build-storybook`: It outputs a static Storybook in the `storybook-static` folder. We use it to deploy and upadate the online storybook

### Contributions
Any critiques and suggestions are welcome. If you feel pretty confident, you can [open a Pull Request](https://github.com/pagopa/pagopa-editorial-components/pulls)
