import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import {DataProvider} from "./DataContext";
import {FormHeader} from "./FormHeader";
import {Step1} from "./Step1";

const SignIn = () => (
  <DataProvider>
    <BrowserRouter>
      <>
        <FormHeader/>
            <Switch>
              <Route exact path="/authorization/step1" component={Step1}/>
              {/*<Route  path="/authorization/step2" component={Step2}/>*/}
              {/*<Route  path="/authorization/step3" component={Step3}/>*/}
              {/*<Route  path="/authorization/result" component={Result}/>*/}
            </Switch>
      </>
    </BrowserRouter>
  </DataProvider>
)

export default SignIn;