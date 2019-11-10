import React from 'react';
import { Show, SimpleShowLayout, NumberField, TextField } from 'react-admin';

export default (props) => 
<Show {...props}>
  <SimpleShowLayout rowClick="show">
    <NumberField source="id" />
    <TextField source="name" />
  </SimpleShowLayout>
</Show>