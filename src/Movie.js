import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'
import styled from 'styled-components';
import Overdrive from 'react-overdrive';

const POSTER_PATH = 'http://image.tmdb.org/t/p/w154';

const Movie = ({movie}) => {
  
    return (
       
            <Link to={`/${movie.id}`}>
                <Overdrive id={movie.id}>
                    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title}/>
                </Overdrive>
            </Link>
            
      
        )
    
}

//shap allow you to pass in another object were we define the props coming in

Movie.propTypes = {
    movie: PropTypes.shape({
        title:PropTypes.string.isRequired,
    }),
}

export default Movie

export const Poster = styled.img`
    box-shadow: 0 0 35px black;
`