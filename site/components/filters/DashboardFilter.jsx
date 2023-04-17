import React from "react";

const DashboardFilter = ({ selectedLanguage, onSelectedLanguageChange }) => {
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
            onChange={(e) => onSelectedLanguageChange(e.target.value)}
          >
            <option value="">All</option>
            <option value="javascript">JavaScript</option>
            <option value="typescript">TypeScript</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="go">Go</option>
            <option value="ruby">Ruby</option>
            <option value="php">PHP</option>
            <option value="csharp">C#</option>
            <option value="c">C</option>
            <option value="cpp">C++</option>
            <option value="swift">Swift</option>
            <option value="kotlin">Kotlin</option>
          </select>
        </div>
      </div>

      {/* Sorting options */}
      {/* <div>
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
          <option>Popular</option>
          <option>Recent</option>
        </select>
      </div> */}
    </div>
  );
};

export default DashboardFilter;
