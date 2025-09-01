

import './form.scss'
import painter from '../../assets/lahautb.webp'
 
 
    function Form () {

        return (
            <section className='commande'>
                
                 <div className='perso'>
                    <h3 className='portrait'>PORTRAIT PERSONNALISÉ</h3>
                   
                   
                 </div>
                 <span className='ban'>
            <h1 className='titrepas'>Obtenez un Portrait 100% personnalisé , de votre personnage préféré à votre animal préféré, nous nous adaptons à votre demande . </h1>
            </span>
                 
                
                <div className='imgcmd'>

               
                  <img src={painter} className="painter" alt='img' />
                   
                    <form  className='form' >
                        <label>Email</label>
                        <input type="email" name="user_email" placeholder='adresse mail' />
                        <label>Message</label>
                        <textarea name="message" placeholder='Message' />
                        <input type="submit" value="Send" id='input-submit' />
                    </form>
                 </div>
               
            </section>
           
        )
        
        



    }
            
    

 export default Form



