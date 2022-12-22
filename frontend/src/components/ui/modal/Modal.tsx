import React, { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { PaymentLoading } from '../../loading/PaymentLoading';
import { useCheckout } from '../../../hooks/useCheckout';
import { Cart } from '../cart/Cart';
import { useLocalStorage } from '../../../hooks/useLocalStorage';

export const Modal = ({ blogTitle, isOpen, setIsOpen, closeModal, openModal }: any) => {
  const { handleCheckout } = useCheckout();
  const { value, setValue } = useLocalStorage();
  const [isProcessing, setIsProcessing] = useState(false);

  const handleRemove = (id: string) => {
    const newCart = value.filter((item: any) => item.id !== id);
    setValue(newCart);
  };
  return (
    <>
      <div className="flex items-center justify-center mt-0.5 cursor-pointer" onClick={openModal}>
        <Cart />
        {value.length >= 2 ? (
          // まん丸にする。中の数字を中央に表示する。
          <div className="flex items-center justify-center w-5 h-5 mb-2 bg-white rounded-full">
            <div className="mr-0 ">{value.length - 1}</div>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center min-h-full p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-screen max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                  <div className="flex flex-col items-center justify-center gap-x-2 gap-y-6">
                    <p className="text-sm text-gray-500">カート内の商品</p>

                    {value
                      .filter((item: any) => item.price > 0)
                      .map((item: any, index: number) => (
                        <div className="flex items-center justify-center w-full px-12 py-2">
                          <div className="flex items-center justify-start w-full gap-x-9">
                            <img src={item.image} alt="item" className="w-16 h-16" />
                            <div className="flex flex-col items-start justify-center gap-1">
                              <p className="text-sm text-gray-500">{item.title}</p>
                              <p className="text-sm text-gray-500">{item.price}円</p>
                            </div>
                          </div>

                          <div className="cursor-pointer" onClick={() => handleRemove(item.id)}>
                            <svg
                              className="w-6 h-6 text-gray-500"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M6 18L18 6M6 6l12 12"
                              />
                            </svg>
                          </div>
                        </div>
                      ))}
                  </div>

                  <div className="flex justify-center mt-4 gap-x-4 ">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      キャンセル
                    </button>
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md disabled:cursor-not-allowed hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => {
                        setIsProcessing(true);
                        handleCheckout();
                      }}
                      disabled={value.length <= 1}
                    >
                      {isProcessing ? (
                        <div>
                          <PaymentLoading />
                        </div>
                      ) : (
                        <div>購入画面へ</div>
                      )}
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
