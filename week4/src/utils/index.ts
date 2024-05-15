export const validatePassword = (password: string): boolean => {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  return regex.test(password);
};

export const formatPhoneNumber = (prevPhoneNumber: string): string => {
  const newNumber = prevPhoneNumber;

  if ((newNumber.length === 4 || newNumber.length === 9) && newNumber[newNumber.length - 1] !== '-') {
    return newNumber.slice(0, newNumber.length - 1) + '-' + newNumber[newNumber.length - 1];
  } else if ((newNumber.length === 4 || newNumber.length === 9) && newNumber[newNumber.length - 1] === '-') {
    return newNumber.slice(0, newNumber.length - 1);
  }
  return newNumber;
};
