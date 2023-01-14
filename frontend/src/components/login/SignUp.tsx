import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');
  const { setValue } = useLocalStorage();
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const { email, password } = e.target.elements;
    try {
      await auth.createUserWithEmailAndPassword(email.value, password.value);
      setValue([{ id: '', title: '', price: 0, image: '', email: email?.value, state: false }]);
      navigate('/');
    } catch (error: any) {
      switch (error.code) {
        default:
          setError('既に登録済みのメールアドレスです。');
          break;
      }
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div>
          <div className="flex justify-center mb-4 text-center">
            <div>
              <div className="flex-none order-none h-10 text-3xl not-italic font-medium text-black w-28 grow-0">
                Classes
              </div>

              <div className="mt-2">アカウント登録</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="mt-2 text-sm text-center text-red-500 break-all w-80">{error && error}</div>
              <div className="text-sm text-gray-500">メールアドレス</div>
              <div className="my-1">
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                />
              </div>
            </div>
            <div>
              <div className="mt-4 text-sm text-gray-500">パスワード</div>
              <div className="my-1">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                />
              </div>
            </div>

            <div>
              <button type="submit" className="px-4 py-2 my-4 text-sm font-medium text-white bg-blue-800 rounded w-80">
                登録
              </button>
            </div>
          </form>
          <div>
            ログインは
            <Link to={'/login'} className="text-blue-900 underline">
              こちら
            </Link>
            から
          </div>
        </div>
      </div>
    </>
  );
};
