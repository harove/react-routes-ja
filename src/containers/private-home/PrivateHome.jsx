import React, {useEffect} from 'react';
import {logout} from '../../utils/session';
import {Link} from 'react-router-dom';

const PrivateHome = () => {

    const handlerLogout = () => {   
        logout();
    };

    useEffect(() => {
        console.log('useEffect start')
        return () => {
            console.log('functional will unmount');
        };
    },[])

    return (
        <div className="private-home">
            Private Home
            <button onClick = {handlerLogout}>
                Cerrar sesión
            </button>
            <Link to = "/"> Home </Link>
        </div>
    );
};
export default PrivateHome;
