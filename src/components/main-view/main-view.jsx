import { useEffect, useState } from 'react'; // Import statement for useState
import { MovieCard } from '../movie-card/movie-card'; // Import statement for MovieCard
import { MovieView } from '../movie-view/movie-view'; // Import statement for MovieView

export const MainView = () => { // MainView component
    const [movies, setMovies] = useState([]); //useState hook to store the state of the list of movies

    const [selectedMovie, setSelectedMovie] = useState(null); //useState hook to store the state of the selected movie

    useEffect(() => { //useEffect hook to retrieve the list of movies when the component is mounted
        fetch('https://themovieapi.herokuapp.com/movies') //fetches the list of movies from the API
            .then((response) => response.json()) //converts the response to JSON format
            .then((data) => { //stores the data in a state
                
                //maps over the list
                const moviesFromApi = data.map((doc) => { //maps over the list
                
                //returns a list of objects with the properties listed below
                return {
                    _id: movies._id, //movie._id prop
                    Title: movies.Title, //movie.Title prop
                    Description: movies.Description, //movie.Description prop
                    Genre: movies.Genre, //movie.Genre prop
                    Director: { //movie.Director prop
                        Name: movies.Director.Name, //movie.Director.Name prop
                        Bio: movies.Director.Bio, //movie.Director.Bio prop
                    },
                    ImagePath: movies.ImagePath, //movie.ImagePath prop
                    Featured: movies.Featured //movie.Featured prop
                };
                })
                setMovies(moviesFromApi); //sets the state of the list of movies
            })
            .catch((error) => { //logs any errors
                console.log('Error retrieving movies:', error); //logs any errors
            });
    }, []);

    if (selectedMovie) {
        return <MovieView movie={selectedMovie} onBackClick={() => //If the selected movie is true, returns the MovieView component
            setSelectedMovie(null) //setSelectedMovie prop
            }
        />; //If the selected movie is true, returns the MovieView component
    }

    if (movies.length === 0) { //If the list of movies is empty, returns this message
        return <div className='main-view'>The list is empty!</div>; //If the list of movies is empty, returns this message
    }
    return (//Returns the list of movies
        <div>
            {movies.map((movie) => { //Maps over the list of movies
                return <MovieCard 
                key={movie.id} //Key prop
                movie={movie} //Movie prop
                onMovieClick={(newSelectedMovie) => { //onMovieClick prop
                    setSelectedMovie(newSelectedMovie); //setSelectedMovie prop
                }}
                />;
            })}
        </div>
    );
};