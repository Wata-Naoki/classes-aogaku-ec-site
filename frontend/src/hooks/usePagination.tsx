import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { QUERY_PARAM_SEARCH_NAME } from '../components/layouts/Header';

const DEFAULT_TAKE = 6;
const QUERY_PARAM_NAME = '_p';

type Props = {
  totalCount: number;
  keyword: string;
  take?: number;
};

/**
 * 注意: currentPageは1から始まる
 * @param param0
 * @returns
 */
export const usePagination = ({ totalCount, keyword, take = DEFAULT_TAKE }: Props) => {
  const search = useLocation().search;
  const navigate = useNavigate();
  const urlPageNumber = new URLSearchParams(search).get(QUERY_PARAM_NAME);
  const [currentPage, setCurrentPage] = React.useState(Number(urlPageNumber) || 1);

  const totalPage = totalCount === 0 ? 0 : Math.ceil(totalCount / take);
  const hasNextPage = currentPage < totalPage;
  const hasPrevPage = currentPage > 1;
  const skip = (currentPage - 1) * take;

  useEffect(() => {
    setCurrentPage(Number(urlPageNumber) || 1);
  }, [urlPageNumber]);

  const goNext = () => {
    if (currentPage + 1 > totalPage) {
      return;
    }
    keyword
      ? navigate(`?${QUERY_PARAM_SEARCH_NAME}=${keyword}&${QUERY_PARAM_NAME}=${currentPage + 1}`)
      : navigate(`?${QUERY_PARAM_NAME}=${currentPage + 1}`);
    setCurrentPage((prev) => prev + 1);
  };

  const goPrev = () => {
    if (currentPage - 1 < 1) {
      return;
    }
    keyword
      ? navigate(`?${QUERY_PARAM_SEARCH_NAME}=${keyword}&${QUERY_PARAM_NAME}=${currentPage - 1}`)
      : navigate(`?${QUERY_PARAM_NAME}=${currentPage - 1}`);
    setCurrentPage((prev) => prev - 1);
  };

  const goPage = (page: number) => {
    if (page < 1 || page > totalPage) {
      return;
    }
    keyword
      ? navigate(`?${QUERY_PARAM_SEARCH_NAME}=${keyword}&${QUERY_PARAM_NAME}=${page}`)
      : navigate(`?${QUERY_PARAM_NAME}=${page}`);
    setCurrentPage(page);
  };

  return {
    take,
    skip,
    totalCount,
    currentPage,
    totalPage,
    goNext,
    goPrev,
    goPage,
    hasNextPage,
    hasPrevPage,
  };
};
