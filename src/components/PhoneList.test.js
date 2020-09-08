import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { PhoneList } from "./PhoneList";
import Loading from "./Loading";
import Error from "./Error";
import PhoneItem from "./PhoneItem";

const loadingCase = {
  loading: true,
  phones: [],
  error: ""
};

const successCase = {
  loading:false,
  phones: [
    {
      id: 0,
      name: "iPhone 7",
      manufacturer: "Apple",
      description:
        "iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.",
      color: "black",
      price: 769,
      imageFileName: "IPhone_7.png",
      screen: "4,7 inch IPS",
      processor: "A10 Fusion",
      ram: 2,
    },
  ],
  error: ""
};

const errorCase = {
  loading: true,
  phones: [],
  error: "404",
};

configure({ adapter: new Adapter() });

describe("<PhoneList />", () => {
  
  it("should render Loading when request is being made", () => {
    let wrapper = shallow(<PhoneList {...loadingCase} />);
    expect(wrapper.find(Loading).render())
  });
  it("should render Phone List when request is success", () => {
    let wrapper = shallow(<PhoneList {...successCase} />);
    expect(wrapper.find(PhoneItem)).toHaveLength(1)
  });
  it("should render Error when request failed", () => {
    let wrapper = shallow(<PhoneList {...errorCase} />);
    expect(wrapper.find(Error).render());
  });
});
