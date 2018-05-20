import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Conditional from '../src/';

configure({ adapter: new Adapter() });

describe('<Conditional />', () => {
  it('Should be true', () => {
    const wrapper = shallow(
      <Conditional
        expression
        trueChild={<p>This is true</p>}
        falseChild={<p>This is false</p>}
      />
    );

    expect(wrapper.text()).toEqual('This is true');
  });

  it('Should be false', () => {
    const wrapper = shallow(
      <Conditional
        expression={false}
        trueChild={<p>This is true</p>}
        falseChild={<p>This is false</p>}
      />
    );

    expect(wrapper.text()).toEqual('This is false');
  });

  it('Should be null', () => {
    const wrapper = shallow(
      <Conditional expression={false} trueChild={<p>This is true</p>} />
    );

    expect(wrapper.type()).toEqual(null);
  });
});
