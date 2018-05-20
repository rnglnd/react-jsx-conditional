# react-jsx-conditional
[![npm](https://img.shields.io/npm/v/react-jsx-conditional.svg)](https://www.npmjs.com/package/react-jsx-conditional)


#### A lightweight conditional component which takes both a node and an array as children and renders based on a boolean expression.

This is a very simple conditional component for React 16 only which can take both react nodes to display or an array of nodes (meaning you can use an iterator in either the `trueChild` or `falseChild`) based on the conditional expression. It requires an `expression` and a `trueChild` but it does not require the `falseChild` as it will return `null` if none is passed through.

## Installation

```
$ npm install react-jsx-conditional
```

## Usage

All the possible usuages are listed in our [examples](examples/index.js) page but below is probably the most standard usecase:

```
<Conditional
  expression={true}
  trueChild={
    <p>This is true</p>
  }
  falseChild={
    <p>This is false</p>
  }
/>
```


| Props        | Type         | Required |
| ------------ | ------------ | ---------|
| expression | boolean | Yes |
| trueChild | Node/Array<Node> | Yes |
| trueChild | Node/Array<Node> | No |

## Development

We welcome any pull requests, fork the repo and get started:

Install dependencies:

```
$ npm install
```

Run the example app at [http://localhost:3000](http://localhost:3000):

```
$ npm start
```

Run tests and watch for code changes using [jest](https://github.com/facebook/jest):

```
$ npm test
```

Lint `src` and `test` files:

```
$ npm run lint
```

## License

MIT
