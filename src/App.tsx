import React from 'react';
import Pokedex from './pokedex/Pokedex';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PokemonDetails from './pokemon/PokemonDetails';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface AppProps{

}

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <QueryClientProvider client={new QueryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Pokedex/>}/>
          <Route path="/pokemon/:name" element={<PokemonDetails/>}/>
        </Routes>
      </BrowserRouter>
      <ReactQueryDevtools initialIsOpen={false}/>     
    </QueryClientProvider>
  )
}

export default App;
