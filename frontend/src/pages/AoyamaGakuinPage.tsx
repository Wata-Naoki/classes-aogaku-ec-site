import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { FacultyLayout } from '../components/layouts/FacultyLayout';
import { Header } from '../components/layouts/Header';
import { Slider } from '../components/ui/slider/Slider';
import { useAuthContext } from '../context/AuthContext';

export const AoyamaGakuinPage = () => {
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
    <div className="mb-24">
      <div className="mt-8 text-2xl text-center">Aoyama Gakuin University.</div>
      <div>
        <Slider />
      </div>
      <div>
        <FacultyLayout />
      </div>
    </div>
  );
};
