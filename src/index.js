import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';


import { ChakraProvider } from '@chakra-ui/react';
import { extendTheme } from '@chakra-ui/react';
import { DepsProvider } from './shared/context/DependencyContext';
import { serviceFactory } from './services/ServiceFactory';
import {apiClientFactory} from "./shared/ApiClientFactory"
import {clientInstance} from "./shared/AxiosClient"

const apiClient = apiClientFactory(clientInstance);
const services = serviceFactory(apiClient)


const theme = extendTheme({
  fonts: {
    heading: "'Avenir Next', sans-serif",
    body: "'Avenir Next', sans-serif",
  },
});


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <DepsProvider services={services}>
      <ChakraProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ChakraProvider>

    </DepsProvider>
   
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
