import React from "react";
import { shallow } from "enzyme";
import App from "../App";
import Display from "../components /Display";

describe("App", () => {
  // Before Each Hook
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<App />);
  })
  //Snapshot testing
  it('should render correctly as first', () => {
    expect(wrapper).toMatchSnapshot();
  });
  // Shallow Rendering test for App
  it("should render a div", () => {
    expect(wrapper.find("div").length).toEqual(1);
  });
  it("should render a Display Component", () => {
    expect(wrapper.containsMatchingElement(<Display />)).toEqual(true);
  });
});
