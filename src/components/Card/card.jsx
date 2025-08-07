
import datas from '../../data/data.json'
import pastels from '../../data/pastel.json'
import './card.scss'
import { Link } from 'react-router-dom'
import Carroussel from '../../components/carrousel/carousel'
import Fond from '../../components/fond/fond'
import Home from '../../components/home/home'
import Footer from '../../components/Footer/footer'

export default function Gallery() {

    return (
       
       
         <main>
            <Carroussel/>
            <Fond/>
            <Home/>
             <div  className='grid'>

                <div className='twelve'>
                <h3 >TABLEAUX</h3>
                </div>
                <div className='grille'>
          
            {datas.map(data => {
                 
                 const image = require(`../../assets/img/${data.img}`)  
                return (
                   
                 
                   
                    <div className='tableau' >
                         <Link to={`/oeuvre/${data.id}`} className="gallery_card">
                        <   img  className="imglist" src={image} alt={data.titre} />
                        </Link>
                        <h3>{data.titre}</h3>
                        <h3>{data.taille}</h3>
                  
                    </div>
                   
                
                )
            })}
             </div>
        
             </div>
            

             <div  className='grid' id="pastel">

                <div className='twelve'>
                <h3 >PASTELS</h3>
                </div>
                <div className='grille'>

                {pastels.map(data => {
                
                const image = require(`../../assets/img/pastel/${data.img}`)  
                return (
                
                
                
                    <div className='tableau' >
                        <Link to={`/pastel/${data.id}`} className="gallery_card">
                        <   img  className="imglist" src={image} alt={data.titre} />
                        </Link>
                        <h3>{data.titre}</h3>
                        <h3>{data.taille}</h3>
                
                    </div>
            
                )
                })}
                </div>

                </div>
                <Footer/>
           </main>
         
             
            
       
    )
}
