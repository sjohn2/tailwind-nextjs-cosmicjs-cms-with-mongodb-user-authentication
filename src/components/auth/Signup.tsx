import { useState } from 'react';

import Link from 'next/link';
import Router from 'next/router';

import { Meta } from '../../layout/Meta';
import { registerUser } from '../../lib/auth';
import { Footer } from '../../templates/Footer';
import { Header } from '../../templates/Header';
import { AppConfig } from '../../utils/AppConfig';

function Signup() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  async function handleSignupSubmit(e) {
    e.preventDefault();
    console.log('here');

    try {
      const data = await registerUser({
        username,
        password,
        email,
      });
      console.log(data);

      if (data.success) {
        console.log('added data');
        Router.push('/account/login');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">Signup</h3>
          <form onSubmit={handleSignupSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="username">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  id="usernameInput"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <label className="block" htmlFor="emailInput">
                  Email
                </label>
                <input
                  type="text"
                  placeholder="Email"
                  id="emailInput"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="passwordInput"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  className="px-6 py-2 mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Register
                </button>
                <Link
                  href="/account/login"
                  className="text-sm text-blue-600 hover:underline"
                >
                  Sign In
                </Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Signup };
