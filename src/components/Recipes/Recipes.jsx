import React from "react";
import LeftSidebar from "../LifeSidebar/LeftSidebar";
import RightSidebar from "../RightSidebar/RightSidebar";

const Recipes = () => {
  return (
    <div className="w-[90%] mx-auto">
      <div className="text-center my-12">
        <h3 className="text-3xl">Our Recipes</h3>
        <p className="lg:w-1/2 mx-auto text-[#150B2B99] text-sm mt-3">
          Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
          vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
          elementum mauris aenean neque.{" "}
        </p>
        <div className="flex justify-between mt-12">
          <LeftSidebar className="flex-auto"/>
          <RightSidebar className="" />
        </div>
      </div>
    </div>
  );
};

export default Recipes;
