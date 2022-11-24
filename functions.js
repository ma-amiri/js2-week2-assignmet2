const changeEmailFromGmailToHicoders = (mailAdress) => {
    let formatString = mailAdress.map(item => item.toLowerCase().replace("gmail.com", "hicoders.ch"))
    const result = formatString.reverse()
    return result;
}
const findSuperNumbers = (pArray) => {
    let supperNumberArray = [];
    pArray.map(superNumber => {
        let numberList = String(superNumber).split('').map(Number)
        let sumOfDigit = 0;
        numberList.map(digit => {
            sumOfDigit += Math.pow(digit, numberList.length)
        })
        if (sumOfDigit === superNumber) {
            supperNumberArray.push(superNumber)
        }
    })
    console.log(supperNumberArray)
    return supperNumberArray;
};
export { changeEmailFromGmailToHicoders, findSuperNumbers };
