import React, {useState, useEffect, Fragment} from 'react';
import axios from "axios";

const CocktailsByCategory = ({category}) => {
    const [cocktailsList, setList] = useState([]);

    useEffect(() => {

        axios.get(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`)
            .then((res) => {
                setList(res.data.drinks)
            })

    }, [category]);


    return (
        <Fragment>
            <div className="category-name">{category}</div>

            <div className='cocktails'>
                {cocktailsList.map(cocktail => (
                    <div className="cocktail">
                        <img src={cocktail.strDrinkThumb} alt=""/>
                        <div className='name'>{cocktail.strDrink}</div>
                    </div>
                ))}
            </div>

        </Fragment>
    )
};

export default CocktailsByCategory
