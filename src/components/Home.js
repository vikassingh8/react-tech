import React from "react";
import "../style/home.css";
import vr from "../assets/2.webp";
import {AiFillFacebook,AiFillGoogleCircle,AiFillApple} from "react-icons/ai";


export default function Home() {
  return (
    <>
      <div className="home">
        <main>
          <h1>techystar</h1>
          <p>all solutions of your problems</p>
        </main>
      </div>
      <div className="home2">
        <img src={vr} alt="vikas" />
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi
            ex suscipit laborum fuga, illum maiores temporibus ipsa quas,
            laudantium voluptatum hic illo. Excepturi aliquid provident enim nam
            incidunt omnis.
          </p>
        </div>
      </div>
      <div className="home3" id="about">
        <div>
          <h1>how we are</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse qui ipsa nulla quos, reiciendis minus voluptatem alias eius vero! Nisi autem deleniti facilis placeat. Corrupti velit unde aperiam nihil eos.</p>
        </div>
      </div>
      <div className="home4" id= "brands">
        <div>
          <h1>brands</h1>
          <article>
            <div style={{animationDelay:".5s"}}>
            <AiFillFacebook/>
            <p>facebook</p>
            </div>
            <div style={{animationDelay:".7s"}}>
            <AiFillGoogleCircle/>
            <p>google</p>
            </div>
            <div style={{animationDelay:"1s"}}>
            <AiFillApple/>
            <p>apple</p>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
