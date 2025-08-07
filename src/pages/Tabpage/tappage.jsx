import React from 'react';
import { useParams } from 'react-router-dom';
import datas from '../../data/data.json'
import './tabpage.scss'
import Form from '../../components/Form/form'
import pasteldatas from '../../data/pastel.json'
import Footer from '../../components/Footer/footer'
import Carroussel from '../../components/carrousel/carousel'

const TableauPage = () => {
  const { id } = useParams();
  const tableau = datas.find(item => item.id.toString() === id);
 


  if (!tableau ) {
    return <div>Tableau non trouvé</div>;
  }


  const image = require(`../../assets/img/${tableau.img}`);

  

  return (

    <div>

    
    <Carroussel/>
    
    
    
    <section className='tabpage'>
        
        <div className='cartab'>
      <h1>{tableau.titre}</h1>
      <p>Taille:{tableau.taille}</p>
      <img className='imgtab' src={image} alt={tableau.title} />
    
      </div>
      
      

      
      <form  className='tabform' >
      <h3>COMMANDEZ VOTRE TABLEAU</h3>
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='adresse mail' />
                        <label>Message</label>
                        <textarea name="message" placeholder='Message' />
                        <input type="submit" value="Envoyer" id='input-submit' />
                    </form>
                    </section>
                     <Footer/>
    </div>


 
  );
};

export default TableauPage;