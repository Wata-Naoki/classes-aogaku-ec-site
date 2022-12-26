import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebaseConfig';

export const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await auth.signInWithEmailAndPassword(email.value, password.value);
      navigate('/');
    } catch (error: any) {
      switch (error.code) {
        case 'auth/invalid-email':
          setError('正しいメールアドレスの形式で入力してください。');
          break;
        case 'auth/user-not-found':
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
        case 'auth/wrong-password':
          setError('パスワードに誤りがあります。');
          break;
        default:
          setError('メールアドレスかパスワードに誤りがあります。');
          break;
      }
    }
  };

  const handleLogin = async (event: any) => {
    try {
      await auth.signInWithPopup(provider);
      navigate('/');
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen">
        <div>
          <div className="flex justify-center mb-4 text-center">
            <div className="flex flex-col items-center justify-center ">
              <div className="h-10 text-3xl not-italic font-medium text-black w-28">Classes</div>

              <div className="mt-2"> ログイン</div>
            </div>
          </div>

          <form onSubmit={handleSubmit}>
            <div>
              <div className="mt-2 text-sm text-center text-red-500 break-all w-80">{error && error}</div>
              <label className="text-sm text-gray-500">メールアドレス</label>
              <div className="my-1">
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                />
              </div>
            </div>
            <div>
              <label className="mt-4 text-sm text-gray-500">パスワード</label>
              <div className="my-1">
                <input
                  name="password"
                  type="password"
                  placeholder="password"
                  className="py-1 pl-1 text-left border rounded border-slate-400 focus:outline-0 w-80 "
                />
              </div>
            </div>
            <div>
              <button type="submit" className="px-4 py-2 my-4 text-sm font-medium text-white bg-blue-800 rounded w-80">
                ログイン
              </button>
            </div>
          </form>
          <div>
            <button
              onClick={handleLogin}
              type="submit"
              className="px-4 py-2 my-4 text-sm font-medium text-white bg-blue-800 rounded w-80"
            >
              Googleログイン
            </button>
          </div>
          <div>
            ユーザ登録は
            <Link to={'/sign-up'} className="text-blue-900 underline">
              こちら
            </Link>
            から
          </div>
        </div>
      </div>
    </>
  );
};
