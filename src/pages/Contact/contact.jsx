import Footer from '../../components/Footer/footer'
import Header from '../../components/carrousel/carousel'


import painter from '../../assets/painter.jpg'
 
 
    function Contact () {

        return (

        
            <section className='commande'>
                 
                 <Header/>
                 <div className='twelve'>
                <h3 >Demande</h3>
                </div>
                 <span className='ban'>
              
                    <h1 className='titrepas'>Demande 100% personnalisée ,Envoyez nous une image ou une description et obtenez votre oeuvre . </h1>
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
                <Footer/>
            </section>
           
        )
        
        



    }
            
    

 export default Contact



