import { useState } from "react";
import ErrorMessage from "../components/ErrorMessage";
import useLogin from "../hooks/useLogin";

const Login = ({ closeModalLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    login,
    error,
    messageError,
    newUser,
  } = useLogin({ closeModalLogin });

  const handleToogle = () => {
    setIsLogin(!isLogin);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isLogin) {
      await login();
    } else {
      await newUser();
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      {error && <ErrorMessage messageError={messageError} />}
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
          className="mx-auto h-10 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt="Your Company"
        />
        <h2 className="mt-10 text-center text-5xl font-bold leading-9 tracking-tight text-gray-900">
          {isLogin ? <span>Login</span> : <span>New account</span>}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto  sm:w-full sm:max-w-sm">
        <form className="space-y-6" action="#" method="POST">
          {!isLogin && (
            <div>
              <label
                htmlFor="name"
                className="block text-2xl font-medium  leading-6 text-gray-900"
              >
                Name
              </label>
              <div className="mt-2">
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={name}
                  autoComplete="name"
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
                />
              </div>
            </div>
          )}
          <div>
            <label
              htmlFor="email"
              className="block text-2xl font-medium  leading-6 text-gray-900"
            >
              Email
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="email"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm p-4 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-2xl"
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-2xl font-medium leading-6 text-gray-900"
              >
                Password
              </label>
            </div>
            <div className="mt-2">
              <input
                id="password"
                name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current-password"
                required
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 p-4 text-2xl"
              />
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={handleSubmit}
              className="flex w-full justify-center rounded-md bg-indigo-600 px-4 py-4 text-2xl font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              {isLogin ? <span>Login</span> : <span>Create</span>}
            </button>
          </div>
        </form>

        <p className="mt-10 text-center text-2xl text-gray-500">
          {isLogin ? (
            <>
              <span>Not a member?</span>
              <a
                href="#"
                className="font-semibold text-2xl italic leading-6 text-indigo-600 hover:text-indigo-500"
                onClick={handleToogle}
              >
                click me
              </a>
            </>
          ) : (
            <>
              <span>Have an account?</span>
              <a
                href="#"
                className="font-semibold text-2xl italic leading-6 text-indigo-600 hover:text-indigo-500"
                onClick={handleToogle}
              >
                click me
              </a>
            </>
          )}
        </p>
      </div>
    </div>
  );
};

export default Login;
