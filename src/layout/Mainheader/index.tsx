import { TextField, Typography } from "@mui/material";
import * as React from 'react';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { Outlet } from "react-router-dom";
import InputAdornment from '@mui/material/InputAdornment';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Chat, Gift } from "@/assets";
import Container from '@mui/material/Container';
import "./index.css"
import { Slider } from "@/components";
export const Mainlayout = () => {
    const [age, setAge] = React.useState('English');

    const handleChange = (event: SelectChangeEvent) => {
        setAge(event.target.value as string);
      };
    return ( 
        
        <Container maxWidth="">
<header>
<nav>
    <div className="flex justify-between mx-14">
    <div className="flex items-center">
<TextField
placeholder="Search"
type={"search"}
variant="outlined"
          id="outlined-start-adornment"
          sx={{width:"350px",height:"45px"}}
          InputProps={{
            endAdornment: <InputAdornment position="start">{<SearchIcon/>}</InputAdornment>,
          }}
        />
  <Button variant="text" startIcon={<Chat/>} sx={{color:"#2B2B2B",marginLeft:"26px"}}>
  Help Me
      </Button>
     
      <Button variant="text" sx={{color:"#2B2B2B",marginLeft:"19px"}}>
        Blog
      </Button>
</div>
<div className="flex items-center">
    <img src="../../public/photo/header/Logo.png" alt="" />
</div>
<div className="flex items-center">
<FormControl>
  <Select variant="standard"

    id="demo-simple-select"
    value={age}

    onChange={handleChange}
  >
    <MenuItem value={age}>English</MenuItem>
    <MenuItem value={20}>France</MenuItem>
    <MenuItem value={30}>Persian</MenuItem>
  </Select>
</FormControl>
<Button variant="text"sx={{color:"black",marginLeft:"41px"}}>
My Account
      </Button>
<Button variant="text" startIcon={<Chat/>} sx={{color:"black",marginLeft:"37px"}}>
Basket({0})
      </Button>
</div>
    </div>

<div >
<ul className="flex justify-center mt-7">
    <div className="wrapper">
       <Button endIcon={<KeyboardArrowDownIcon/>} sx={{color:"#2B2B2B"}}>Wraps</Button>
        <div className="list-item">
<ul>
    <li>sad</li>
    <li>dfs</li>
    <li>sdfs</li>
    <li>sfs</li>
</ul>
        </div>

        
    </div>

    <div className="wrapper">
       <Button sx={{color:"#2B2B2B"}} endIcon={<KeyboardArrowDownIcon/>}>Carriers</Button>
        <div className="list-item">
<ul>
    <li>sad</li>
    <li>dfs</li>
    <li>sdfs</li>
    <li>sfs</li>
</ul>
        </div>

        
    </div>

    <div className="wrapper">
       <Button sx={{color:"#2B2B2B"}} endIcon={<KeyboardArrowDownIcon/>}>Accessories</Button>
        <div className="list-item">
<ul>
    <li>sad</li>
    <li>dfs</li>
    <li>sdfs</li>
    <li>sfs</li>
</ul>
        </div>

        
    </div>
    <div className="wrapper">
       <Button sx={{color:"#2B2B2B"}} endIcon={<KeyboardArrowDownIcon/>}>For you</Button>
        <div className="list-item">
<ul>
    <li>sad</li>
    <li>dfs</li>
    <li>sdfs</li>
    <li>sfs</li>
</ul>
        </div>

        
    </div>
    <div className="wrapper">
       <Button sx={{color:"#2B2B2B"}} endIcon={<KeyboardArrowDownIcon/>}>Kids</Button>
        <div className="list-item">
<ul>
    <li>sad</li>
    <li>dfs</li>
    <li>sdfs</li>
    <li>sfs</li>
</ul>
        </div>

        
    </div>
    
    <div>
    <Button sx={{color:"#2B2B2B"}}>Sale</Button>

    </div>

    <div>
    <Button sx={{color:"#2B2B2B"}}>New</Button>

    </div>
    <div>
    <Button sx={{color:"#2B2B2B"}} startIcon={<Gift/>}>Mystery Box</Button>

    </div>
</ul>
</div>

</nav>
</header>
<main>
<Outlet/>
</main>
<footer className="">
    <div className="grid grid-cols-3">

    <div>
    <h1 className="font-bold">ABOUT</h1>
    <p>Specials</p>
    <p>New products</p>
    <p>Best sellers</p>
    <p>Contact us</p>
    <p>About us</p>
    <p>Conditions of use</p>
    <p>Shipping & Returns</p>
    <p>FAQ</p>
</div>

<div>
    <h1  className="font-bold">SHOP</h1>
    <p>Wraps</p>
    <p>Carriers</p>
    <p>Accessories</p>
    <p>For you</p>
    <p>Kids</p>
    <p>Sale</p>
    <p>New</p>
</div>

<div>
    <h1  className="font-bold">Join the SFB Community!</h1>
    <Button variant="contained">Sign Up for Newsletters</Button>

    <Button variant="text" startIcon={<Gift/>} endIcon={<ArrowRightAltIcon/>} sx={{color:"black"}}>
    TRY OUR MISTERY BOX
      </Button>
      <p>We surprise you with a box that will definitely be a match for you.</p>
</div>
    </div>
    <hr/>
     <div className="flex  justify-between">
        <div>
        <img src="../../public/photo/footer/image 29.png" alt="" />

        </div>
        <div className="flex">
        <img src="../../public/photo/footer/image 87.png" alt="" />
        <img src="../../public/photo/footer/image 88.png" alt="" />
        <img src="../../public/photo/footer/image 89.png" alt="" />
        <img src="../../public/photo/footer/image 90.png" alt="" />
        </div>
     </div>

</footer>
</Container>
       
     );
}
 
