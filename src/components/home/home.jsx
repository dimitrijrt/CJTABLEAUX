import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import manga from '../../assets/wall.webp'
import imgmanga from '../../assets/2.jpg'
import big from '../../assets/paint.jpeg'
import './home.scss'

 
    function Home() {

        return (
            <section className='home'>
            <h1 className='titre'>Tableaux sur mesure : Manga / Culture pop / Animaux.</h1>
            <h2></h2>
           
            <Carousel autoPlay infiniteLoop  className='carousel'>
              
                <div className='manga'>
                    <img  src={manga} />
                    <p className="legend">vos personnages de mangas préférés</p>
                </div>
                <div className='manga'>
                    <img src={imgmanga} />
                    <p className="legend">ANIMAUX</p>
                </div>
                <div >
                    <img className='manga' src={big} />
                    <p className="legend">Legend 3</p>
                </div>
                
            </Carousel>
            </section>
        )
        
        



    }
            
    

 export default Home



