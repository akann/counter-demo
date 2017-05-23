
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';

import Header from '../../../src/react/components/main/Header';

describe('Header', () => {
  it('should render Header without breaking', () => {
    const wrapper = shallow(<Header />);

    expect(wrapper.find('a')).to.have.length(3);
  });

});

