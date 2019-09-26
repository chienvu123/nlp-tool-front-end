import { getUsers, getUserById } from '../apis/user';
import { getDisplayRole } from '../configs/roles';
import { getUserStatus } from '../configs/userStatus';

export async function getAllUsers({ search, fields, offset, limit, sort }) {
  try {
    const { data } = await getUsers({ search, fields, offset, limit, sort });
    return {
      users: data.results.users.map(user => {
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          selectedRole: user.roles[0].name,
          roles: user.roles.map(role => {
            return {
              name: getDisplayRole(role.name),
              key: role.name,
              categories: role.categories.map(category => ({
                id: category.id,
                name: category.name,
              })),
            };
          }),
          status: {
            key: user.status,
            value: getUserStatus(user.status),
          },
        };
      }),
      total: data.results.metadata.total,
    };
  } catch (error) {
    return { error };
  }
}

export async function getUser(userId) {
  try {
    const { user } = await getUserById(userId);
    return {
      user: {
        id: user.id,
        email: user.email,
        name: user.name,
        selectedRole: user.roles[0].name,
        roles: user.roles.map(role => {
          return {
            name: getDisplayRole(role.name),
            key: role.name,
            categories: role.categories.map(category => ({
              id: category.id,
              name: category.name,
            })),
          };
        }),
        status: {
          key: user.status,
          value: getUserStatus(user.status),
        },
      },
    };
  } catch (error) {
    return { error };
  }
}
