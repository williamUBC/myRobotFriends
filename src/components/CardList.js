import React from 'react';
import Card from './Card'

const CardList = (props) => {
    const { robots } = props;
    const cardComponent = robots.map(
        (user,i) => {
            return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>;
            // React requires that each child in a list should have a unique "key" prop.
            //return <Card id={user.id} name={user.name} email={user.email}/>; // also works
        }
    ); 
    return (
        <div>
            { cardComponent }
        </div>        
    );
}

export default CardList;