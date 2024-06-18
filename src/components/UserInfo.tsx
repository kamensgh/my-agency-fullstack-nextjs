import React from 'react';
import { getUser } from '@/lib/data';
import { UserType } from '@/lib/utils';

// const getUserData = async (id) => {
//   const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id, {
//     cache: 'no-store',
//   });

//   if (!res.ok) {
//     throw new Error('Something went wrong');
//   }

//   const data = await res.json();
//   return data;
// };

const UserInfo = async ({ userId }: { userId: string }) => {
  const user: UserType = await getUser(userId);

  return (
    <div className="flex items-center mt-6">
      <img
        className="object-cover object-center w-10 h-10 rounded-full"
        src={user?.img}
        alt="user"
      />

      <div className="mx-4">
        <h1 className="text-sm text-gray-700 dark:text-gray-200">
          {user?.username}
        </h1>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {user?.email}
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
