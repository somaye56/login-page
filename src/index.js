import { MantineProvider } from '@mantine/core';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
   <MantineProvider withGlobalStyles withNormalizeCSS>
    <App/>
  </MantineProvider>
);

