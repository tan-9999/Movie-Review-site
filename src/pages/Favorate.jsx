import '../css/Favorite.css';
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';

function Favorite() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <div className='favorites'>
                <h2>Your Favorites</h2>
                <div className="movies-grid">
                    {favorites.map((movie) => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </div>
        );
    } else {
        return (
            <div className="favorites-empty">
                <h2>Currently Empty</h2>
                <p>Movies need to be added soon...</p>
            </div>
        );
    }
}

export default Favorite;
