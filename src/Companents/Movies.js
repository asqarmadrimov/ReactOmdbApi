import Movie from "./Movie";

export default function Movies(props) {
  const { movies = [] } = props;
  console.log(movies);

  return (
    <div className="container-flud">
      <ul className="d-flex justify-content-around flex-wrap mt-3">
        {movies.length ? movies.map(movie => (
          <Movie key={movie.imdbID} {...movie} />
        )) : <h1 className="alert alert-info lead">Bu nomli film topilmadi!!!</h1>}
      </ul>
    </div>
  )
}