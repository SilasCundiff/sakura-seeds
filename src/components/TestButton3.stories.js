import React from 'react'
import TestButton3 from './TestButton3'


export default {
    title: 'Test/TestButton',
    component: TestButton3,
    argTypes: { onClick: { action: 'clicked' },
    },
}



const Template = ({theme, ...rest}) => {
    return <TestButton3 {...rest} />
}

export const ThirdButton = Template.bind({})
ThirdButton.args = {
    children: "Test Button",
}
