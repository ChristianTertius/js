/* 
  Callback

  📌 Notes:
      - showMessage(halo) -> tidak langsung di eksekusi, tunggu dipanggil
        showMessage(halo()) -> langsung di eksekusi
      - high order function, biasanya juga merupakan callback function

*/


/* 
  Synchronous Callback
  -> jarang digunakan, function yg parameternya function juga
*/
  
// function showMessage(callback){
//   const nama = prompt('Masukkan nama: ')
//   callback(nama);
// }

// showMessage(nama => alert(`Halo, ${nama}`))



// const mhs = [
//   {
//     "nama": "budi",
//     "nim": "250198271323",
//     "email": "budi@gmail.com",
//     "jurusan": "Computer Science",
//     "idDosenWali": 1
//   },
//   {
//     "nama": "wawan",
//     "nim": "223418271323",
//     "email": "wawan@gmail.com",
//     "jurusan": "Computer Engineering",
//     "idDosenWali": 2
//   },
//   {
//     "nama": "sinta",
//     "nim": "26663271323",
//     "email": "sinta@gmail.com",
//     "jurusan": "Management",
//     "idDosenWali": 3
//   }
// ]

// console.log("mulai");
// mhs.forEach(m => {
//   for(let i = 0; i<1000000; i++){
//     let date = new Date();
//   }
//   console.log(m.nama)
// })
// console.log("selesai");


/* 
  Asynchronous Callback
*/

// function getDataMahasiswa(url, success, error){
//   let xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function (){
//     if(xhr.readyState === 4){
//       if(xhr.status === 200){
//         success(xhr.response)
//       } else if(xhr.status === 404){
//         error();
//       }
//     }
//   }

//   xhr.open('get', url)
//   xhr.send();
// }

// console.log('mulai');
// getDataMahasiswa('mahasiswa.json', results => {
//   const mhs = JSON.parse(results)
//   mhs.forEach(m => console.log(m.nama))
// }, ()=>{
// });
// console.log('selesai');
// jadi mulai > selesai > baru hasil foreach

// Jquery
console.log('mulai');
$.ajax({
  url: 'mahasiswa.json',
  success: (mhs)=>{
    mhs.forEach(m => console.log(m.nama));
  },
  error: (e)=>{
    console.log(e.responseText);
  }
})
console.log('selesai');