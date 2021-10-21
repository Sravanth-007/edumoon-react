import React , {Component} from 'react' ;
import Navbar from './components/navbar';
import  Header from './components/header';
import  Homeslider from './components/homeslider';
import Patners from './components/patners';
import  Latestevents from './components/latestevents';
import  Popularcourses from './components/popularcourses';
import  Testimonial from './components/testimonial';
import  Grid from './components/grid';
import  Footer from './components/footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/style.css';
 import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import uuid from 'uuid';



class App extends Component{

    render(){


        return(
        <div>
        <Navbar />
        <Header />
        <Homeslider />
        <Patners />
        <Latestevents />
        {<ImageSlider slides={SliderData} /> }
        <Popularcourses />
        <Testimonial />
        <Grid />
        <Footer />
          
           
             </div>
       
               
        );
    }

}


export default App;