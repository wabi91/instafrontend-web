import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

import { routes } from '../routes';
import { DEFAULT_ERROR_MESSAGE } from '../constants';
import FormError from '../components/auth/FormError';

const CREATE_ACCOUNT_MUTATION = gql`
  mutation createAccount(
    $username: String!
    $email: String!
    $name: String!
    $location: String!
    $githubUsername: String!
    $password: String!
  ) {
    createAccount(
      username: $username
      email: $email
      name: $name
      location: $location
      githubUsername: $githubUsername
      password: $password
    ) {
      ok
      error
    }
  }
`;

const CreateAccount = () => {
  const navigate = useNavigate();
  const [createAccountError, setCreateAccountError] = useState(
    DEFAULT_ERROR_MESSAGE
  );
  const { register, handleSubmit, getValues, formState } = useForm({
    mode: 'onChange',
  });
  const onSubmitValid = (data: any) => {
    if (loading) {
      return;
    }
    createAccount({
      variables: { ...data },
    });
  };
  const onCompleted = (data: any) => {
    const { username, password } = getValues();
    const { createAccount } = data;
    if (!createAccount?.ok) {
      setCreateAccountError({
        message: createAccount?.error,
      });
      return;
    }
    navigate(routes.home, {
      state: {
        notifications: {
          title: 'Successfully created!',
          description: 'Account created. Please log in.',
        },
        username,
        password,
      },
    });
  };
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT_MUTATION, {
    onCompleted,
  });

  const clearCreateAccoutError = () => {
    setCreateAccountError(DEFAULT_ERROR_MESSAGE);
  };

  return (
    <div className="flex flex-col justify-center min-h-full py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Create your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="px-4 py-8 bg-white shadow sm:rounded-lg sm:px-10">
          <form className="space-y-6" onSubmit={handleSubmit(onSubmitValid)}>
            <div>
              <label
                htmlFor="username"
                className="block text-sm font-medium text-gray-700"
              >
                Username
              </label>
              <div className="mt-1">
                <input
                  {...register('username', {
                    required: 'Username is required',
                    minLength: {
                      value: 5,
                      message: 'Username is should be longer than 5 chars.',
                    },
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="username"
                  name="username"
                  type="text"
                  autoComplete="username"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
              </div>
              <FormError message={formState?.errors?.username?.message} />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <div className="mt-1">
                <input
                  {...register('email', {
                    required: 'Email is required',
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormError message={formState?.errors?.email?.message} />
              </div>
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <div className="mt-1">
                <input
                  {...register('name', {
                    required: 'Name is required',
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormError message={formState?.errors?.name?.message} />
              </div>
              <label
                htmlFor="githubUsername"
                className="block text-sm font-medium text-gray-700"
              >
                Github Username
              </label>
              <div className="mt-1">
                <input
                  {...register('githubUsername', {
                    required: 'Github Username is required',
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="githubUsername"
                  name="githubUsername"
                  type="text"
                  autoComplete="githubUsername"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormError
                  message={formState?.errors?.githubUsername?.message}
                />
              </div>
              <label
                htmlFor="location"
                className="block text-sm font-medium text-gray-700"
              >
                Location
              </label>
              <div className="mt-1">
                <input
                  {...register('location', {
                    required: 'Location is required',
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="location"
                  name="location"
                  type="text"
                  autoComplete="location"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormError message={formState?.errors?.location?.message} />
              </div>
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <div className="mt-1">
                <input
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password is should be longer than 8 chars.',
                    },
                  })}
                  onKeyDown={clearCreateAccoutError}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full px-3 py-2 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                />
                <FormError message={formState?.errors?.password?.message} />
              </div>
            </div>

            <div className="flex justify-center w-full">
              <FormError message={createAccountError.message} />
            </div>

            <div>
              <button
                type="submit"
                className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
                  !formState.isValid || loading
                    ? 'opacity-50 pointer-events-none'
                    : null
                }`}
                disabled={!formState.isValid || loading}
              >
                {loading ? 'Creating...' : 'Create Account'}
              </button>
            </div>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 text-gray-500 bg-white">
                  Already have an account?
                </span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link
                to={routes.home}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateAccount;
