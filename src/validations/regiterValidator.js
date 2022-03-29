import validator from "validator";

const regiterValidator = (data) => {
  let errors = {};

  const { fname, lname, email, phoneNumber, password, cpassword } = data;

  if (localStorage.registerUSER) {
    let ltUser = localStorage.registerUSER;
    ltUser = JSON.parse(ltUser);

    let findEmail = ltUser.findIndex((item) => item.email === email);

    if (findEmail > -1) {
      let emailId = ltUser[findEmail].email;
      let phoneNo = ltUser[findEmail].phoneNumber;
      let userName = ltUser[findEmail].fname;

      if (userName === fname) {
        errors.fname = "Username is allready Exists...! ";
      }

      if (emailId === email) {
        errors.email = "Email is allready Exists....!";
      }
      if (phoneNo === phoneNumber) {
        errors.phoneNumber = "Phone Number is allready Exists....!";
      }
    }
  }

  console.log(data);

  if (validator.isEmpty(fname)) {
    errors.fname = "Name should be required....!";
  }

  if (validator.isEmpty(lname)) {
    errors.lname = "Last name should be required....!";
  }
  if (validator.isEmpty(email)) {
    errors.email = "Email should be required....!";
  }

  if (validator.isEmpty(phoneNumber)) {
    errors.phoneNumber = "Phone Number should be required....!";
  }

  if (validator.isEmpty(password)) {
    errors.password = "Password should be required....!";
  }

  if (validator.isEmpty(cpassword)) {
    errors.cpassword = "Confirm password should be match....!";
  }
  return {
    isInvalid: Object.keys(errors).length > 0,
    errors: errors,
  };
};

export default regiterValidator;
