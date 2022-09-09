import React from 'react'
import './navbar.css'
import { RiArrowDropDownLine } from 'react-icons/ri'

import { FaHeadphones} from 'react-icons/fa';
import { AiOutlineHeart, AiOutlineShopping } from 'react-icons/ai'
import { BsSearch } from 'react-icons/bs';

const Navbar = () => {
  return (
    <div className='container'>
        <div className='topText'>
            <p>populate this marketing banner to advertise the special promotion such on save 20%</p>
        </div>
        <div className='essential'>
            <div className='support'>
                <FaHeadphones color='red' />
                <p>support [+64]123432432 Email: contects@gmail.com</p> 
            </div>
            <div className='accounts'>
                <p>$USD </p>
                <p> English</p>
                <p> My Account</p>
            </div>
        </div>
        <div className='search'>
            <div className='logo'>
                <h1>Axon</h1>
            </div>
            <div className='searchInput'>
                <input placeholder='enter your keyword' className='searchField'  />
                <input placeholder='enter your keyword' className='catagory'  />
                <BsSearch className='searchIcon'/>
            </div>
            <div className='cartItem'>
                <AiOutlineHeart  className='heart'/>
                <div className='cart'>
                    <AiOutlineShopping className='shop'/>
                    <div className='badge'>0</div>
                </div>
                
            </div>
        </div>
    <div className="navbar">
        <div className="dropdown">
                    <button className="dropbtn">ALL CATAGORIES 
                        <RiArrowDropDownLine />
                    </button>
                    <div className="dropdown-content">
                        <a href="/">Link 1</a>
                        <a href="/">Link 2</a>
                        <a href="/">Link 3</a>
                    </div>
        </div> 
        <div className='homeNav'>
            <div>HOME</div>
            <div>
                <div>
                    SHOP
                    <span className='textBadge'>HOT</span>
                </div>
            </div>
            <div>BLOG</div>
            <div>PAGES</div>
            <div>
                <div>
                    ELEMENTOR LIVE
                    <span className='textBadge' style={{ right: '2rem',backgroundColor: "blue", padding: '.2rem',borderRadius: '.5rem'}}>52+ WIDGETS</span>
                </div>
            </div>
            <div>
                <div>
                    BUY
                    <span className='textBadge' style={{ right: '2rem',backgroundColor: "blue", padding: '.2rem',borderRadius: '.5rem', right: '-5px'}}>ONLY YOU</span>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}

export default Navbar