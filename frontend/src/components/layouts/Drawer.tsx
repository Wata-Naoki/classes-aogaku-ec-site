import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Dialog, Transition } from '@headlessui/react';
import { useRecoilState } from 'recoil';
import { auth } from '../../firebaseConfig';
import { isDrawerOpenState } from '../../recoil/atom/atom';
export const Drawer = () => {
  const navigate = useNavigate();
  const [isDrawerOpen, setIsDrawerOpen] = useRecoilState(isDrawerOpenState);
  const listData = [
    { name: '社会情報学部', to: '/facultyId/school-of-social-information' },
    { name: '経営学部', to: '/facultyId/school-of-business-administration' },
    { name: '史学部', to: '/facultyId/school-of-history' },
    { name: '経済学部', to: '/facultyId/school-of-economics' },
    { name: '法学部', to: '/facultyId/school-of-law' },
    { name: '文学部', to: '/facultyId/school-of-literature' },
  ];

  const handleLogout = () => {
    // removeValue();
    setIsDrawerOpen(false);
    auth.signOut();
    navigate('/login');
  };
  const handleHome = () => {
    setIsDrawerOpen(false);
    navigate('/');
  };
  const handleLink = (to: string) => {
    setIsDrawerOpen(false);
    navigate(to);
  };
  return (
    <Transition appear show={isDrawerOpen} as={Fragment}>
      <Dialog
        //lg:hiddenを追加することでモバイル時のみ表示されるようになる
        className="fixed inset-0 z-20 overflow-hidden"
        onClose={() => setIsDrawerOpen(false)}
      >
        <Transition.Child
          enter="transition-opacity ease-in-out duration-250"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="transition-opacity ease-in-out duration-250"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Dialog.Overlay
            onClick={() => setIsDrawerOpen(false)}
            className="absolute inset-0 z-30 bg-gray-500 backdrop-filter bg-opacity-40"
          />
        </Transition.Child>

        <Transition.Child
          className="absolute inset-0 z-30 flex w-60"
          enter="transition ease duration-250 transform"
          enterFrom="-translate-x-full"
          enterTo="translate-x-0"
          leave="transition ease duration-250 transform"
          leaveFrom="translate-x-0"
          leaveTo="-translate-x-full"
        >
          <div className="absolute h-full pt-5 shadow-md bg-slate-100 w-60">
            <div className="my-2 ml-4 font-bold">MENU</div>
            <ul className="relative transition duration-500 outline-none bg-slate-100 rounded-xl focus-none">
              <li className="relative cursor-pointer">
                <div
                  onClick={handleHome}
                  className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-300"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" /> <polyline points="5 12 3 12 12 3 21 12 19 12" />{' '}
                    <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />{' '}
                    <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" />
                  </svg>
                  <span className="mt-0.5">ホーム</span>
                </div>
              </li>
              {listData.map((value, index) => (
                <li className="relative" key={index}>
                  <div
                    className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded outline-none text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-300"
                    onClick={() => handleLink(value.to)}
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="dark"
                  >
                    <svg
                      className="w-6 h-6 mr-2 text-black"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      {' '}
                      <path stroke="none" d="M0 0h24v24H0z" /> <path d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0" />{' '}
                      <path d="M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0" /> <line x1="3" y1="6" x2="3" y2="19" />{' '}
                      <line x1="12" y1="6" x2="12" y2="19" /> <line x1="21" y1="6" x2="21" y2="19" />
                    </svg>
                    <span className="mt-0.5">{value.name}</span>
                  </div>
                </li>
              ))}
              <li className="relative cursor-pointer">
                <div
                  onClick={handleLogout}
                  className="flex items-center h-12 px-6 py-4 overflow-hidden text-sm text-gray-700 transition duration-300 ease-in-out rounded text-ellipsis whitespace-nowrap hover:text-gray-900 hover:bg-gray-300"
                  data-mdb-ripple="true"
                  data-mdb-ripple-color="dark"
                >
                  <svg
                    className="w-6 h-6 mr-2 text-black"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {' '}
                    <path stroke="none" d="M0 0h24v24H0z" />{' '}
                    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2" />{' '}
                    <path d="M7 12h14l-3 -3m0 6l3 -3" />
                  </svg>
                  <span className="mt-0.5">ログアウト</span>
                </div>
              </li>
            </ul>
          </div>
        </Transition.Child>
      </Dialog>
    </Transition>
  );
};
