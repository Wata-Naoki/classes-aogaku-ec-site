import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { Header } from '../components/layouts/Header';
import { Slider } from '../components/ui/slider/Slider';
import { useAuthContext } from '../context/AuthContext';

export const Home = () => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  if (!user) {
    navigate('/login');
    return (
      <>
        <Link to={'/login'} className="text-blue-900 underline">
          ログイン
        </Link>
        してください
      </>
    );
  }
  return (
    <div>
      <div>home</div>
    </div>
  );
};
