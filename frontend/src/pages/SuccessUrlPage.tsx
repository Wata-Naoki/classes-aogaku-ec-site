import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
// type Props = {
//   purchasedItemsList: string[];
// };

export const SuccessUrlPage = () => {
  const { width, height } = useWindowSize();

  let purchasedItemsList = [];

  const QUERY_PARAM_SEARCH_NAME = 'productsLength';
  // 現在のURLを取得する
  const currentURL = useLocation().search;
  // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
  const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);

  if (urlSearchTextParams) {
    [...Array(Number(urlSearchTextParams))].map((_, i) => {
      const QUERY_PARAM_SEARCH_NAME = `product${i}`;
      // 現在のURLを取得する
      //   const currentURL = useLocation().search;
      // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
      const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);
      return purchasedItemsList.push(urlSearchTextParams);
    });
  }

  return (
    <div className="flex flex-col justify-center items-center h-96 w-screen">
      <Confetti width={width} height={height} recycle={false} />
      <div>SuccessUrlPage</div>
      <div>{urlSearchTextParams}</div>
      <div>
        {urlSearchTextParams &&
          [...Array(Number(urlSearchTextParams))].map((_, i) => {
            const QUERY_PARAM_SEARCH_NAME = `product${i}`;
            // 現在のURLを取得する
            //   const currentURL = useLocation().search;
            // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
            const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);
            return (
              <div>
                <div>{urlSearchTextParams}</div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
