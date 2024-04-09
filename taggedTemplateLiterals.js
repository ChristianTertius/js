/* 
  Tagged Templates -> bisa baca template literals dari function
  
  Structure:
  const str = hightlight()

  function coba(strings, ...values){
    return values;
  }
  strings: buat stringsnya
  ...values: ambil expressionnya

  📌Note:
    - Reduce bisa segabung isi dr array
      reduce([accumulator][])
*/

// const nama= 'budi'
// const umur= 32

// function coba(strings, ...values){
//   // let result = '';    
//   // strings.forEach((str, i) => {
//   //   result += `${str}${values[i] || ''}`;
//   // })

//   // return result;

//   return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`,'')
// }

// const str= coba`nama saya ${nama}, saya umur ${umur}`
// console.log(str);

// Highlight
const nama= 'budi'
const umur= 32
const email = 'ct17j34@gmail.com'
const alamat = 'Kebon Jeruk'

function higlight(strings, ...values){
  return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`,'')
}

const str= higlight`nama saya ${nama}, saya umur ${umur}, dan email saya ${email}, saya beralamat di ${alamat}`

document.body.innerHTML = str;