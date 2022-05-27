import React from 'react';

export const Header = (props) => {
    return (
        <header className='bg-danger p-5 text-center'>
            <h1 className='display-2 text-white'>{props.heading}</h1>
            <small style={{fontSize:'30px', color: '#aaa', borderTop: '1px solid #aaa', textTransform: 'uppercase'}}>{props.subheading}</small>
        </header>
    );
}