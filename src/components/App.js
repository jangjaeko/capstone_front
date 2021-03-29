import React, { Suspense } from 'react';
import { Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage"
import NavBar from "./views/Navbar/NavBar";
import StudentPage from "./views/StudentPage/StudentPage";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <Suspense fallback ={(<div>Loading...</div>)}>
            <NavBar/>
            <div style ={{paddingTop : '75px', minHeight: 'calc(100vh - 80px'}}>
                <Switch>
                    
                    <Route exact path = "/" component = {(LandingPage)}/>
                    <Route exact path = "/studentpage" component = {(StudentPage)}/>
                </Switch>

            </div>
            
        </Suspense>
    )
}

export default App;