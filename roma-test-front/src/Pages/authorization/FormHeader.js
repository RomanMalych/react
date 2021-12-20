import React from "react";
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useSyles = makeStyles((theme) => ({
  root: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    margin: theme.spacing(3,0,2),
    textAlign: "center",
    fontSize: "40px",
    color: "#6485b2",
  }
}))

export const FormHeader = () => {
  const styles = useSyles();

  return <Typography className={styles.root} component="h1" variant="h5">
      Authorization
  </Typography>
}