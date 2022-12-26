import { Link, useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useModalState } from '../../hooks/useModalState';
import { Drawer } from './Drawer';
import { MenuIcon } from '../ui/icon/MenuIcon';
import { SearchIcon } from '../ui/icon/SearchIcon';
import { isDrawerOpenState, searchFormState } from '../../recoil/atom/atom';
import { Modal } from '../ui/modal/Modal';
import { useEffect, useState } from 'react';

export const QUERY_PARAM_SEARCH_NAME = 'keyword';

export const Header = () => {
  const { isOpen, closeModal, openModal, setIsOpen } = useModalState();
  const setSearchState = useSetRecoilState(searchFormState);
  const pathname = useLocation().pathname;
  console.log(pathname);
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);
  // 検索フォームに入力された値を取得する
  const [text, setText] = useState('');
  const navigate = useNavigate();
  const { faculty } = useParams();
  // 検索ボタンを押したときの処理
  // TODO: ↓ 処理が長いので関数に切り出すようにする
  const handleSearch = () => {
    // 検索ワードの空白を削除する
    setSearchState(text.replace(/\s+/g, ''));
    if (pathname === '/') {
      if (text) {
        // 検索ワードがある場合は検索ワードをクエリパラメータに追加する
        navigate(`/all-products-search-result?${QUERY_PARAM_SEARCH_NAME}=${text.replace(/\s+/g, '')}`);
        setText('');
      } else {
        // 検索ワードがない場合はクエリパラメータを削除する
        navigate('/');
      }
    } else if (pathname === '/all-products-search-result') {
      if (text) {
        // 検索ワードがある場合は検索ワードをクエリパラメータに追加する
        navigate(`?${QUERY_PARAM_SEARCH_NAME}=${text.replace(/\s+/g, '')}`);
        setText('');
      } else {
        // 検索ワードがない場合はクエリパラメータを削除する
        // TODO: 全学科の商品一覧を表示するページに遷移する
        navigate('/');
      }
    } else {
      if (text) {
        // 検索ワードがある場合は検索ワードをクエリパラメータに追加する
        navigate(`?${QUERY_PARAM_SEARCH_NAME}=${text.replace(/\s+/g, '')}`);
        setText('');
      } else {
        // 検索ワードがない場合はクエリパラメータを削除する
        navigate(`/facultyId/${faculty}`);
      }
    }
  };
  // TODO: ↑ 処理が長いので関数に切り出すようにする
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
        <div className="w-full px-6 py-6 m-0 bg-gray-400 shadow-xl opacity-100">
          <div className="flex justify-between">
            <div className="flex items-center ">
              <div
                onClick={() => {
                  setIsDrawerOpen(true);
                }}
                className="text-white cursor-pointer"
              >
                <MenuIcon />
              </div>
              <Drawer />
              <Link to={'/'} className="pb-1 ml-3 text-xl font-bold text-center text-white hover:text-gray-200">
                classes
              </Link>
            </div>

            {/* {window.location.pathname === "/" ? (
              <div></div>
            ) : ( */}
            <div className="flex items-center gap-4">
              <div>
                <Modal isOpen={isOpen} setIsOpen={setIsOpen} closeModal={closeModal} openModal={openModal} />
              </div>
              {/* <Modal /> */}
              <div className="flex items-center justify-between ">
                <div className="absolute mb-0 ml-1.5 cursor-pointer" onClick={handleSearch}>
                  <SearchIcon />
                </div>
                <input
                  placeholder="Search…"
                  value={text}
                  className="w-64 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md px-9 focus:outline-none focus:border-gray-300 focus:ring-1 focus:ring-gray-300"
                  onChange={(e) => setText(e.target.value)}
                />
              </div>
            </div>
            {/* )} */}
          </div>
        </div>
      </div>
    </div>
  );
};
