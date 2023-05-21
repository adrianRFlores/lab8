/* eslint-disable react/jsx-props-no-spreading */
import Input from './Input'

export default {
  title: 'NumInput/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    id: 'inputID',
    label: 'Numeric Input',
    min: '1',
    max: '100',
  },
}

const Template = (args) => <Input {...args} />

export const NumInput = Template.bind({})
NumInput.args = {
  id: 'inputID',
  label: 'Numeric Input',
  min: '1',
  max: '100',
}
