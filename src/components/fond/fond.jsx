
import manga from '../../assets/wall.webp'
import imgmanga from '../../assets/img/pastel/panthb.webp'
import big from '../../assets/paint.jpeg'
import './fond.scss'
 
 
    function Fond () {

        return (
            <section className='fond'>
                 <div className='fondimg'>
                    <div className='test'>
                    
                        <img src={big} alt='img' />
                
                
                    <img  src={manga} alt='img' />
                    <img className="nature" src={imgmanga} alt='img'/>
                    </div>
                   
                 </div>
                 <span className='ban'>
            <h1 className='titre'>Oeuvres sur mesure : 100% fais à la main / Manga / Culture pop / Animaux / Portrait </h1>
            </span>
                    
            </section>
        )
        
        



    }
            
    

 export default Fond



