

import './form.scss'
import painter from '../../assets/lahautb.webp'
 
 
    function Form () {

        return (
            <section className='commande'>
                
                 <div className='perso'>
                    <h3 className='portrait'>PORTRAIT PERSONNALISÉ</h3>
                 </div>
                 <p></p>

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
                 <p className='description'>Bénéficiez de tableaux 100% fais à la main par un artiste peintre.Obtenez un Tableau personnalisé , De votre personnage préféré à votre animal préféré, demandez nous ce que vous souhaitez , nous le peindrons. </p>
            </section>
           
        )
        
        



    }
            
    

 export default Form



