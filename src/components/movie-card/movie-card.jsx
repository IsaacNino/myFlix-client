import PropTypes from 'prop-types'; //import statement for PropTypes
import { Button, Card } from "react-bootstrap"; //import statement for Button and Card from react-bootstrap

import './movie-card.scss'; //import statement for movie-card.scss file

export const MovieCard = ({ movie, onMovieClick }) => { //MovieCard component
    return (
        <Card  className="h-100" onClick={() => onMovieClick(movie)}>
            <Card.Img variant="top" src={movie.ImagePath} /> 
            <Card.Body>
                <Card.Title>{movie.Title}</Card.Title>
                <Card.Text>{movie.Description}</Card.Text>
            </Card.Body>
        </Card>
    );
};

//here is where we define all the props constraints for the MovieCard component
MovieCard.propTypes = {
    movie: PropTypes.shape({
        _id: PropTypes.string.isRequired, //id of movie in string format
        Title: PropTypes.string.isRequired, //title of movie in string format
        Description: PropTypes.string.isRequired, //description of movie in string format
        Genre: PropTypes.string.isRequired, //genre of movie in string format
        Director: PropTypes.string.isRequired, //director of movie in object format
        ImagePath: PropTypes.string.isRequired, //image path of movie in string format
        Featured: PropTypes.bool.isRequired //featured status of movie in boolean format
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired //onMovieClick prop
};