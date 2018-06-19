import React from "react";
import { shallow } from "enzyme";
import Buttons from "../components /Buttons";
import Button from '../components /Button'

describe("Buttons", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Buttons />);
  });
  it('should render correctly as first', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should render a <div />', () => {
    expect(wrapper.find('div').length).toEqual(1);
  });
  it('should render a <div />', () => {
    expect(wrapper.containsMatchingElement(<Button />)).toEqual(true)
  });
});
