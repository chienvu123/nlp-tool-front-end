export const validateCredentials = (email, password) => {
  if (!email || !password) {
    return 'Email và password chưa được nhập.';
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return 'Email không hợp lệ.';
  }

  if (!(password.length >= 6)) {
    return 'Mật khẩu cần ít nhất 6 ký tự.';
  }

  return null;
};

export const validateNewUser = (name, email, password, passwordConfirm) => {
  if (!name) {
    return 'Họ và tên chưa được nhập.';
  }

  if (password !== passwordConfirm) {
    return 'Password and password xác nhận không giống nhau.';
  }

  return validateCredentials(email, password);
};
