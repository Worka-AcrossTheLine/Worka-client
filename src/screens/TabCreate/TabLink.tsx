import React from 'react'
import styled from 'styled-components/native'


import MakeJobTag from '../../components/MakeJobTagInput'

const Text = styled.Text`
    font-size: 100px;
    align-items: center;
`

const TabLink = () => {
    return (
        <Text>TabLink</Text>
        <MakeJobTagInput placeholder={placeholder} value={value} />
            
    )
}


export default TabLink