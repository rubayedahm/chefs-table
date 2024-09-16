import React from "react";
import { CiClock1 } from "react-icons/ci";
import { FaFire } from "react-icons/fa";

const Recipe = ({ recipe }) => {
  const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories } = recipe;
  console.log(recipe)
  return (
    <div>
      <div className="card bg-base-100 w-80 border">
        <figure>
          <img
            src={recipe_image}
            alt="Shoes"
          />
        </figure>
        <div className="card-body text-left">
          <h2 className="card-title">
            {recipe_name}
          </h2>
          <p className="text-left border-b pb-3 text-[#878787]">{short_description}</p>
          <h3 className="text-xl">Ingredients: {ingredients.length}</h3>
          <ul className="list-disc ml-8 text-[#878787]">
            {ingredients.map(ingredient => <li>{ingredient}</li>)}
          </ul>
          <div className="border-b pt-3"></div>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-[#282828CC]">
                <CiClock1/>
                <span>{preparing_time}</span>
            </div>
            <div className="flex items-center gap-2 text-[#282828CC]">
            <FaFire/>
            <span>{calories}</span>
            </div>
          </div>
          <button className="btn w-36 mt-3 mr-3 rounded-full bg-[#0BE58A] border-0 text-black hover:bg-[#0BE58A]">Want to cook</button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
