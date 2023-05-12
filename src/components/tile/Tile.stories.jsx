import Tile from './Tile'
import Character from './../char/Character'

export default {
    title: 'Tiles/Tile',
    component: Tile,
    tags: ['autodocs'],
    args: {
        theme: 'forest',
        obstacle: false,
    },
}

const Template = (args) => <Tile {...args} />

export const TileExample = Template.bind({})
TileExample.args = {
    theme: 'forest',
    obstacle: false,
}