import {ComponentStory, ComponentMeta} from '@storybook/react';

import ValueDescriptor, {ValueDescriptorProps} from '../components/ValueDescriptor/ValueDescriptor';

export default {
    title: 'Example/ValueDescriptor',
    component: ValueDescriptor
} as ComponentMeta<typeof ValueDescriptor>;

const Template: ComponentStory<typeof ValueDescriptor> = (args) => <ValueDescriptor {...args} />;

export const Deafult = Template.bind({})
Deafult.args = {
    description: 'Ganhos na Semana',
    value: 560332.02
}

export const DefaultCurrency = Template.bind({})
DefaultCurrency.args = {
    description: 'Ganhos na Semana',
    value: 560332.02
}

export const Primary = Template.bind({})
Primary.args = {
    description: 'Ganhos na Semana',
    value: 560332.02
}

export const PrimaryCurrency = Template.bind({})
PrimaryCurrency.args = {
    description: 'Ganhos na Semana',
    value: 560332.02
}