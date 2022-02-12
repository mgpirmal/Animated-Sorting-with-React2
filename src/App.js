import './App.css';
import {useEffect,useState} from "react";
import Movie from "./Movies";
import Filter from "./Filter";
import Nav from './Nav';
import {motion, AnimatePresence} from "framer-motion";

function App() {

// store in popular and setPopular will modify popular
// useState([]) since we expect an array
  const [popular, setPopular] = useState([]);
// This state will copy popular and filter
  const [filtered, setFiltered] = useState([]);
  const [activeGenre, setActiveGenre] = useState(0);


  // useEffect is used to render movies when component is rendered. Also when component is updated

  useEffect(() => {
    fetchPopular();
  },[]);


    const fetchPopular = async() => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6d1c88a9fc00c5f98aa820fac7499a87");
    const movies = await data.json();
    console.log(movies);
    setPopular(movies.results);
    setFiltered(movies.results);
    }


    return (
      <div>
        <Nav />
      <div className="App">
        
        <Filter popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre}/>
        {/* using framer motion to give animations to elements such as this div */}
          <motion.div layout className="popular-movies">
            {/* AnimatePresence is not needed but just give a fade out effect */}
            <AnimatePresence>
            {filtered.map(movie => {
              return <Movie key={movie.id} movie={movie} />;
            })}
            </AnimatePresence>
          </motion.div>
      </div>
      </div>
    )

}

export default App;