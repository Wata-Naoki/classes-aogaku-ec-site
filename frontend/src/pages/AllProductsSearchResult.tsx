import { useLocation } from 'react-router-dom';
import { QUERY_PARAM_SEARCH_NAME } from '../components/layouts/Header';
import { Cards } from '../components/ui/cards/Cards';
import { products } from '../productData/productData';

export const AllProductsSearchResult = () => {
  // 現在のURLを取得する
  const currentURL = useLocation().search;
  // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)

  const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_SEARCH_NAME);
  // 検索フォームに入力された値を取得する。多分URLのクエリパラメータを取得するためのフック

  return (
    <div>
      <div>
        <Cards products={products} keyword={urlSearchTextParams} />
      </div>
    </div>
  );
};
