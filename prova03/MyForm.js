import React, { useState } from 'react';
import { Content, Form, Item, Input, Text } from 'native-base';
export default function MyForm() {
    const [name, setName] = useState('')
    return (
        <Content>
            <Form>
                <Item>
                    <Input placeholder='Qual o seu nome?'
                        onChangeText={text => setName(text)}
                    />
                </Item>
                
            </Form>
            <Text>
                O nome digitado foi: {name}
            </Text>
        </Content>
    );
}

