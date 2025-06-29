import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { Logo } from './Logo';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { BrowserRouter } from 'react-router-dom';
import Main2 from './Main2';
import Main from './Main';
import WhatsApp from './WhatsApp';
import Main4 from './Main4';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="/" element={<Main2 />} />
        <Route path="/register" element={<Main />} />
        <Route path='/whatsapp' element={<WhatsApp/>}/>
        <Route path='/new' element={<Main4/>}/>
      </Routes>
    </ChakraProvider>
  );
}

export default App;
