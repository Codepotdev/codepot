import React from "react";
import { useState } from "react";

const DashboardFilter = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [selectedSort, setSelectedSort] = useState("");

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleSortChange = (event) => {
    setSelectedSort(event.target.value);
  };

  return (
    <div className="flex flex-wrap items-center justify-between mb-8">
      {/* Filtering options */}
      <div className="flex items-center space-x-4">
        <div>
          <label
            htmlFor="language"
            className="block text-sm font-medium text-gray-700"
          >
            Language
          </label>
          <select
            id="language"
            name="language"
            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base text-gray-700"
          >
            {/* Add programming language options here */}
          </select>
        </div>
        {/* Add more filtering options as needed */}
      </div>

      {/* Sorting options */}
      <div>
        <label
          htmlFor="sort"
          className="block text-sm font-medium text-gray-700"
        >
          Sort By
        </label>
        <select
          id="sort"
          name="sort"
          className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 text-base text-gray-700"
        >
          {/* Add sorting options here */}
        </select>
      </div>
    </div>
  );
};

export default DashboardFilter;
