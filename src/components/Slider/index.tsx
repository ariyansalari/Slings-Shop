import { Button } from '@mui/material';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { Options } from '@splidejs/splide';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
export const Slider = () => {
    const thumbsOptions: Options = {
        focus: 'center',
       
   

      };
    return ( 
        <Splide aria-label="My Favorite Images" options={thumbsOptions} >
  <SplideSlide className='relative'>

    <img className='w-full' src="../../public/photo/slider/Frame 55.png" alt="Image 1"/>
    <div className='absolute top-96 right-96 text-white' style={{width:"432px"}}>
    <h1  style={{fontSize:"50px"}} className="mb-5">King's Day 2020!</h1>
    <p style={{fontSize:"18px"}} className="mb-10">Our market starts at noon. You receive a 25% discount with the code SFG500 on selected wraps and ring slings.</p>
    
    <Button sx={{"&:hover":{backgroundColor:"transparent"}}}>
        <button style={{color:"#FFFFFF",fontWeight:700,fontSize:"14px",marginRight:"12px"}}>Shop all products</button>
   
        <button style={{backgroundColor:"#FFC84A",borderRadius:"50%",width:"40px",height:"40px"}} >{<ArrowRightAltIcon/>}</button>

   
 
    </Button>
    </div>
   
  </SplideSlide>
  <SplideSlide>
    <img className='w-full'src="../../public/photo/slider/Frame 55.png" alt="Image 2"/>
  </SplideSlide>
  <SplideSlide>
    <img  className='w-full' src="../../public/photo/slider/Frame 55.png" alt="Image 2"/>
  </SplideSlide>
</Splide>
     );
}
 