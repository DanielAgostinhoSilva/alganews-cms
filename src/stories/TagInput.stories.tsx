import { Story, Meta } from '@storybook/react';
import TagInput, { TagInputProps } from '../components/TagInput/TagInput';

export default {
    title: 'Example/TagInput',
    component: TagInput,
} as Meta;

const Template: Story<TagInputProps> = (args) => <TagInput {...args} />;

export const Default = Template.bind({})
Default.args = {
    tags: [{id: '1', text: 'Java'}],
    placeholder: 'Insira as tags deste post'
}

