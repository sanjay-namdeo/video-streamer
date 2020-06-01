import * as React from 'react';
import GoogleAuth from "./GoogleAuth";

const Header = () => {
    return (
        <div className='ui massive menu'>
            <div className='item'>Streamer</div>
            <div className='right menu'>
                <div className='item'>Stream List</div>
                <div className='item'>
                    <GoogleAuth/>
                </div>
            </div>
        </div>
    );
};

export default Header;