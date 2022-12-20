import React from "react";

type Props = {
  id: string;
  title: string;
  image: string;
  description: string;
  price: number;
  onCartClick: () => void;
};

export const Card: React.FC<Props> = ({
  id,
  title,
  image,
  description,
  price,
  onCartClick,
}) => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4 py-4 transition duration-300 border rounded-md shadow hover:shadow-2xl hover:-translate-y-1">
        <div className="text-2xl">{title}</div>
        <div>
          <img
            src={image}
            alt="programming-img"
            className="object-cover h-48 w-80"
          />
        </div>
        <div className="text-lg">{description}</div>
        <div>¥{price}</div>
        <button
          onClick={onCartClick}
          className="flex items-center justify-center w-11/12 px-4 py-2 transition duration-300 border border-blue-700 rounded-md hover:backdrop-brightness-95 gap-x-2 focus:ring-1"
        >
          <div>
            <svg
              className="w-5 h-5 text-blue-800"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
              />
            </svg>
          </div>
          <p className="text-sm text-blue-700">カートに追加</p>
        </button>
      </div>
    </div>
  );
};
