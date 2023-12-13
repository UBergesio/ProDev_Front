import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">
        <button> hola delfi</button>
      </Link>
    </div>
  );
};

export default Home;
