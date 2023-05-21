/* eslint-disable react/jsx-props-no-spreading */
import Character from './Character'

export default {
  title: 'Characters/Character',
  component: Character,
  tags: ['autodocs'],
  args: {
    skin: 'knight',
    direction: 'Front',
  },
}

const Template = (args) => <Character {...args} />

export const Knight = Template.bind({})
Knight.args = {
  skin: 'knight',
  direction: 'Front',
}
