import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  {data} from '../../datas/data';
import Footer from '../footer/Footer';
import Navbar from '../navbar/Navbar';
import HomePage from '../../views/homePage/HomePage'
import ApartmentPage from '../../views/apartmentPage/ApartmentPage'
import AboutPage from '../../views/aboutPage/AboutPage'
import Error404 from '../error404/Error404';
class App extends Component {
    render() {
        return (
                      
              <Router>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/'>
                <HomePage />
            </Route>
            <Route exact path="/apartment/:id" render={(props) => (
                <ApartmentPage {...props} apartments={data} />
                )}/>
            <Route exact path='/About'>
              <AboutPage />
            </Route>
            <Route>
              <Error404 />
            </Route>
          </Switch>
          <Footer />
        </div>
      </Router>
    )
  }
}
 export default App