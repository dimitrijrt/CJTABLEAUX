import React from 'react';
import style from './grid.scss'

const ImagesList = () => {
  // Utilisation de Webpack pour charger toutes les images du dossier 'assets/images'
  const images = require.context('../../assets/img', false, /\.(png|jpe?g|gif|jpg)$/);
   const pastelsImages = require.context('../../assets/img/pastel', false, /\.(png|jpe?g|gif|jpg)$/);

  

  // Map des images pour créer une liste d'éléments img
  const imageList = images.keys().map(image => {
    const src = images(image);  // Récupère le chemin de l'image importée
    return <img key={image} src={src} alt={image} />;
  });


   const pastels = pastelsImages.keys().map(image => {
    const src = pastelsImages(image);
    return <img key={image} src={src} alt="Pastel" />;
  });
  






  


 



  return (
   
     
    <div className='grid'>
      <div className='twelve'>
        <h3 >TABLEAUX</h3>
      </div>
      <div className='gridimg'>
        <div className='imglist'>{imageList}</div>
      </div>
      <div className='twelve'>
              <h3 className='pastel'>Pastels</h3>
      </div>

       <div className='gridimg'>
          <div className='imglist'>{pastels}</div>
        </div>
    </div>
  );

};


export default ImagesList;
