import Maze from './Maze'

export default {
    title: 'Maze',
    component: Maze,
    tags: ['autodocs'],
    args: {
        dimY: 5,
        dimX: 5,
        skin: 'knight',
        theme: 'forest',
    },
}


const Template = (args) => <Maze {...args} />

export const MazeTest = Template.bind({})
MazeTest.args = {
        dimY: 5,
        dimX: 5,
        skin: 'knight',
        theme: 'forest',
}