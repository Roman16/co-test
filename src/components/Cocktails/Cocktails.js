import React from 'react';
import './Cocktails.css';
import CocktailsByCategory from './CocktailsByCategory';

const Cocktails = ({filter}) => {
    return (
        <div className="all-cocktails">
            {filter.map((item) => (
                item.value && <CocktailsByCategory category={item.name}/>
            ))}
        </div>
    )
};

export default Cocktails;

