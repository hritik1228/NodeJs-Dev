const validator = require('validator');

const validationSignUpData = (req) =>{
    const {firstName, lastName, emailId, password} = req?.body

    if(!firstName || !lastName){
        throw new Error("Name is not valid");
    }
    else if(!validator.isEmail(emailId)){
        throw new Error("EmailId is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Please Enter a strong password");
    }
};

const validateEditFields = (req) => {
  const allowedEditFields = [
    "firstName",
    "lastName",
    "emailId",
    "age",
    "gender",
    "about",
    "photoURL",
    "skills",
  ];
  const isEditAllowed = Object.keys(req.body).every((field) =>
    allowedEditFields.includes(field)
  );
  return isEditAllowed;
};

module.exports = {validationSignUpData,validateEditFields};