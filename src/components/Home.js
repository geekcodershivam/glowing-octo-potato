import React, { useState,useEffect } from "react";
import { connect } from "react-redux";
import MovieList from "./MovieList";
import Pagination from "@material-ui/lab/Pagination";
import { fetch_movies,fetch_NextPrev } from "../actions/moviesActions";
import Footer from "./Footer";
import Header from "./Header";

function Home(props) {
  const [SearchItem, setSearch] = useState([]);
  const [Totalpage, setTotalPage] = useState(null);

  let movies=props.movies.data ? props.movies.data: props.movies.results

  useEffect(() => {
    props.fetch_movies();
    setTotalPage(null)
  }, []);

  const [page, setPage] = useState(0);


  const handleChange = (event, value) => {
    setPage(value);
    props.fetch_NextPrev(value+1)
  };

  const Search=(str)=>{

    const results = movies.filter((movie) =>
      movie.title.toLowerCase().includes(str.toLowerCase())
    );

    setSearch(results)
    setTotalPage(0)
    console.log(SearchItem)
  }

  return (
    <>
      <Header keyItem={Search}/>
      <MovieList movies={SearchItem.length===0 ? movies : SearchItem} />
      <Pagination style={{marginTop:'20px',marginBottom:'30px', justifyContent: 'center'}}count={Totalpage===null?props.movies.count:Totalpage} page={page} onChange={handleChange} />
      <Footer/>
    </>
  );
}

const mapStateToProps = (state) => {
  return { movies: state.movies };
};
export default connect(mapStateToProps, { fetch_movies,fetch_NextPrev })(Home);
