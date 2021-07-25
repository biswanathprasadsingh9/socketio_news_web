import React from 'react'
import './scss/main.scss';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'

import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


import Home from './pages/Home'
import AddNews from './pages/AddNews'
import NewsByCategory from './pages/NewsByCategory'
import NewsView from './pages/NewsView'

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Container>
           <Route exact path='/' component={Home} />
           <Route exact path='/news/:category' component={NewsByCategory} />

           <Route exact path='/addnews' component={AddNews} />

           <Route exact path='/newsview/:id' component={NewsView} />


           <ToastContainer />
          </Container>
        </Switch>
      </Router>
    </>
  )
}