import React, { useState } from 'react'
// import shoeImg  from "../assets/air-max-pulse.png";
import nikelogo from "../assets/nikelogo.png"
import { shoeData } from '../data';

const Home = () => {
  const [shoeImg,setshoeImg] = useState("../src/assets/air-max-pulse.png");
  const [mid,setmid] = useState(Math.floor(shoeData.length/2))

  const showleft = () => {
    // !(mid==2)
    if(mid > 1){
      setmid(mid-1);

      const newShoe = shoeData.find((shoe)=>{
        if(shoe.id === mid-1){
          return shoe
        }
      })
      setshoeImg(newShoe.src)
    }
  }
  // (!(mid==((shoeData.length)-1))) 
  const showright = () => {
    if(mid < shoeData.length ){
      setmid(mid+1);

      const newShoe = shoeData.find((shoe)=>{
        if(shoe.id === mid+1){
          return shoe
        }
      })
      setshoeImg(newShoe.src)
    }

  }


  return (
    <>
    <section className="home-container"></section>

    <div className="home-main-content">
      <div id="left-content">
        <h2>shop the latest trend and new release. <br /> <span>2023</span></h2>
        <p>we have been offering the best level of comfort, style and attention to details for years.</p>
        <button>Shop Now</button>
      </div>
      <div id="right-content">
        <img id='nikelogo' src={nikelogo} alt="" />
        <span id='nike'>NIKE</span>
        <img id='mainshoe' src={shoeImg} alt="shoeimg" />

        <div id="shoe-drawer">
          <i className="fa-solid fa-angle-left" onClick={showleft}></i>

            <div id="drawer-shoes">
              {shoeData.map((shoe)=>{

                // console.log(shoe.src)
                if((shoe.id <= mid && shoe.id > mid-2) || 
                   (shoe.id >= mid && shoe.id < mid+2)){
                      return <div key={shoe.id} className="shoe-box">
                      <img src={shoe.src} alt="" />
                    </div>
                   }
              })}
            </div>

          <i className="fa-solid fa-angle-right" onClick={showright}></i>
        </div>
      </div>
    </div>
  </> 
  )
}

export default Home