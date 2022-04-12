import React from 'react';
import { Content, Form, Item, Input } from 'native-base';
export default function MyForm() {
    return (
        <Content>
            <Form>
                <Item>
                    <Input placeholder='Enter Email' />
                </Item>
                <Item last>
                    <Input placeholder='Enter Password' />
                </Item>
            </Form>
        </Content>
    );
}
