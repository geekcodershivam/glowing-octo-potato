import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import MoviePoster from './MoviePoster';
const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    minWidth: 200,
    cursor: 'pointer',
  },
  title: {
    fontSize: 19,
  },
  rating: {
    display: 'flex',
    marginTop: theme.spacing(0.75),
  },
  ratingText: {
    marginLeft: theme.spacing(0.5),
  },
}));

const MovieListItem = (props) => {
  const { movie } = props;

  const classes = useStyles();
  const strTri=(str)=>{
    return str.slice(0,50).concat('...')
  }

  return (
    <Card className={classes.root} elevation={3}>
      <CardActionArea>
      <MoviePoster name={movie.title} height={300} width={200} />
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6" style={{fontWeight: '700'}}>
            {movie.title}
          </Typography>
          <Typography gutterBottom variant="overline">{movie.genres===""?'General':movie.genres}</Typography>

          <Typography>{strTri(movie.description)}</Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default MovieListItem;
