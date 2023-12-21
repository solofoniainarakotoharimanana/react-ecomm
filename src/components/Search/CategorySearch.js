import React from "react";

const CategorySearch = ({ title, name, checked, handleChange }) => {
  return (
    <div>
      <input
        id={name}
        type="checkbox"
        value=""
        className="w-4 h-4 text-blue-600 
        bg-gray-100 border-gray-300 rounded focus:ring-blue-500 
        dark:focus:ring-blue-600 dark:ring-offset-gray-800 
        focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label
        htmlFor={name}
        className="ms-2 text-sm font-medium
         text-gray-900 dark:text-gray-300"
      >
        {title}
      </label>
    </div>
  );
};

export default CategorySearch;
