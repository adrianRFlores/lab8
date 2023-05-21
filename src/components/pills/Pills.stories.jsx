/* eslint-disable react/jsx-props-no-spreading */
import Pills from './Pills'

const callbackFunc = (option) => {}

export default {
  title: 'Pills/Pills',
  component: Pills,
  tags: ['autodocs'],
  args: {
    theme1: 'forest',
    theme2: 'godlands',
    theme3: 'spriteworld',
    callback: { callbackFunc },
  },
}

const Template = (args) => <Pills {...args} />

export const PillsContainer = Template.bind({})
PillsContainer.args = {
  theme1: 'forest',
  theme2: 'godlands',
  theme3: 'spriteworld',
  callback: { callbackFunc },
}
