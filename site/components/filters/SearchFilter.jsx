import { useState } from "react";

export default function SearchFilter({ placeholder, onChange }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
    onChange(event.target.value);
  };

  return (
    <input
      type="text"
      placeholder={placeholder}
      value={searchTerm}
      onChange={handleInputChange}
      className="w-full border border-gray-300 px-3 py-2 rounded-md"
    />
  );
}
