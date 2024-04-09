/* 
  Destructuring -> membongkar nilai array/properti object ke dlm variable terpisah
  💣 Using for:
      - Swap Items [a,b] = [b,a]
      - return value di function
*/

// Array
// const mhs = ['budi', 'sinta', 'wawan']
// const [a,b,c] = mhs
// console.log(a);
// console.log(b);
// console.log(c);

// Object
// const mhs = {
//   nama: 'Sinta',
//   umur: 32,
//   email: 'sitna@gmail.com'
// };

// const {nama, umur, email} = mhs
// console.log(nama);
// console.log(umur);
// console.log(email);

// const perkenalan = ['halo', 'selamat', 'pagi', 'budi']
// const [salam, satu, dua, tiga] = perkenalan
// const [satu, , ,empat] = perkenalan; /* Skipping */

// Swap Items
// let a = 1;
// let b = 2;
// console.log(a);
// console.log(b);


// return value pada function
// function coba(){
//   return [1,2]
// }

// const [a,b] = coba();
// console.log(a);

// Rest Parameter -> return as array
// const [a, ...values] = [1,2,3,4,5,6,7]
// console.log(a);
// console.log(values);

// Destructuring Object
  // Pake Object Literals
    // const mhs = {
    //   nama: 'budi',
    //   umur: 32
    // }
    // const {nama, umur} = mhs
    // console.log(nama);

  // Assign tanpa object declaration
  // ({nama, umur} = { nama: 'sinta',umur: 32 })
  // console.log(umur);

  // Assign to new variable
  // const mhs = {
  //   nama: 'budi',
  //   umur: 32
  // }
  // const {nama: n, umur: u} = mhs
  // console.log(n);

  // give default value -> dari default dulu, kalo ada baru ambe
  // const mhs = {
  //   nama: 'budi',
  //   umur: 32,
  //   email: 'test@gmail.com'
  // }
  // const {nama: n, umur: u, email = 'email@deafult.com'} = mhs
  // console.log(email);

  // give defaut value + assign new value
  // const mhs = {
  //   nama: 'sinta',
  //   umur: 32,
  //   email: 'sinta@gmail.com'
  // }

  // const {nama: n, umur: u, email: e="email@gmail.com"} = mhs
  // console.log(e);
  
  // rest parameter
  // const mhs = {
  //   nama: 'sinta',
  //   umur: 32,
  //   email: 'sinta@gmail.com'
  // }

  // const {nama: n, ...values} = mhs
  // console.log(values);

  // mengambil field pada object, setelah dikirim sebagai parameter untuk function
  const mhs = {
    id: 123,
    nama: 'wawan',
    email: 'wawan@gmail.com',
    umur: 32
  }

  function getIdMhs({ id }){
    return id
  }

  console.log(getIdMhs(mhs));

  