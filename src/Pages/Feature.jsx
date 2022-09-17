import React from 'react'
// import axios from "axios"
import {useState,useEffect} from "react"
import "./button.css"
import { useDispatch } from 'react-redux'
import {add} from "./Store/CartSlice"

function Feature() {
  const dispatch = useDispatch()
    const [info,changeInfo1] = useState([])
    // const sli = info.slice(0,9)
    // useEffect(()=>
    // {
    //     async function Contact()
    //     {
    //         const contact=await axios.get(`https://fakestoreapi.com/products`);
    //         changeInfo1(contact.data)
    //     }
    //     Contact();
    // },[])

    useEffect(()=>{
      const product = async()=>
      {
        const pro = await fetch("https://fakestoreapi.com/products")
        const prod = await pro.json()
        changeInfo1(prod)
      }
      product()
    },[])
  
    const addItem = (item)=>{
   dispatch(add(item))
    }

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
                info.map((item)=>
                {
                    return(
                        <div key="item" className="col-md-6 col-lg-3">
                        <div className="feature-block">
                        <h4>{item.title}</h4>
                         <img src={item.image} alt="img" />
                          <h3>
                           {item.price}
                          </h3>
            
                          
                    <button className="button-34" role="button" onClick={()=>addItem(item)}>Add to cart</button>


                        </div>
                      </div>

                    )
                })
            }
        
      
        </div>
      </div>
    </section>
    {/* End Features Section */}
    
    </div>
  )
}

export default Feature
