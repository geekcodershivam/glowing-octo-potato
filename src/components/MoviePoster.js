import React from "react";
import CardMedia from "@material-ui/core/CardMedia";

export default function MoviePoster(props) {
  const { height, width, name } = props;
  const imageStyle = {};
  if (height) {
    imageStyle.height = height;
  }
  if (width) {
    imageStyle.width = width;
  }
  const path = `https://ui-avatars.com/api/?name=${name}`;

  return <CardMedia image={path} style={imageStyle} />;
}
