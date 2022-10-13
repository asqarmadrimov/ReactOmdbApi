export default function Movie(props) {
  const { Title, Year, imdbID, Type, Poster } = props;

  return (
      <li key={imdbID} className="card m-2 w-25">
        <img src={Poster} class="card-img-top" alt={Title} />
        <div className="card-body">
          <h5 className="card-title">{Title}</h5>
          <p className="card-text text-start">{Year}</p>
          <p className="card-text text-start">{Type}</p>
        </div>
      </li>
  )
}