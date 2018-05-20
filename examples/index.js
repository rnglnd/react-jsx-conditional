import React from 'react';
import ReactDOM from 'react-dom';
import Conditional from '../src/index';

const div = document.createElement('div');
document.body.appendChild(div);

const NormalTrue = () => (
  <Conditional
    expression
    trueChild={<p>This is true</p>}
    falseChild={<p>This is false</p>}
  />
);

const NormalFalse = () => (
  <Conditional
    expression={false}
    trueChild={<p>This is true</p>}
    falseChild={<p>This is false</p>}
  />
);

const OnlyTrue = () => (
  <Conditional expression trueChild={<p>This is true</p>} />
);

const ArrayTrue = () => (
  <Conditional
    expression
    trueChild={[<p>This is true</p>, <p>This is also true</p>]}
    falseChild={[<p>This is false</p>, <p>This is also false</p>]}
  />
);

const ArrayFalse = () => (
  <Conditional
    expression={false}
    trueChild={[<p>This is true</p>, <p>This is also true</p>]}
    falseChild={[<p>This is false</p>, <p>This is also false</p>]}
  />
);

const Example = () => (
  <div>
    <h1>react-jsx-conditional</h1>
    <NormalTrue />
    <br />
    <NormalFalse />
    <br />
    <OnlyTrue />
    <br />
    <ArrayTrue />
    <br />
    <ArrayFalse />
  </div>
);

ReactDOM.render(<Example />, div);
