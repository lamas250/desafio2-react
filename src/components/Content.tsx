import { MovieCard } from "./MovieCard"

export function Content({movies, selectedGenre}) {
  
  if(selectedGenre) {
    if(movies || movies > 0){
      return (
        <div className="container">
          <header>
            <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
          </header>
    
          <main>
            <div className="movies-list">
              {movies.map(movie => (
                <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
              ))}
            </div>
          </main>
        </div>
      )
    }else{
      return <></>
    }
  }else {
    return <></>
  }
}