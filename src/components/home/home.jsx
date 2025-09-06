import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import manga from '../../assets/paint.jpeg'
import imgmanga from '../../assets/2.jpg'
import big from '../../assets/lahautb.webp'

import './home.scss'

 
    function Home() {

        return (
            <section className='homecar'>

           
            <Carousel autoPlay infiniteLoop  interval={2000} className='carousel'>
              
                <div className='manga'>
                    <img  src={manga} />
                    <p className="legend">Obtenez votre portrait en 2 étapes</p>
                </div>
                <div className='manga'>
                    <img src={imgmanga} />
                    <p className="legend">Choisissez une image</p>
                </div>
                <div >
                    <img className='manga' src={big} />
                    <p className="legend">Obtenez votre Portrait Personnalisé</p>
                </div>
                
            </Carousel>
            </section>
        )
        
        



    }
            
    

 export default Home



