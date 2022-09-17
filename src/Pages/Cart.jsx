import React from 'react'
import { useSelector } from 'react-redux'


const Cart = () => {
  
  const cartadd =  useSelector((item)=>item.Cart)


  return (
    
    <div>
    {/* ======= Features Section ======= */}
  <section id="features" className="padd-section text-center">
    <div className="container" data-aos="fade-up">
      <div className="section-title text-center">
        <h2>Amazing Features.</h2>
        <p className="separator">Integer cursus bibendum augue ac cursus .</p>
      </div>
      <div className="row" data-aos="fade-up" data-aos-delay={100}>
        
                 
      {
                cartadd.map((item,index)=>
                {
                    return(
                        <div className="col-md-6 col-lg-3">
                        <div className="feature-block">
                        <h4>Title</h4>
                         <img src="" alt="img" />
                          <h3>
                           price
                          </h3>
                          <h4>
                           price
                          </h4>
            
                          
                    <button className="button-34" role="button" >Remove</button>


                        </div>
                      </div>

                    )
                })
            }

                  
              
          
      
    
      </div>
    </div>
  </section>
  </div>

  )
}

export default Cart
