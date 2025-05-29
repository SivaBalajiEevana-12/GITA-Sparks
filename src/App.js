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

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Routes>
      <Route path="/" element={<Main2 />} />
        <Route path="/register" element={<Main />} />
      </Routes>
    </ChakraProvider>
  );
}

export default App;
