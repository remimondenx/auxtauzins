import React from 'react';
import { List, Datagrid, NumberField, TextField } from 'react-admin';

export default (props) => 
<List {...props}>
  <Datagrid rowClick="show">
    <NumberField source="id" />
    <TextField source="name" />
  </Datagrid>
</List>