import React from "react";
import useCuisines from "../hooks/useCuisines";

const SelectCusine = ({ nameField, onChange }) => {
  const { cuisines } = useCuisines();

  return (
    <>
      <select
        required
        name="cuisine_id"
        id="cuisine_id"
        onChange={onChange}
        value={nameField}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option value="">Choose a cuisine</option>
        {cuisines &&
          cuisines.map((cuisine) => (
            <option key={cuisine.id} value={cuisine.id}>
              {cuisine.name}
            </option>
          ))}
      </select>
    </>
  );
};

export default SelectCusine;
