import React from 'react';
import { Link } from 'react-router-dom';
import { facultyData } from '../../Data/facultyData';

export const FacultyLayout = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="flex flex-wrap items-start justify-center max-w-screen-xl gap-x-10 gap-y-16">
        {facultyData.map((item) => (
          <Link
            to={`facultyId/${item.facultyId}`}
            key={item.id}
            className="transition-all ease-out border-transparent hover:shadow-2xl hover:opacity-75 hover:ease-in"
          >
            <div className="flex flex-col items-center h-56 bg-white border rounded-lg shadow-md md:flex-row md:max-w-xl dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
              <img src={item.img} alt="" className="object-fill h-full rounded-t-lg w-80" />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{item.name}</h5>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
