import CharSelector from "./CharSelector"

let temp = 'knight'

const getCharSkin = (option) => {
    temp = option
  }

export default {
    title: "Buttons/CharSelector",
    component: CharSelector,
    tags: ["autodocs"],
    args: {
      option1: 'knight',
      option2: 'sorcerer',
      option3: 'huntress',
      callback: {getCharSkin},
    },
  }
  

  const Template = (args) => <CharSelector {...args} />
  
  export const CharSelectorClosed = Template.bind({})
  CharSelectorClosed.args = {
    option1: 'knight',
    option2: 'sorcerer',
    option3: 'huntress',
    callback: {getCharSkin},
  }