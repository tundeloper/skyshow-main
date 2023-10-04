export function isEmail(emailAdress) {
  let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (emailAdress.match(regex)) return true;
  else return false;
}

export function isValidPhone(phone) {
  if (phone.length === 11) return true;
  return false;
}

export function isValidPassword(pass1, pass2) {
  const isaccept = pass1.length > 8;
  if (!isaccept)
    return {
      status: false,
      message: "password should be more than 8 character",
    };
  if (isaccept && pass1 === pass2) {
    return {
      status: true,
    };
  } else {
    return { status: false, message: "your password are not match" };
  }
}

export function isValidName(name) {
  console.log(name);
  return name.trim().length > 4;
}
