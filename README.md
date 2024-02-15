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
* `test`: It runs unit tests for the library components

### How to Contribute
Any critiques and suggestions are welcome.
All components in this package should be generic enough to be used in different applications and use cases. 
In this sense, if you have any doubts or aren't sure, please ask your fellow designer. With that said, you basically 
have two options starting from the design project:

#### Build the generic component (easy abstraction)
1. Take the time to make a proper analysis of the component's possible props.
2. Ask your fellow developers/designers for comments or criticism
3. Build it, according to the provided guidelines (see below)
4. Test all its possible combinations, using Storybook or similar playground

#### Provide a sample of how to compose the component (hard abstraction)
1. Compose the component using the available components provided by the library
2. Add a specific story to the Storybook, under the Composition section

#### Either way, you must follow these guidelines:

* Visual consistency
* If possible, avoid magic numbers.
* Use the provided visual attributes (color, spacing, etc…), using the corresponding theme file
* If you have to use some values not provided by the theme object:
  - Ask to your fellow designer for clarification
  - If necessary, extend it.
* The components must be responsive by default

#### Accessibility
- Ensure that the new components are accessible to all users. To avoid reinventing the wheel, take advantage of the MUI base components.
- Try to perform the actions using only the keyboard.

If you feel pretty confident, you can [open a Pull Request](https://github.com/pagopa/pagopa-editorial-components/pulls)
