import React from 'react'

import './leon.css'
import { Link } from 'react-router-dom';

const Landing = () => {

  const user = JSON.parse(localStorage.getItem('user'))
    return (
        <div classNameName='container-fluid'>
            {/* <!-- start landing section --> */}
<div className ="landing" >
    <div className ="intro-text">
</div>
</div>

<div className="features">
<div className="container">
<div className="feat">
<i className="fas fa-atom fa-3x"></i>
<h3>Share your paintings
</h3>
<p>Share your unique paintings in the largest professional platform to display and market artworks </p>
</div>
<div className="feat">
        <i className="fab fa-angellist fa-3x"></i>
<h3>Enjoy exploring various paintings and courses</h3>
<p>Register in the best courses for learning drawing of various kinds to help develop your talent.</p>
</div>


<div className="feat">
<i className="fab fa-apple fa-3x"></i>
<h3>Buy your favorite paintings and make your own order</h3>
<p>make your own order from your favorite artist and we will deliver it to you as soon as possible.</p>
    </div>
</div>
</div>
<div className="services" id="services">
<div className="container">
<h2 className="special-heading">services</h2>
{/* <!-- <p>Don't be busy ,be productive</p> --> */}
<div className="services-content">
<div className="col">
{/* <!-- start servic --> */}
<div className="srv">
<i className="fas fa-palette fa-2x"  ></i>
<div className="text">
<h3>learning drawing
</h3>
<p>hello there you are one of the specialest in the world and here you will found all serevices that you need</p>
</div>
</div>
<div className="srv">
<i className="fas fa-sketch fa-2x"  ></i>
<div className="text">
<h3>Events organization</h3>

           <p>hello there you are one of the specialest in the world and here you will found all serevices that you need</p>


        </div>
          </div>
        {/* <!-- end servic --> */}
    </div>
       <div className="col2">
        {/* <!-- start servic --> */}
        <div className="srv">
          <i className="fas fa-vector-square fa-2x"  ></i>
          <div className="text">
            <h3>Selling art paintings</h3>

              <p>hello there you are one of the specialest in the world and here you will found all serevices that you need</p>
          

          </div>
        </div>
        <div className="srv">
            <i className="fas fa-pencil-ruler fa-2x"  ></i>
            <div className="text">
              <h3>reading books</h3>
  
                <p>hello there you are one of the specialest in the world and here you will found all serevices that you need</p>
            
  
            </div>
          </div>
        {/* <!-- end servic --> */}
    </div>
    <div className="col3">
<div className="image  imc">
<img src="LogoMakerCa-1620443326766.png"alt="" title="Art corner :Gallery of arts"/>

</div>

    </div>
</div>
</div>
</div>
{/* <!-- end services --> */}


{/* <!-- end portfolio --> */}
{/* <!-- start about --> */}

<div className="about" id="about">
  <div className="container">
  <h2 className="special-heading">About Us</h2>
  {/* <!-- <p>Less is more work .</p> --> */}
  <div className="about-content">
<div className="imagea">
  <img src="LogoMakerCa-1620443326766.png" classNameName='rounded' alt="" title="prog/ Haitham Gomaa" />
</div>
<div className="texta">
  <p>Art Corner, in short it is a website that  allows all artists and painters in Egypt and abroad to display and market their various 
    artworks that deserve to appear on their own professional platform. It allows users to follow 
    different educational courses for all types of drawing And buy their favorite paintings.</p>
<hr/>
<p> Discover and see the largest collection of distinctive paintings and courses
.</p>
<div className="button-div">
    
    {!user? (
      <>
        <Link to={'/register'}><button className="btn btn-success m-1">Sign up</button></Link>
        <Link to={'/login'}><button className="btn btn-primary">Sign in</button></Link>
        
      </>
    ):""}
        
        
    </div> 

</div>
  </div>
  </div>
  </div>

{/* <!-- end about --> */}
{/* <!-- start contact --> */}
<div className="contact" id="contact">
<div className="container">
<h2 className="special-heading" >contact</h2>
{/* <!-- <p>We are born to creat</p> --> */}
<div className="info">
<p className="label">
Feel free to drop us a link at:
</p>
<a className="link" href="mailto: Art_Corer@gmail.com?subject=contact">Art_Corer@gmail.com</a>
<div className="social">
Find us on social media 
<a  href="/"> <i className="fab fa-youtube"></i></a>
<a  href="/"> <i className="fab fa-facebook"></i></a>
<a  href="/"> <i className="fab fa-twitter"></i></a>

</div>
</div>

</div>


<button className="up">
<a href="landing"><i className="fa-solid fa-angles-up"></i>
</a>



</button>
</div>

{/* <!-- end contact --> */}
{/* <!-- start footer  --> */}
<div className="footer">
&copy;2022 <span>Art Corner</span> All right Reserved
 
</div>
        </div>
    )
}

export default Landing