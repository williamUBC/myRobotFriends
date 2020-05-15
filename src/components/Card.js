import React, { Fragment } from 'react';

const Card = (props) => {
    const { id, name, email } = props;// destructing
    return (
        //<Fragment>
            //<h1>Hello Robots</h1>
            <div className='tc bg-light-green dib br3 pa3 ma2 grow'>
                <img src={`https://robohash.org/${id}?200*200`} alt="an robot"/>
                <div className='card'>
                    <h2>{ name }</h2>
                    <p>{ email }</p>
                </div>
            </div>
        //</Fragment>        
    );
}

export default Card;