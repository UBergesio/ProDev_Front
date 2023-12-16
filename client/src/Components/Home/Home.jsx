import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Link to="/about">
        <button className="bg-cyan-700"> hola delfi</button>
      </Link>
    </div>
  );
};
export default Home;
