import { useRecoilState, useRecoilValue } from 'recoil';
import { cartState, searchFormState } from '../../../atom/atom';
import { usePagination } from '../../../hooks/usePagination';
import { products } from '../../../productData/productData';
import { Card } from '../card/Card';
import { Pagination } from '../pagination/Pagination';

export const Cards = ({ products }: any) => {
  const [cartItems, setCartItems] =
    useRecoilState<{ id: string; title: string; price: number; image: string }[]>(cartState);
  const searchState = useRecoilValue(searchFormState);

  const filterData = products.data.filter((item: any) => {
    return searchState === '' ? item : item.title.includes(searchState);
  });
  const { take, skip, totalPage, currentPage, goPage, goPrev, goNext, hasNextPage, hasPrevPage } = usePagination({
    totalCount: filterData?.length || 0,
  });

  const handleCartItems = (product: any) => {
    // cartItemsにproductがなければ追加
    if (!cartItems.find((item) => item.id === product.id)) {
      setCartItems((prev) => [
        ...prev,
        {
          id: product.id,
          title: product.title,
          price: product.price,
          image: product.image,
        },
      ]);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-16 py-16">
        <div className="flex flex-wrap lg:w-[1200px]  gap-16 px-10 place-content-center">
          {filterData?.slice(skip, skip + take).map((item: any, index: number) => (
            <div key={item.id}>
              <Card
                onCartClick={() => handleCartItems(item)}
                id={item.id}
                title={item.title}
                image={item.image}
                description={item.description}
                price={item.price}
              />
            </div>
          ))}
        </div>
        <div>
          <Pagination
            totalPage={totalPage}
            onPageClick={(num) => goPage(num)}
            currentPage={currentPage}
            onNextClick={goNext}
            onPrevClick={goPrev}
            showNext={hasNextPage}
            showPrev={hasPrevPage}
          />
        </div>
      </div>
    </>
  );
};
