import React, { useState, useMemo } from "react";

const NameSearch = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const names = [
    "Alice",
    "Bob",
    "Charlie",
    "David",
    "Eve",
    "Frank",
    "Grace",
    "Hannah",
  ];

  const filteredNames = useMemo(() => {
    return names.filter((name) =>
      name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm, names]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Search Names</h1>
      <input
        type="text"
        placeholder="Search for a name..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="px-4 py-2 w-64 text-lg border border-gray-300 rounded-lg shadow focus:outline-none focus:ring-2 focus:ring-blue-500 mb-6"
      />
      <ul className="w-64 bg-white border border-gray-300 rounded-lg shadow divide-y divide-gray-200">
        {filteredNames.length > 0 ? (
          filteredNames.map((name, index) => (
            <li
              key={index}
              className="px-4 py-2 hover:bg-gray-100 transition"
            >
              {name}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500">No names found</li>
        )}
      </ul>
    </div>
  );
};

export default NameSearch;
