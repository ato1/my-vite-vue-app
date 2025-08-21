
// 数据脱敏处理
// 处理名字
export function desensitizeName(nameStr) {
  const tempArr = nameStr.split("");
  let len = tempArr.length;
  if (len <= 3) {
    tempArr[0] = "*";
  }
  if (3 < len && len <= 6) {
    tempArr[0] = "*";
    tempArr[1] = "*";
  }
  if (6 < len) {
    for (let i = 2; i < 6; i++) {
      tempArr[i] = "*";
    }
  }
  return tempArr.join("");
}
// 处理手机号
export function desensitizePhone(phoneNum) {
  const tempArr = phoneNum.split("");
  tempArr.splice(3, 5, "*****");
  return tempArr.join("");
}
// 处理银行卡号
export function desensitizeBankCard(cardNum, start = 4, end = 4) {
  if (!cardNum) {
    return;
  }
  const tempArr = cardNum.split("");
  tempArr.splice(start, cardNum.length - (start + end), "*****");
  return tempArr.join("").replace(/\s/g, "");
}
