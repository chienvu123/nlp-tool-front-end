import redirect from './redirect';
import { setCookie, getCookie, removeCookie } from './session';
import { validateCredentials, validateNewUser } from './validation';
import { login, register } from '../apis/auth';
import { roles } from '../configs/roles';

export const signIn = async (email, password) => {
  const error = validateCredentials(email, password);
  if (error) {
    return error;
  }
  const { status, results } = await login(email, password);
  if (status !== 1) {
    return 'Tên đăng nhập hoặc tài khoản không đúng';
  }
  setCookie('jwt', results.accessToken);
  redirect('/user/profile');
  return null;
};

export const signUp = async (
  name,
  email,
  password,
  passwordConfirm,
  selectedCategories,
) => {
  const error = validateNewUser(name, email, password, passwordConfirm);
  if (error) {
    return error;
  }

  const { status } = await register(email, name, password, selectedCategories);

  if (status !== 1) {
    return 'Tên đăng nhập hoặc tài khoản không đúng';
  }

  setCookie('success', `${name}, your account was created.`);
  redirect('/auth/login');
  return null;
};

export const signOut = (ctx = {}) => {
  if (process.browser) {
    removeCookie('jwt');
    redirect('/auth/login', ctx);
  }
};

export const getJwt = ctx => {
  return getCookie('jwt', ctx.req);
};

export const isAuthenticated = ctx => !!getJwt(ctx);

export const redirectIfAuthenticated = ctx => {
  if (isAuthenticated(ctx)) {
    redirect('/user/profile', ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAuthenticated = ctx => {
  if (!isAuthenticated(ctx)) {
    redirect('/auth/login', ctx);
    return true;
  }
  return false;
};

export const redirectIfNotAdmin = (user, ctx) => {
  const role = user.roles.find(value => value.name === roles.ADMIN);
  if (!role) {
    redirect('/user/profile', ctx);
    return true;
  }
  return false;
};

export const redirectIfNotManager = (user, ctx) => {
  const role = user.roles.find(value => value.name === roles.MANAGER);
  if (!role) {
    redirect('/user/profile', ctx);
    return true;
  }
  return false;
};

export const checkGroupManager = user => {
  const role = user.roles.find(value => value.name === roles.GROUP_MANAGER);
  if (role) {
    return true;
  }
  return false;
};

export const checkManager = user => {
  const role = user.roles.find(value => value.name === roles.MANAGER);
  if (role) {
    return true;
  }
  return false;
};

export const redirectIfNotGroupManager = (user, ctx) => {
  if (!checkGroupManager(user)) {
    redirect('/user/profile', ctx);
    return true;
  }
  return false;
};

export const redirectIfNotGroupManagerOrManager = (user, ctx) => {
  if (checkGroupManager(user) || checkManager(user)) {
    return false;
  }
  redirect('/user/profile', ctx);
  return true;
};

export const checkAdmin = user => {
  const role = user.roles.find(value => value.name === roles.ADMIN);
  if (role) {
    return true;
  }
  return false;
};
