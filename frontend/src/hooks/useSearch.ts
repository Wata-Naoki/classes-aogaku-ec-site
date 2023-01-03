import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { QUERY_PARAM_SEARCH_NAME } from '../components/layouts/Header';

type Props = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export const useSearch = ({ text, setText }: Props) => {
  const pathname = useLocation().pathname;
  const navigate = useNavigate();
  const { faculty } = useParams();

  const handleSearch = () => {
    // 検索ワードの空白を削除する

    if (pathname === '/' || pathname === '/success' || pathname === '/cancel') {
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
  return { handleSearch };
};
