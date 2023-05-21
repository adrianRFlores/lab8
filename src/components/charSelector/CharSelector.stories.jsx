/* eslint-disable react/jsx-props-no-spreading */
import CharSelector from './CharSelector'

const getCharSkin = (option) => {}

export default {
  title: 'Buttons/CharSelector',
  component: CharSelector,
  tags: ['autodocs'],
  args: {
    option1: 'knight',
    option2: 'sorcerer',
    option3: 'huntress',
    callback: { getCharSkin },
  },
}

const Template = (args) => <CharSelector {...args} />

export const CharSelectorClosed = Template.bind({})
CharSelectorClosed.args = {
  option1: 'knight',
  option2: 'sorcerer',
  option3: 'huntress',
  callback: { getCharSkin },
}
