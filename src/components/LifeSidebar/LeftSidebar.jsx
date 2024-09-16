import React, { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';

const LeftSidebar = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('recipes.json')
        .then(res => res.json())
        .then(data => setRecipes(data))
    },[])
    return (
        <div className='grid grid-cols-2 gap-6'>
            {recipes.map(recipe => <Recipe recipe={recipe}/>)}
        </div>
    );
};

export default LeftSidebar;