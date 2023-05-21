/* eslint-disable react/jsx-props-no-spreading */
import Pill from './Pill'

export default {
  title: 'Pills/Pill',
  component: Pill,
  tags: ['autodocs'],
  args: {
    theme: 'forest',
  },
}

const Template = (args) => <Pill {...args} />

export const PillButton = Template.bind({})
PillButton.args = {
  theme: 'forest',
}
