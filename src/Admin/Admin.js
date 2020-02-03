import React from 'react';
import { Admin, Resource } from 'react-admin';
import dataProvider from './dataProvider';
import ListInfoSections from './InfoSections/ListInfoSections';
import ShowInfoSection from './InfoSections/ShowInfoSection';
import CreateInfoSection from './InfoSections/CreateInfoSection';
import EditInfoSection from './InfoSections/EditInfoSection';

export default () =>
  <Admin dataProvider={dataProvider}>
    <Resource name="info-sections" list={ListInfoSections} show={ShowInfoSection} create={CreateInfoSection} edit={EditInfoSection} />
  </Admin>
