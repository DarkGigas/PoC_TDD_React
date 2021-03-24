import Enzyme, { shallow } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from "./App"

Enzyme.configure({ adapter: new Adapter() })

test("renders without crashing", () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy() // Checks if wrapper is not undefined/null
  const appComponent = wrapper.find("[data-test='app-component']")
  expect(appComponent.length).toBe(1)
})

test("renders button", () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy() // Checks if wrapper is not undefined/null
  const button = wrapper.find("[data-test='increment-button']")
  expect(button.length).toBe(1)
})

test("renders counter display", () => {
  const wrapper = shallow(<App />)
  expect(wrapper).toBeTruthy() // Checks if wrapper is not undefined/null
  const counterDisplay = wrapper.find("[data-test='counter-display']")
  expect(counterDisplay.length).toBe(1)
})

// test("counter starts at 0", () => {

// })

// test("button click updates counter", () => {

// })