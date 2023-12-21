import React from "react";

const Searchbar = ({ searchText, handleSearchtext }) => {
  return (
    <div className="mt-14">
      <input
        placeholder="Receherche par titre"
        type="text"
        className="bg-gray-50 border border-gray-300 
          text-gray-900 text-sm rounded-lg 
          focus:ring-blue-500 focus:border-blue-500 block p-2.5 
          dark:bg-gray-700 dark:border-gray-600 w-64
          dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-gray-200"
        value={searchText}
        onChange={handleSearchtext}
      />
    </div>
  );
};

export default Searchbar;
