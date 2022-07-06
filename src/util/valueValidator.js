const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/g;
const nameRegex = /^[a-zA-Z]+$/g;
const userNameRegex = /^[a-zA-Z0-9]+$/g;

// Password Conditions
const condition0 = /(?=.*[a-zA-Z])/; //should contain atleast 1 letter
const condition1 = /(?=.*\d)/; //should contain atleast 1 digit
const condition2 = /(?=.*[a-z])/; //should contain atleast 1 lowercase
const condition3 = /(?= .*[A-Z])/; //should contain atleast 1 uppercase
const condition4 = /[a-zA-Z0-9]{8,}/; //should contain atleast 8 characters

/** Checks if given value is empty
 * @params value @type string
 * @params name of given fiels
 * @params setError State to be passed
 */
function empty(value) {
  if (isEmpty(value.trim())) return true;
  else return false;
}

function isEmpty(value) {
  if (value === "") return true;

  return false;
}

function onlyLetters(value) {
  if (nameRegex.test(value)) return true;
  else {
    return false;
  }
}

function meetLength(value, name, minLength, maxLength) {
  if (value.length > minLength && value.length < maxLength) {
    return true;
  }
  if (value.length < minLength) {
    setError({ name, message: `${name} cannot be less than ${minLength}` });
    return false;
  }
  if (field.value.length > maxLength) {
    setError(name, `${name} cannot be more than ${maxLength}`);
    return false;
  }

  return false;
}

function containsChar(value, code) {
  switch (code) {
    case 1:
      return matchWithRegex(condition0, value);

    case 2:
      return matchWithRegex(condition1, value);
    case 3:
      return matchWithRegex(condition2, value);
    case 4:
      return matchWithRegex(condition3, value);
    case 5:
      return matchWithRegex(condition4, value);
    case "email":
      return matchWithRegex(emailRegex, value);
    case "phone":
      return matchWithRegex(phoneRegex, value);
    case "username":
      return matchWithRegex(userNameRegex, value);

    default:
      return false;
  }
}

function matchWithRegex(regEx, value) {
  if (value.match(regEx)) return true;
  else {
    return false;
  }
}

// Validation for Logistics Forms

export const addressCheck = (value) => {
  if (!value || empty(value)) return false;
  return true;
};

export const phoneCheck = (value) => {
  if (!value || !containsChar(value, "phone")) return false;
  return true;
};

export const nameCheck = (value) => {
  if (!value || empty(value) || !onlyLetters(value)) return false;
  return true;
};

// Example
/* export const emailCheck = (value) => {
  if (empty(value) || !containsChar(value, "email")) return false;

  return true;
};



export const userNameCheck = (field) => {
  if (empty(field) || !containsChar(field, "username")) return false;
  return true;
};



export const passCheck = (field) => {
  if (
    empty(field) ||
    !meetLength(field, 4, 30) ||
    !containsChar(field, 1) ||
    !containsChar(field, 2) ||
    !containsChar(field, 3) ||
    !containsChar(field, 4) ||
    !containsChar(field, 5)
  )
    return false;
  return true;
};
 */
