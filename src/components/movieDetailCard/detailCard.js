function DetailsCard(props) {
  return (
    <>
      <div className="movie_card" id="bright">
        <div className="info_section">
          <div className="movie_header">
            <img
              className="locandina"
              src={`https://image.tmdb.org/t/p/w500/${props.poster}`}
              alt="jj"
            />
            <h1>{props.title}</h1>
            <h4>
              {props.releaseDate}, {props.lang}
            </h4>
          </div>
          <div className="movie_desc">
            <p className="text">{props.content}...</p>
            <div className="text-white">
              <span className="fw-bold fs-4">
                <i
                  className="fa-solid fa-star me-2"
                  style={{ color: "#FFD43B" }}
                ></i>
                {props.vote}
              </span>
            </div>
          </div>
        </div>
        <div>
          <img
            className="blur_back  "
            src={`https://image.tmdb.org/t/p/w500/${props.bgImg}`}
            alt="jj"
          />
        </div>
      </div>
    </>
  );
}

export default DetailsCard;
