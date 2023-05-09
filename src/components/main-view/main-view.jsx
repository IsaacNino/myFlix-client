import { useState } from 'react'; // Import statement for useState
import { MovieCard } from '../movie-card/movie-card'; // Import statement for MovieCard
import { MovieView } from '../movie-view/movie-view'; // Import statement for MovieView

export const MainView = () => { // MainView component
    const [movies, setMovies] = useState([
        { id: '640e48ee1af2df3dc96b6f8c2', 
            Title: "Pearl", 
            Description: "In 1918 during the influenza pandemic, Pearl is a young woman living with her German immigrant parents on their Texas homestead while her husband, Howard, serves in World War I. Pearl's father is infirm and paralyzed, and her domineering mother, Ruth, insists that she help care for both him and the farm. Pearl, longing for a more exciting life, is captivated by the films she sees at the local cinema and aspires to become a chorus girl, much to Ruth's disapproval. However, Pearl also shows signs of being a disturbed individual.",
            Genre: {
                Name: "Horror",
                Description: "Evoking feelings of fear, dread, and terror in the audience. It typically includes themes such as the supernatural, the unknown, and the macabre, and often features suspenseful and terrifying elements, such as jump scares, gore, and graphic violence."
            },
            Rating: "R",
            Director: {
                Name: "Ti West",
                Bio:"Ti West is most notable for directing horror films, as well as being an actor, writer, producer, and editor.",
                Birth: "10/05/1980",
                Death: "N/A"
            },
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/5/5b/Pearl_theatricalposter.jpg",
            Featured: true    
        },
        { id:'640d476f1af2df3dc9b6f8c1', 
            Title: "Perfect Blue", 
            Description: "A singer quits her band to become an actress and sheds her good girl image to further her career.",
            Genre: {
                Name: "Thriller",
                Description: "Get familiar with the edge of your seat. Enjoy suspenseful and exciting elements, such as a fast-paced plot, unexpected twists, and intense action sequences."
            },
            Rating: "R",
            Director: {
                Name: "Satoshi Kon",
                Bio:"Satoshi Kon was born in 1963. He studied at the Musashino College of the Arts.",
                Birth: "10/12/1963",
                Death: "08/24/2010"
            },
            ImagePath: "https://upload.wikimedia.org/wikipedia/en/thumb/2/2a/Perfectblueposter.png/220px-Perfectblueposter.png",
            Featured: true    
        },
        { id: '640d36261af2df3dc9b6f8ba', 
            Title: "The Iron Giant", 
            Description: "A giant alien robot crash lands near the small town of Rockewell, Maine, in 1957. Exploring the area, a local 9-year-old boy Hogarth, discovers the robot, and soon forms an unlikely friendship with him.",
            Genre: {
                Name: "Adventure",
                Description: "Embark on a journey or quest, in search of treasure, knowledge, or self-discovery. Witness action-packed sequences, and feel a sense of danger and excitement."
            },
            Rating: "PG",
            Director: {
                Name: "Brad Bird",
                Bio:"Phillip Bradley Bird is an American director, screenwriter, animator, producer and occasional voice actor, known for both animated and live-action films.",
                Birth: "09/24/1957",
                Death: "N/A"
            },
            ImagePath: "https://en.wikipedia.org/wiki/File:The_Iron_Giant_poster.JPG",
            Featured: true    
        }
    ]); 

    const [selectedMovie, setSelectedMovie] = useState(null); //useState hook to store the state of the selected movie

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