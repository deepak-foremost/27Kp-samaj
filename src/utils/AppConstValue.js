import {showMessage} from 'react-native-flash-message';
export class AppConstValue {
  static ButtonOpacity = 1;
}

export const ShowMessage = (message,color) => {
  showMessage({message: message,backgroundColor:color});
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
