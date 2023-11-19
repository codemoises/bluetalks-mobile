import React from 'react';
import * as Styled from './styles';
import { View, Text } from 'react-native';


export default function HeaderComponent({ title }) {
    return (

        <Styled.Header>
            <Text>{title}</Text>
        </Styled.Header>

    );
};
