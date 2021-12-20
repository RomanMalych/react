import React, {Fragment} from 'react';
import Header from "./components/header";

import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  App: {
    background: 'linear-gradient(165deg, rgba(86,112,104,1) 0%, rgba(51,58,78,0.8057598039215687) 100%, rgba(86,112,104,1) 100%)',
    minHeight: '100%'
  },
}))


const App = ({children}) => (
  <Fragment>
    <Header/>
    {children}
  </Fragment>
  );


export default App;
