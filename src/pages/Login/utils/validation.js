export const validateInputs = (data) => {
  const result = {};

  if (data.email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(data.email)) {
      result.email = "Invalid e-mail";
    }
  }

  if (data.password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;
    if (!passwordRegex.test(data.password)) {
      result.password = "Invalid password";
    }
  }

  if (data.rePassword && data.password !== data.rePassword) {
    result.rePassword = "Passwords do not match";
  }

  return result;
};
