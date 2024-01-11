import {showMessage} from 'react-native-flash-message';
import auth from '@react-native-firebase/auth';
export class AppConstValue {
  static ButtonOpacity = 1;
}

export const ShowMessage = (message, color, textColor) => {
  showMessage({
    message: message,
    backgroundColor: color,
    color: textColor,
  });
};

export const printLog = (tag, msg) => {
  console.log(`${tag} ::: ${msg}`);
};

export const getAge = birthDate => {
  var today = new Date();
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const sendFirebasePhoneOtp = async (phoneNumber, onCode, onError) => {
  printLog('number',phoneNumber)
  const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
  printLog('sendFirebasePhoneOtp', `${confirmation}`);
  onCode(confirmation);
  
};

export const matchAuthCode = async (
  confirm,
  code,
  onSuccess,
  onError,
  loading,
) => {
  try {
    let res = await confirm.confirm(code);
    printLog(confirm, JSON.stringify(res));
    onSuccess(res?.user?.uid);
  } catch (err) {
    printLog('confirm error', err);
    loading(false);
    // onError(err);
    if (
      // err.code == auth / invalid - verification - code ||
      err.code === 'auth/session-expired'
    ) {
      ShowMessage('Invalid Verification code');
    } else if (err.code === 'missing-phone-number') {
      ShowMessage('Missing Phone Number.');
    } else if (err.code === 'auth/invalid-phone-number') {
      ShowMessage('Invalid Phone Number.');
    } else if (err.code === 'auth/quota-exceeded') {
      ShowMessage('SMS quota exceeded.Please try again later.');
    } else {
      ShowMessage(Error);
    }
    onError(err);
  }
};
