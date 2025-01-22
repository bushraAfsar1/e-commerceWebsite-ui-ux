import Image from "next/image";
import heroImg from '../../../public/images/heroSection.jpg'
import livingRoom from '../../../public/images/livingRoom.png'
import diningRoom from '../../../public/images/dining.png'
import bedRoom from '../../../public/images/bedRoom.png'
import share from '../../../public/images/Share.png'

import Link from "next/link";

export default function HeroSection() {
    return (
      <div >
       <div>
       <Image
            src={heroImg}
     alt="Logo"
     width={1440}
         height={1000}
   />   
       </div>

       <div className="imgPrts">
        <div className="headings">
        <h2 >Browse the Range</h2>
        <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit.deserunt necessitatibus ea voluptatum.</span>
        </div>
        <div className="imgs">
            <div>
            <Image
            src={livingRoom}
     alt="Living"
     width={300}
         height={400}
   />
   <span className="text1">Living</span>
            </div>
        
   <div>
   <Image
   src={diningRoom}
alt="Dining"
width={300}
height={400}
/> 
<span className="text1">Dining</span>
    </div> 
    <div>
    <Image
            src={bedRoom}
     alt="Bed"
     width={300}
         height={400}
   />  
   <span className="text1"> Bed </span>
    </div>
        </div>
       </div>

       <div className="prodDiv">
        <Link className="prodButton" href='../../products'> See Our Products</Link>
       </div>

       <div>
       <Image
            src={share}
     alt="Bed"
     width={1440}
         height={400}
   /> 
       </div>





      </div>
    );
  }
  