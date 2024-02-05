import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PokemonListInterface, listPokemons } from '../pokemon/services/listPokemons';
import { getPokemonDetails } from '../pokemon/services/getPokemonDetails';
import { PokemonDetail } from '../pokemon/interfaces/PokemonDetail';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CardActionArea, CardActions, CircularProgress, Container, Grid, LinearProgress } from '@mui/material';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import PokedexCard from './components/PokedexCard';
import { useQuery } from 'react-query';


interface PokedexProps {
    
}

export const Pokedex: React.FC<PokedexProps> = () => {
    const {data, isLoading, isRefetching} = useQuery(`listPokemons`, listPokemons)

    return (
        <div>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/">Pokedex</a>
                    </Typography>
                </Toolbar>
                {isRefetching && <LinearProgress variant='indeterminate' color='secondary'/>}
            </AppBar>

            <Container maxWidth="lg">

                {!isLoading ? (

                    <Box mt={2}>
                        <Grid container spacing={2}>
                            {data?.results.map((pokemon) => (
                                <>
                                    <Grid item xs={12} lg={3}>
                                        <PokedexCard pokemon={pokemon}/>
                                    </Grid>
                                </>
                            ))}
                        </Grid>

                    </Box>

                ): (
                    <div><CircularProgress/></div>
                )}

            </Container>

        </div>
    );
};

export default Pokedex;