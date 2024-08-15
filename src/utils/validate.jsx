export const checkValidDataSignUp = (name, username, email, password) => {
  const isNameValid = /^[a-zA-Z]+ [a-zA-Z]+$/.test(name);

  const isUserNameValid = /^[A-Za-z][A-Za-z0-9_]{7,29}$/.test(username);

  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let usernameMsg = "";
  let nameMsg = "";
  let passwordMsg = "";
  let emailMsg = "";

  if (isEmailValid && isPasswordValid) {
    return { nameMsg, passwordMsg, emailMsg };
  } else {
    if (!isUserNameValid) {
      usernameMsg = "Username is not valid!";
    }
    if (!isPasswordValid) {
      passwordMsg = "Password is not valid!";
    }
    if (!isEmailValid) {
      emailMsg = "Email ID is not valid!";
    }
    if (!isNameValid) {
      nameMsg = "Name is not valid!";
    }

    return { nameMsg, usernameMsg, passwordMsg, emailMsg };
  }
};

export const checkValidDataSignIn = (email, password) => {
  const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(
    email
  );

  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

  let passwordMsg = "";
  let emailMsg = "";

  if (isEmailValid && isPasswordValid) {
    return { passwordMsg, emailMsg };
  } else {
    if (!isPasswordValid) {
      passwordMsg = "Password is not valid!";
    }
    if (!isEmailValid) {
      emailMsg = "Email ID is not valid!";
    }

    return { passwordMsg, emailMsg };
  }
};
