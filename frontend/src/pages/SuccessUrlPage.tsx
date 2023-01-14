import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { products } from '../productData/productData';
import { Card } from '../components/ui/card/Card';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useDownload } from '../hooks/useDownload';

const PURCHASED_PRODUCTS_TOTAL_COUNT = 'productsLength';
export const SuccessUrlPage = () => {
  const { width, height } = useWindowSize();
  const { value, removeValue, setValue } = useLocalStorage();
  //TODO: 購入した商品のIDリスト。保存して後々購入履歴を表示するために使う。
  let purchasedItemsList: (string | null)[] = [];

  // 現在のURLを取得する
  const currentURL = useLocation().search;
  // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
  const urlSearchTextParams = new URLSearchParams(currentURL).get(PURCHASED_PRODUCTS_TOTAL_COUNT);

  useEffect(() => {
    // setValue(
    //   value.filter((item: any) => item.id === '').map((item: any) => (item.state ? item : { ...item, state: true }))
    // );
    setTimeout(() => {
      // リロードされたら紙吹雪が再度出てきてしまう
      //   それを防ぐために、ローカルストレージのデフォルト値（false）に10秒後変更する
      removeValue();
    }, 10000);
  }, []);

  const { handleDownload } = useDownload();

  return (
    <div className="flex flex-col items-center justify-center gap-16 py-16">
      {value[0].state && <Confetti width={width} height={height} recycle={false} />}
      <div className="text-2xl text-slate-400">ご購入いただきありがとうございます🎉</div>
      {/* <div>{urlSearchTextParams}</div> */}
      <div className="flex flex-wrap lg:w-[1200px]  gap-16 px-10 place-content-center">
        {urlSearchTextParams &&
          [...Array(Number(urlSearchTextParams))].map((_, i) => {
            const QUERY_PARAM_PRODUCTID = `product${i}`;
            // 現在のURLを取得する
            //   const currentURL = useLocation().search;
            // 検索した文字列を取得する(「?search=〇〇」の〇〇の部分)
            const urlSearchTextParams = new URLSearchParams(currentURL).get(QUERY_PARAM_PRODUCTID);
            // productのidとurlSearchTextParamsが一致するものを探す
            const product = products.find((product) => product.id === urlSearchTextParams);
            purchasedItemsList.push(urlSearchTextParams);
            return (
              <div className="" key={i}>
                {/* <span className="text-center text-gray-100">{urlSearchTextParams}</span> */}
                {product && (
                  <button onClick={() => handleDownload(product.pdfUrl, product.title)}>
                    <Card id={product.id} title={product.title} image={product.image} />
                  </button>
                )}
              </div>
            );
          })}
      </div>
    </div>
  );
};
