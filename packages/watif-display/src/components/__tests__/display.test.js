import React from 'react'
import {shallow} from 'enzyme'
import Display from '../display'

it('renders', () => {
  const wrapper = shallow(<Display storyState={{}} />)
  expect(wrapper).toMatchSnapshot()
})

it('calls calls executeVerb with examine verb on item click', () => {
  const executeVerb = jest.fn()
  const wrapper = shallow(<Display storyState={{}} executeVerb={executeVerb} />)
  wrapper.instance().handleItemClick('some-item-id')
  expect(executeVerb).toHaveBeenCalledWith({
    id: 'examine',
    subject: 'some-item-id',
    target: null,
  })
})
