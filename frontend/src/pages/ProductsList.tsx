import { useEffect } from 'react';
import { useLocation, useParams, useSearchParams } from 'react-router-dom';
import { QUERY_PARAM_SEARCH_NAME } from '../components/layouts/Header';
import { Cards } from '../components/ui/cards/Cards';
import { facultyData } from '../Data/facultyData';

export const ProductsList = () => {
  const { faculty } = useParams();
  // findでfacultyIdと一致するものを探す
  const products = facultyData.find((product) => product.facultyId === faculty);
  // 現在のURLを取得する
  const currentURL = useLocation().search;
  // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
  const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);

  // 検索フォームに入力された値を取得する。多分URLのクエリパラメータを取得するためのフック
  const [searchParams] = useSearchParams();
  // 検索フォームに入力された値を取得する
  useEffect(() => {
    // setSearchState(urlSearchTextParams || '');
    console.log(urlSearchTextParams);
  }, [urlSearchTextParams]);

  return (
    <div>
      <div>
        <Cards products={products?.data} keyword={urlSearchTextParams} />
      </div>
    </div>
  );
};
