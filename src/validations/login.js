import validator from "validator";

const loginUser = (data) => {
  let errors = {};
  const { email, password } = data;

  if (localStorage.registerUSER) {
    let ltUser = localStorage.registerUSER;
    ltUser = JSON.parse(ltUser);

    let emailIndex = ltUser.findIndex((item) => item.email === email);

    console.log(emailIndex)
    if (emailIndex > -1) {
      let getEmail = ltUser[emailIndex].email;
      console.log(email)
      let getpassword = ltUser[emailIndex].password;

      if (getEmail !== email) {
         errors.email = "Email does not exists...!";
      }
      if (getpassword !== password) {
        errors.password = "Password does not match...!";
      }
    }else{
      errors.email = "Email does not exists...!";
    }
    
  }

  if (validator.isEmpty(email)) {
    errors.email = "Email should be required ...!";
  }
  if (validator.isEmpty(password)) {
    errors.password = "Password should be required ...!";
  }

  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default loginUser;
