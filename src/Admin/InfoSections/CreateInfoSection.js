import React from 'react';
import { Create, SimpleForm, DisabledInput, TextInput, NumberInput } from 'react-admin';

export default (props) => (
    <Create {...props}>
        <SimpleForm>
            <TextInput source="name" />
        </SimpleForm>
    </Create>
);