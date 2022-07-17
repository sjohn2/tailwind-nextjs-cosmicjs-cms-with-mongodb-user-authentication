import { useEffect, useState } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import { toast } from 'react-hot-toast';

import { Meta } from '../../layout/Meta';
import { removeToken } from '../../lib/token';
import { Footer } from '../../templates/Footer';
import { Header } from '../../templates/Header';
import { AppConfig } from '../../utils/AppConfig';

function Signin({slug}) {
  const [credentials, setCredentials] = useState({
    username: '',
    password: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  console.log(slug);

  useEffect(() => {
    removeToken();
  }, []);

  const onChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
   // console.log(credentials);
  };

  async function handleSigninSubmit(e) {
    e.preventDefault();

    setIsLoading(true);

    const response = await fetch(`/api/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        username: credentials.username,
        password: credentials.password,
      }),
    });
    const json = await response.json();
    // login success!!
    if (json.success === true) {
      console.log('login is successful');
      setIsLoading(false);

      setCookie(null, 'authToken_abc', json.authToken, {
        maxAge: 30 * 24 * 60 * 60,
        path: '/',
      });

      // const abc_cookies = parseCookies('authToken_abc');
      // console.log(abc_cookies);

      toast.success('User Logged In SuccessFully !', {
        style: {
          border: '2px solid green',
          padding: '16px',
          color: 'green',
          backgroundColor: '#A6F987',
          fontWeight: '800',
        },
        iconTheme: {
          primary: 'green',
          secondary: '#FFFAEE',
        },
      });
      if(slug && slug !== ''){
        router.push('/posts/'+slug);
      }else{
        router.push('/');
      }
      
    }
  }

  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="px-8 py-6 mt-4 text-left bg-white shadow-lg">
          <h3 className="text-2xl font-bold text-center">
            Login to your account
          </h3>
          <form onSubmit={handleSigninSubmit}>
            <div className="mt-4">
              <div>
                <label className="block" htmlFor="user name">
                  Username
                </label>
                <input
                  type="text"
                  placeholder="username"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="username"
                  name="username"
                  onChange={onChange}
                />
              </div>
              <div className="mt-4">
                <label className="block">Password</label>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                  id="password"
                  name="password"
                  onChange={onChange}
                />
              </div>

              <div className="flex items-baseline justify-between">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="px-6 py-2 mt-4 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700"
                >
                  Login
                </button>

                <Link href="/account/register">Sign Up</Link>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Signin };
