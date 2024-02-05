import React from 'react';
import styled from 'styled-components';
import { PokemonListInterface } from '../../pokemon/services/listPokemons';

import { useNavigate } from 'react-router-dom';
import { Card, CardActionArea, CardContent, CardMedia, Chip, Typography } from '@mui/material';
import { PokemonDetail } from '../../pokemon/interfaces/PokemonDetail';

interface PokedexCardProps {
    pokemon: PokemonDetail
}

// const Card = styled.section`
//     padding: 4em;
//     border-radius: .6em;
//     background: papayawhip;
// `;

export const PokedexCard: React.FC<PokedexCardProps> = ({pokemon}) => {
    const navigate = useNavigate();

    function handleClick() {
        navigate(`/pokemon/${pokemon.name}`);
      }
    return (
            <Card onClick={handleClick} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    height="50%"
                    image={pokemon.sprites.front_default}
                    alt={pokemon.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {pokemon.types.map((type) => <Chip label={type.type.name} variant="outlined"/>)}
                    </Typography>
                </CardContent>
            </Card>
    );
};

export default PokedexCard;