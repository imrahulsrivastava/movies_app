import Movies from "./Movies";
import Search from "./Search";

const Home = () => {
  return (
    <>
      <h1>Search Your Favourite Movie 😎🍿</h1>
      <div className="container">
        <Search />
        <Movies />
      </div>
    </>
  );
};

export default Home;
