import React from 'react';
import '../styles/basic.css';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

function Blog() {
    return (
        <>
            <Navigation />
            <div className='center'>
                <div>
                    <iframe height="800" width="100%" src="http://pxp6118.uta.cloud/" title="Siremar Blog"></iframe>               
                </div>
            </div>
        </>
    )
}

export default Blog