import React from 'react'
import TestButton from './TestButton'

export default {
    title: 'Test/TestButton',
    component: TestButton,
    argTypes: { onClick: { action: 'clicked' } },
}

const Template = args => <TestButton {...args} />

export const FirstButton = Template.bind({})
FirstButton.args = {
    children: "Test Button",
}