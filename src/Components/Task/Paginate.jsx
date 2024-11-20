import React, { useState } from 'react';

const arr = [
  // Example data
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  { id: 4, name: 'Item 4' },
  { id: 5, name: 'Item 5' },
  { id: 6, name: 'Item 6' },
  { id: 7, name: 'Item 7' },
  { id: 8, name: 'Item 8' },
  { id: 9, name: 'Item 9' },
  { id: 10, name: 'Item 10' }
];

const Paginate = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Calculate the index of the last and first item
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current items for this page
  const currentItems = arr.slice(indexOfFirstItem, indexOfLastItem);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Total number of pages
  const totalPages = Math.ceil(arr.length / itemsPerPage);

  return (
    <div className='bg-blue-500 h-screen pt-10'>
      <ul className='flex gap-10 justify-center shadow-md shadow-white w-[80%] m-auto h-20 rounded-3xl text-white bg-blue-600 items-center'>
        {currentItems.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div className='text-center mt-10'>
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => paginate(index + 1)}
            className='shadow-md shadow-white h-8 w-8 rounded-3xl text-white bg-blue-700 ml-5'
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Paginate;
