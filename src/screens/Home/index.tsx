import { Honors, Material, Secure } from "@/assets";
import { Slider } from "@/components";
import { Typography } from "@mui/material";

export const Homescreen = () => {
    return ( 
        <>
        <div>
        <Slider/>

        </div>
        <div className="grid grid-cols-3 pb-11"  style={{backgroundColor:"#F8F2EC"}}>
           
                <div className="flex flex-col items-center mt-14">
                {<Honors/>}
<Typography sx={{fontWeight:700,fontSize:"18px",marginBottom:"13px"}} component={"h1"}>BEST PRODUCTS WORLDWIDE</Typography>
<Typography sx={{textAlign:"center",width:"260px"}} component={"p"}>We know what to look for when we select baby carriers for our online store.</Typography>

                </div>
            
         
            <div  className="flex flex-col items-center mt-14">
                {<Material/>}
                <Typography sx={{fontWeight:700,fontSize:"18px",marginBottom:"13px"}} component={"h1"}>BREATHABLE, STYLISH MATERIALS</Typography>
                <Typography sx={{textAlign:"center",width:"280px"}} component={"p"}>It’s made from machine-washable, breathable air mesh, and comes in colors you actually want to wear.</Typography>

                </div>
         
          
            <div  className="flex flex-col items-center mt-14">
                {<Secure/>}
                <Typography sx={{fontWeight:700,fontSize:"18px",marginBottom:"13px"}} component={"h1"}>SECURE CHECKOUT</Typography>
                <Typography sx={{textAlign:"center",width:"240px"}} component={"p"}>We accept PayPal, MasterCard, Visa, and et al.: names you know and trust!</Typography>

                </div>


        </div>
            <div className="grid grid-cols-3 gap-3 mx-48">
                <div >
                    <img  style={{width:"100%",height:"440px",backgroundSize:"cover"}} src="../../public/photo/home/Rectangle 960.png" alt="" />
                </div>
                <div className="col-span-2">
                <img style={{width:"100%",height:"440px",objectFit:"fill",}} src="../../public/photo/home/image 118.png" alt="" />
                </div>
                <div className="col-span-2">
                <img style={{width:"100%",height:"440px",objectFit:"fill"}} src="../../public/photo/home/image 95.png" alt="" />
                </div>
                <div>
                <img style={{width:"100%",height:"440px"}} src="../../public/photo/home/Rectangle 962.png" alt="" />
                </div>

            </div>
        </>
     );
}
 
