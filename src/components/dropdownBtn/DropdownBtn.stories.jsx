/* eslint-disable react/jsx-props-no-spreading */
import DropdownBtn from './DropdownBtn'

export default {
  title: 'Buttons/DropdownBtn',
  component: DropdownBtn,
  tags: ['autodocs'],
  args: {
    active: false,
    text: 'Character skin',
    current: 'knight',
  },
}

const Template = (args) => <DropdownBtn {...args} />

export const DropdownBtnActive = Template.bind({})
DropdownBtnActive.args = {
  active: true,
  text: 'Character skin',
  current: 'knight',
}
export const DropdownBtnDefault = Template.bind({})
DropdownBtnDefault.args = {
  active: false,
  text: 'Character skin',
  current: 'knight',
}
