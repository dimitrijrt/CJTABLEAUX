
import datas from '../../data/data.json'
import pastels from '../../data/pastel.json'
import style from '../Pastel/grid.scss'
import { Link } from 'react-router-dom'
import Carroussel from '../../components/carrousel/carousel'
import Fond from '../../components/fond/fond'
import Home from '../../components/home/home'
import Footer from '../../components/Footer/footer'

export default function   Pastel() {

    return (
       
       
         <main>
            <Carroussel/>
           
            <Home/>
          
            
           
             <div  className='grid' id="pastel">

                <div className='twelve'>
                <h3 >PASTELS</h3>
                </div>
                <span className='ban'>
            <h1 className='titrepas'>Pastels sur mesure : 100% faites à la main :  Manga / Culture pop / Animaux / Portrait .</h1>
            </span>
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
