import CartCount from '../components/CartCount';
import { shallow, mount } from 'enzyme';
import toJSON from 'enzyme-to-json';

const fakeItem = {
  id: "asfasgdfvfrewgf",
  title: 'shoes',
  price: 60000,
  description: 'really cool snickers',
  image: 'shoe.jpg',
  largeImage: 'shoe.jpg',
};

describe('<CartCount />', () => {
  it('renders', () => {
    shallow(<CartCount count={22} />);
  });

  it('matches the snapshot', () => {
    const wrapper = shallow(<CartCount count={22} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

  it('updates via props', () => {
    const wrapper = shallow(<CartCount count={22} />);
    expect(toJSON(wrapper)).toMatchSnapshot();
    wrapper.setProps({ count: 10 });
    expect(toJSON(wrapper)).toMatchSnapshot();
  });

});
