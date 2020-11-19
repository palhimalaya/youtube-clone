import React, { useState } from 'react';
import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';


function Header() {
 const [inputSearch, setInputSearch] = useState('');


    return (
        
        <div className="header">
           <div className="header__left">
            <MenuIcon/>
            <Link to="/">
            <img 
            className="header__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg" alt="" >
            </img>
            </Link>
            </div>

            <div className="header__input">
            <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder="Search" type="text"/>
            
           <Link to={`/search/${inputSearch}`}>
               <SearchIcon className='header__inputButton'/>
           
           </Link> 
           
            </div>
            
           
            <div className="header__icons">
            <VideoCallIcon className="header__icon"/>
            <AppsIcon className="header__icon"/>
            <NotificationsIcon className="header__icon"/>
            <Avatar>
                <src>
                <Avatar alt="Himalaya Pal" src="https://scontent.fktm4-1.fna.fbcdn.net/v/t1.0-9/107373803_1626597007502017_1227616272454271112_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=4mEmQ47y854AX-RBj7u&_nc_ht=scontent.fktm4-1.fna&oh=231e0e66e7c60f11f05ad2a365b0edc2&oe=5FD7B0AB" />                                                                                  
                </src>
            </Avatar>

            </div>
           

            
        </div>
    
     
    )
}

export default Header
 