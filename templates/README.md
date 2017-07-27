# StoreFront <%= component %>

StoreFront `<<%= prefix + component %>>` component

[![npm (scoped with tag)](https://img.shields.io/npm/v/@storefront/<%= component %>.svg?style=flat-square)](https://www.npmjs.com/package/@storefront/<%= component %>)
[![CircleCI branch](https://img.shields.io/circleci/project/github/<%= repository %>/master.svg?style=flat-square)](https://circleci.com/gh/<%= repository %>/tree/master)
[![Codecov branch](https://img.shields.io/codecov/c/github/<%= repository %>/master.svg?style=flat-square)](https://codecov.io/gh/<%= repository %>)
[![bitHound](https://img.shields.io/bithound/code/github/<%= repository %>.svg?style=flat-square)](https://www.bithound.io/github/<%= repository %>)
[![bitHound](https://img.shields.io/bithound/dependencies/github/<%= repository %>.svg?style=flat-square)](https://www.bithound.io/github/<%= repository %>)

[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat-square)](https://github.com/semantic-release/semantic-release)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg?style=flat-square)](http://commitizen.github.io/cz-cli/)
[![license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://choosealicense.com/licenses/mit/)
[![Greenkeeper badge](https://badges.greenkeeper.io/<%= repository %>.svg)](https://greenkeeper.io/)

## Getting Started

This module requires [`@storefront/core`](https://www.npmjs.com/package/@storefront/core) for the component to render
and receive data from GroupBy microservices.

### Prerequisites

This module is meant to be used in a `node` environment which is bundled for use in the browser.

### Installing

Use `npm` or `yarn` to install in a `node` project that uses `webpack`, `browserify` or similar.

```sh
npm install --save @storefront/<%= component %>
# or
yarn add @storefront/<%= component %>
```

## Usage

This module provides the `<<%= prefix + component %>>` component for use with StoreFront.

### Mount tag

```html
<!-- index.html -->
<body>
  <<%= prefix + component %>></<%= prefix + component %>>
</body>
```

```js
// index.js
storefront.mount('<%= prefix + component %>');
```

## Running the tests

Tests can be run to generate coverage information.
Once run, open `coverage/index.html` in your browser to view coverage breakdown.

```sh
npm start coverage
# or
yarn start coverage
```

Tests can be run continuously for development

```sh
npm run tdd
# or
yarn tdd
```

Tests can also be run alone

```sh
npm test
# or
yarn test
```
