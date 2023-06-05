import useGenres from "../hooks/useGenres";

const GenreList = () => {
  const { data } = useGenres();
  return (
    <ul>
      {data.map((genre) => (
        <li key={genre.name}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
