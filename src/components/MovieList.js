import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MovieListItem from "./MovieListItem";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: theme.spacing(0, 0, 0, -4),
    "& > *": {
      margin: theme.spacing(4, 0, 0, 4),
    },
    [theme.breakpoints.down("xs")]: {
      justifyContent: "center",
    },
  },
  noResultsText: {
    fontWeight: theme.typography.fontWeightRegular,
    textAlign: "center",
  },
}));

const MovieList = (props) => {
  const { movies } = props;

  const classes = useStyles(props);

  if (!movies) {
    return (
      <Typography className={classes.noResultsText} variant="h6">
        No movies found
      </Typography>
    );
  }

  const renderList = () => (
    <div className={classes.root}>
      {movies.map((movie) => (
        <MovieListItem key={movie.id} movie={movie} />
      ))}
    </div>
  );

  return <>{renderList()}</>;
};

export default MovieList;
