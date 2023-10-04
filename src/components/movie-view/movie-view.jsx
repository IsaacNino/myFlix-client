import "./movie-view.scss"; //import statement for movie-view.scss file

export const MovieView = ({ movie, onBackClick }) => { // MovieView component
    return (
        <div>
            <div>
                <img 
                    className="w-100"
                    src={movie.ImagePath}
                />
            </div>
            <div>
                <span>Title: </span>
                <span>{movie.Title}</span>
            </div>
            <div>
                <span>Description: </span>
                <span>{movie.Description}</span>
            </div>
            <div>
                <span>Genre: </span>
                <span>{movie.Genre.Name}</span>
            </div>
            <div>
                <span>Director: </span>
                <span>{movie.Director.Name}</span>
            </div>
            <button onClick={onBackClick} className="back-button">Back</button> 
        </div>
    );
};
