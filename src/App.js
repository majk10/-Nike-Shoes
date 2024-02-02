import React from 'react';
import Navbar from './Components/Navbar';
import Prosp from './Prosp';
import Data from './Data';

const App=(Props)=>{
  return(
  <>
<Navbar />
<Prosp 
// immages
    imgscr={Data[0].imgscr}
    imgscr2={Data[0].imgscr2}
    imgscr3={Data[0].imgscr3}
    imgscr4={Data[0].imgscr4}
    imgscr5={Data[0].imgscr5}
    imgscr6={Data[0].imgscr6}
// title
    title={Data[0].title}
    title2={Data[0].title2}
    title3={Data[0].title3}
    title4={Data[0].title4}
    title5={Data[0].title5}
    title6={Data[0].title6}
// text
    text={Data[0].text}
    text5={Data[0].text}
// price
    price={Data[0].price}
    price2={Data[0].price2}
    price3={Data[0].price3}
    price4={Data[0].price4}
    price5={Data[0].price5}
    price6={Data[0].price6}
// btn
    btn={Data[0].btn}
/>
  </>
  
  )
}
export default App;