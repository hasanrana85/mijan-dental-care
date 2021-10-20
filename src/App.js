
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import AboutUs from './Pages/AboutUs/AboutUs';
import Services from './Pages/Home/Services/Services';
import Doctors from './Pages/Doctors/Doctors';
import ContactUs from './Pages/ContactUs/ContactUs';
import Header from './Pages/Shared/Header/Header';
import NotFound from './Pages/NotFound/NotFound';
import Registration from './Pages/Login/Registration/Registration';
import Footer from './Pages/Shared/Footer/Footer';
import AuthProvider from './context/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import ServiceDetails from './Pages/Home/ServiceDetails/ServiceDetails';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <AboutUs></AboutUs>
          </Route>
          <PrivateRoute path="/services">
            <Services></Services>
          </PrivateRoute>
          <Route path="/doctors">
            <Doctors></Doctors>
          </Route>
          <Route path="/contact">
            <ContactUs></ContactUs>
          </Route>
          <Route path="/login">
            <Registration></Registration>
          </Route>
          <Route path="/registration">
            <Registration></Registration>
          </Route>
          <Route path="/serviceDetails/:serviceAll">
            <ServiceDetails></ServiceDetails>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
