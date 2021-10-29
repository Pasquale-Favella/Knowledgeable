import { AnimatePresence } from "framer-motion";
import { Home } from "../../pages/Home/Home";
import { NotFound } from "../../pages/NotFound/NotFound";
import { Results } from "../../pages/Results/Results";
import {
    Switch,
    Route
} from "react-router-dom";
import { WikiPage } from "../../pages/WikiPage/WikiPage";

export const Root = ({location})=>{
    return (
        <AnimatePresence exitBeforeEnter>
            <Switch location={location} key={location.pathname}>

              <Route path="/" component={Home} exact key="home"/>
                
              <Route path="/search/:term" component={Results}  key="results"/>
              <Route path="/wiki/:title" component={WikiPage}  key="wikipage"/>
              <Route  component={NotFound}  key="notfound"/>  

            </Switch>
          </AnimatePresence>
    )
}