/* eslint-disable react/prop-types */
const UsersTable = ({ user }) => {
  return (
    <>
      <tbody>
        <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
          <th
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {user?.name}
          </th>
          <td className="px-6 py-4">{user?.email}</td>
          <td className="px-6 py-4">{user?.role}</td>
          <td className="px-6 py-4">
            <a
              href="#"
              className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
            >
              Edit
            </a>
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default UsersTable;
