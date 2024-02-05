import React from 'react';
import Pokedex from './pokedex/Pokedex';
import { Route } from 'react-router-dom';
import { PokemonDetails } from './pokemon/PokemonDetails';

interface RoutesProps {
    
}

const Routes: React.FC<RoutesProps> = () => {
    return (
        <Routes>
            <Route path='/' element={<Pokedex/>}/>
            <Route path='/pokemon/:name' element={<PokemonDetails/>}/>
        </Routes>
    );
};

export default Routes;