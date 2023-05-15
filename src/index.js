export function reverseStr(str) {
    if (typeof str === 'string'){
        return str.split('').reverse().join('');
    }else{
        return 'Введены некорректные данные'
    }
    
  }
//   module.exports = multiply;