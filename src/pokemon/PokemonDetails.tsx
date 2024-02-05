import React, { useEffect, useState } from 'react';
import { PokemonDetail } from './interfaces/PokemonDetail';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { CardActionArea, CardActions, Container, Grid } from '@mui/material';
import { useParams } from 'react-router-dom';
import { getPokemonDetails } from './services/getPokemonDetails';
import { type } from 'os';

interface PokemonDetailsProps {
    
}

export const PokemonDetails: React.FC<PokemonDetailsProps> = () => {
    const {name} = useParams();
    const [selectedPokemonDetails, setSelectedPokemonDetails] = useState<PokemonDetail | undefined>(undefined);

    useEffect(() => {
        if (!name) return;

        getPokemonDetails(name)
        .then((response) => setSelectedPokemonDetails(response))

    }, []);

    return (
        <div>

            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <a href="/">Pokedex</a>
                    </Typography>
                </Toolbar>
            </AppBar>

            <Container maxWidth="lg">
                <Box mt={2}>
                    <img width='30%' height='auto' src={selectedPokemonDetails?.sprites.front_default} alt="{name}"/>
                </Box>
                <Typography variant='h2'>
                    {selectedPokemonDetails?.name}
                </Typography>
                {selectedPokemonDetails?.types.map((type) => <Typography>{type.type.name}</Typography>)}

                <Box display={'flex'} flexDirection={'row'}>
                    <Typography>
                        Espécie: 
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.species.name}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography>
                        Altura: 
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.height}
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography>
                        Peso: 
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.weight}    
                    </Typography>
                </Box>
                <Box display={'flex'} flexDirection={'row'}>
                    <Typography>
                        Habilidades:
                    </Typography>
                    <Typography>
                        {selectedPokemonDetails?.abilities.map((ability) => <Typography>{ability.ability.name}</Typography>)}
                    </Typography>
                </Box>
            </Container>

        </div>
    );
};

export default PokemonDetails;