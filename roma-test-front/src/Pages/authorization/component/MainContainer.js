import React from "react";
import {Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  }
}))

export const MainContainer = ({children, ...props}) => {
  const styles = makeStyles()

  return <Container className={styles.root} container="main" maxWidth="xs" {...props}>
    {children}
  </Container>
}