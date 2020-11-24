// in src/MyLayout.js
import * as React from 'react';
import { Layout } from 'react-admin';
import MyAppBar from './MyAppBar';
import MyMenu from './MyMenu'

const MyLayout = (props) => <Layout {...props} appBar={MyAppBar} menu={MyMenu}/>;

export default MyLayout;