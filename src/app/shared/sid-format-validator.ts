import { AbstractControl } from "@angular/forms";

export function ValidatorSidFormat(control: AbstractControl) {
  if (control.value[0] == 'A' && control.value[1] == '2') {
    //驗證成功
    return null;
  }
  else {
    //驗證失敗
    return {
      'sidformat': true,
      'sidformat_errormsg': '身分證字號格式錯誤'
    }
  }
}
