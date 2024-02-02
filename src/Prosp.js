import React from "react";
import './Prosp.css';

const Prosp = (Props) => {
  return (
    <>
    <body>
    {/* 1st */}

    <div className="cont">
        <div className="Col-lg-3 my-3">
        <div className="card ody">
  <img src={Props.imgscr} className="card-img-top image img-fluid" alt="card image"/>
  <div className="card-body">
    <h5 className="card-title">{Props.title}</h5>
    <p className="card-text">{Props.text}</p>
    <p className="card-text">{Props.price}</p>
    <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>

{/* 2 */}

<div className="Col-lg-3 my-3 ">
      
      <div className="card ody">
<img src={Props.imgscr2} className="card-img-top image" alt="card image"/>
<div className="card-body">
  <h5 className="card-title">{Props.title2}</h5>
  <p className="card-text">{Props.text}</p>
  <p className="card-text">{Props.price2}</p>
  <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>

{/* 3 */}

<div className="Col-lg-3 my-3 cards">
      
      <div className="card ody">
<img src={Props.imgscr3} className="card-img-top image" alt="card image"/>
<div className="card-body">
  <h5 className="card-title">{Props.title3}</h5>
  <p className="card-text">{Props.text}</p>
  <p className="card-text">{Props.price3}</p>
  <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>

{/* 4 */}

<div className="Col-lg-3 my-3">
        <div className="card ody">
  <img src={Props.imgscr4} className="card-img-top image" alt="card image"/>
  <div className="card-body">
    <h5 className="card-title">{Props.title4}</h5>
    <p className="card-text">{Props.text}</p>
    <p className="card-text">{Props.price4}</p>
    <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>

{/* 5 */}

<div className="Col-lg-3 my-3 ">
      
      <div className="card ody">
<img src={Props.imgscr5} className="card-img-top image" alt="card image"/>
<div className="card-body">
  <h5 className="card-title">{Props.title5}</h5>
  <p className="card-text">{Props.text5}</p>
  <p className="card-text">{Props.price5}</p>
  <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>

{/* 6 */}

<div className="Col-lg-3 my-3 cards">
      
      <div className="card ody">
<img src={Props.imgscr6} className="card-img-top image" alt="card image"/>
<div className="card-body">
  <h5 className="card-title">{Props.title6}</h5>
  <p className="card-text">{Props.text}</p>
  <p className="card-text">{Props.price6}</p>
  <a href="#" className="btn btn-primary">{Props.btn}</a>
</div>
</div>
</div>



</div>
</body>
    </>
  )
}
export default Prosp;