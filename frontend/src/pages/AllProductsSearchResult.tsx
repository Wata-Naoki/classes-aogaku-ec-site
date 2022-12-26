import React, { useEffect } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { QUERY_PARAM_SEARCH_NAME } from '../components/layouts/Header';
import { Cards } from '../components/ui/cards/Cards';
import { products } from '../productData/productData';
import { searchFormState } from '../recoil/atom/atom';

export const AllProductsSearchResult = () => {
  const setSearchState = useSetRecoilState(searchFormState);

  // 現在のURLを取得する
  const currentURL = useLocation().search;
  // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
  const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);

  // 検索フォームに入力された値を取得する。多分URLのクエリパラメータを取得するためのフック
  const [searchParams] = useSearchParams();
  // 検索フォームに入力された値を取得する
  const search = searchParams.get('search');

  useEffect(() => {
    setSearchState(urlSearchTextParams || '');
    console.log(search, urlSearchTextParams);
  }, [urlSearchTextParams]);
  return (
    <div>
      <div>
        <Cards products={products} keyword={urlSearchTextParams} />
      </div>
    </div>
  );
};
