import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import  {data} from '../src/datas/data';
import Footer from '../src/components/footer/Footer';
import Navbar from '../src/components/navbar/Navbar';
import HomePage from '../src/views/homePage/HomePage'
import ApartmentPage from '../src/views/apartmentPage/ApartmentPage'
import AboutPage from '../src/views/aboutPage/AboutPage'
import Error404 from '../src/components/error404/Error404';



ReactDOM.render( 
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
,
  document.getElementById('root')
);

