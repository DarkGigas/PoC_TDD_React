import Enzyme, { shallow, ShallowWrapper } from 'enzyme'
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import App from "./App"

Enzyme.configure({ adapter: new Adapter() })

/**
 * Factory function to create a ShallowWrapper for the App Component
 * @function setup
 * @returns {ShallowWrapper}
 */
const setup = () => shallow(<App />)

/**
 * Wrapper testing function that returns 
 * an html Node or null if it does not find anything
 * @function findByTestAttr
 * @param {ShallowWrapper} wrapper 
 * @param {string} value 
 * @returns {ShallowWrapper | null}
 */
const findByTestAttr = (wrapper, value) => wrapper.find(`[data-test="${value}"]`)

test("renders without crashing", () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy() // Checks if wrapper is not undefined/null
  const appComponent = findByTestAttr(wrapper, "app-component")
  expect(appComponent.length).toBe(1)
})

test("renders button", () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy()
  const button = findByTestAttr(wrapper, "increment-button")
  expect(button.length).toBe(1)
})

test("renders counter display", () => {
  const wrapper = setup()
  expect(wrapper).toBeTruthy()
  const counterDisplay = findByTestAttr(wrapper, "counter-display")
  expect(counterDisplay.length).toBe(1)
})

// test("counter starts at 0", () => {

// })

// test("button click updates counter", () => {

// })