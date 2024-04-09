/* 
  Promise(janji) -> object yg merepresentasikan keberhasilan / kegagalan sebuah event yg asynchronous di masa depan, biasanya digunakan untuk request API
  - states (fulfilled / rejected / pending)
  - callback (resolve / reject / finally)
  - aksi     (then / catch)
*/

// $.ajax({
//   url: 'http://www.omdbapi.com/?apikey=1f733b40&s=naruto',
//   success: movies => console.log(movies),
// })

// fetch('http://www.omdbapi.com/?apikey=1f733b40&s=naruto')
// .then(response => response.json())
// .then(response => console.log(response))

// Latihan 1
// let ditepati = true;
// const janji1 = new Promise((resolve, rejected)=> {
//   if(ditepati){
//     resolve('Janji telah ditepati!')
//   } else{
//     rejected('Dih ingkar janji')
//   }
// })

// janji1
//   .then(response => console.log('OK!: ' + response))
//   .catch(response => console.log('NOT OK: ' + response))

// Latihan 2
// let ditepati = true
// const janji2 = new Promise((resolve, reject) => {
//   if(ditepati){
//     setTimeout(()=>{
//       resolve('Ditepati setlah beberapa waktu!')
//     }, 2000)
//   } else{
//     setTimeout(()=>{
//       resolve('TIDAK DITEPATI :( SEDIH')
//     }, 2000)
//   }
// })

// console.log('mulai');

// janji2
//   .finally(()=> console.log('selesai menunggu'))
//   .then(response => console.log('OK!: ' + response))
//   .catch(response => console.log('NOT OK! ' + response))
// console.log('selesai');

/* 
  Promise.all()
*/

const film = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      judul: 'Naruto',
      sutradara: 'Masashi Kishimoto',
      pemeran: 'Doddy, Erik'
    }])
  }, 1000);
})

const athlete = new Promise(resolve => {
  setTimeout(() => {
    resolve([{
      nama: 'Jonathan Christie',
      kota: 'Bandung',
      sektor: 'Tunggal Putra',
      umur: 32
    }])
  }, 500);
})

// film.then(respones => console.log(respones))
// athlete.then(response => console.log(response))

Promise.all([film, athlete])
  .then(response => console.log(response))
  .then(response => {
    const [film, athlete] =response
    console.log(film)
    console.log(athlete)
  })