// Destructuring

// function calc(a,b){
//   return [a + b, a * b, a-b, a/b]
// }

// const [tambah, kali] = tambahKali(2,3);
// console.log(tambah);
// console.log(kali);

// const [tambah, kali, kurang, bagi = 'tidak ada'] = calc(2,3)
// console.log(bagi);


// return value object => urutan tidak berpengaruh, karena sudah terasosiasi dengan nama propertynya bukan urutannya
// function calc(a,b){
//   return{
//     tambah: a+b,
//     kurang: a-b,
//     kali: a*b,
//     bagi: a/b
//   }
// }

// const {bagi, tambah, kali, kurang} = calc(2,3)
// console.log(kurang);

// destructuring function arguments
const siswa1 = {
  nama: 'budi',
  umur: 32,
  email: 'budi@gmail.com',
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 90
  }
}

// function printSiswa(mhs){
//   return `nama saya ${mhs.nama}, saya umur ${mhs.umur}`
// }
// console.log(printSiswa(siswa1));

function printSiswa({nama, umur, nilai: {tugas, uts,uas}}){
  return `nama saya ${nama}, saya umur ${umur}, dan nilai uas saya adalah ${uas}`
}

console.log(printSiswa(siswa1));