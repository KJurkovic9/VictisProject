import { useRouter } from 'next/router';
import React from 'react';
import HomePage from '../components/HomePage';

export default function Unauthorized() {
  const router = useRouter();
  const { message } = router.query;

  return (
    <HomePage title="Unauthorized Page">
      <h1 className="text-xl">Access Denied</h1>
      {message && <div className="mb-4 text-red-500">{message}</div>}
    </HomePage>
  );
}
