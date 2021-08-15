import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Dialog,
  Paper,
  Button,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import MoviePoster from "./MoviePoster";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 200,
    minWidth: 200,
    cursor: "pointer",
  },
  title: {
    fontSize: 19,
  },
  rating: {
    display: "flex",
    marginTop: theme.spacing(0.75),
  },
  ratingText: {
    marginLeft: theme.spacing(0.5),
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const MovieListItem = (props) => {
  const { movie } = props;

  const classes = useStyles();
  const strTri = (str) => {
    return str.slice(0, 50).concat("...");
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.root} elevation={3} onClick={handleClickOpen}>
        <CardActionArea>
          <MoviePoster name={movie.title} height={300} width={200} />
          <CardContent>
            <Typography
              className={classes.title}
              gutterBottom
              variant="h6"
              style={{ fontWeight: "700" }}
            >
              {movie.title}
            </Typography>
            <Typography gutterBottom variant="overline">
              {movie.genres === "" ? "General" : movie.genres}
            </Typography>

            <Typography>{strTri(movie.description)}</Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle
          style={{ cursor: "move", fontWeight: "700" }}
          id="draggable-dialog-title"
        >
          {movie.title}
        </DialogTitle>
        <DialogContent>
          <MoviePoster name={movie.title} height={300} />

          <Typography gutterBottom variant="h6" style={{ fontWeight: "600" }}>
            {movie.genres === "" ? "General" : movie.genres}
          </Typography>
          <DialogContentText>{movie.description}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default MovieListItem;
