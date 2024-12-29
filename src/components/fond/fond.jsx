
import manga from '../../assets/wall.webp'
import imgmanga from '../../assets/2.jpg'
import big from '../../assets/paint.jpeg'
import './fond.scss'
 
 
    function Fond () {

        return (
            <section className='fond'>
                
                 <div className='fondimg'>
                     <img src={big} alt='img' />
                    
                    <img  src={manga} alt='img' />
                    <img src={imgmanga} alt='img'/>
                   
                 </div>
                    
                    
            </section>
        )
        
        



    }
            
    

 export default Fond



