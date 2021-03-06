const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
import { getCookie } from 'cookies-next';

const jwtSecretKey = process.env.JWT_SECRET_KEY;

// Bcrypt need to be here..
const saltRounds = 10;
const salt = bcrypt.genSaltSync(saltRounds);

export function isTypeEqual(leftInp, rightInpt) {
  return trueTypeOf(leftInp) === trueTypeOf(rightInpt);
}

export function trueTypeOf(inp) {
  return Object.prototype.toString.call(inp).slice(8, -1).toLowerCase();
}

export function hashPassword(password) {
  return bcrypt.hashSync(password, salt);
}

export function checkPassword(currentHashedPassword, hashedPassword) {
  return bcrypt.compare(currentHashedPassword, hashedPassword);
}

export function verifyToken(token) {
  return jwt.verify(token, jwtSecretKey);
}

export function errorMessage(error, message) {
  return {
    isSuccessful: false,
    error,
    message,
  };
}

export function isValidSession(){

  let cookies = getCookie("authToken_abc");
  let cookieFlag = false; 

  if(cookies && cookies !== "00"){ //valid session
    cookieFlag = true;
  }else{ //first time
    cookieFlag = false;
  }

  return cookieFlag;
}
