import React from 'react';
import * as Styled from './styles';
import { View, Text } from 'react-native';

interface HeaderComponentProps {
    title?: string;
}

export default function HeaderComponent({ title }: HeaderComponentProps) {
    return (

        <Styled.Header>
            <Text>{title}</Text>
        </Styled.Header>
       
    );
};
