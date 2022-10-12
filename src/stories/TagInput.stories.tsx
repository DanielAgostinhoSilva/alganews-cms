import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../components/TagInput/TagInput';

export default {
    title: 'Example/TagInput',
    component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    tags: [
        {id: '1', text: 'Java'}
    ],
    placeholder: 'Insira as tags deste post'
}

export const VariousTags = Template.bind({})
VariousTags.args = {
    tags: [
        {id: '1', text: 'Java'},
        {id: '2', text: 'GO'},
        {id: '3', text: 'C++'},
        {id: '4', text: 'C#'},
        {id: '5', text: '.Net'},
        {id: '6', text: 'HTML'},
        {id: '7', text: 'CSS'},
        {id: '8', text: 'Javascript'},
    ],
    placeholder: 'Insira as tags deste post'
}


