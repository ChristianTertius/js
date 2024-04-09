/* 
  Template Literals:
    - pake bacck tick 
    - multi line string
    - embededd expression
    - HTML fragments:
      - Expression Interpolation
      - Tagges Template

    📌 Notes:
      💣 Boleh nested
*/

// const nama = 'budi'
// const umur = 32

// console.log(`saya ${nama}, umur ${umur}`)

// embeded expression
  // function juga merupakan expression
// console.log(`${alert('halo')}`)

// const x = 100
// console.log(`${(x % 2 ==0) ? 'genap' : 'ganjil'}`);

// const mhs = {
//   nama: 'budi',
//   umur: 32,
//   address: 'kebon jeruk',
//   email: 'budi@gmail.com'
// }
// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span class="umur">${mhs.umur}</span>
// </div>`

// console.log(el);

/* 2 */
// const mhs = {
//   nama: 'Christian',
//   umur: 32,
//   email: 'christin@gmail.com'
// }

// const el = `<div class="mhs">
//   <h2>${mhs.nama}</h2>
//   <span>${mhs.umur}</span>
// </div>`

// looping
/* 
  Map -> high order function
  memetakan object
*/
// const mhs = [
//   {
//     nama: 'chrsitain',
//     email: 'ct128932@gmail.com'
//   },
//   {
//     nama: 'budi',
//     email: 'budi@gmail.com'
//   },
//   {
//     nama: 'eric',
//     email: 'eric@gmail.com'
//   }
// ]

// const el = `<div class="mhs">
//   ${mhs.map(m => `
//     <ul>
//       <li>${m.nama}</li>
//       <li>${m.email}</li>
//     </ul>
//   `).join('')} 
// </div>` // join for seilang koma, karena itu object jadi ada koma


// conditionals
// tenary
// const lagu = {
//   judul: 'Kau adalah',
//   penyanyi: 'Isyana Sarasvati',
//   feat: 'Rayi Putra'
// }

// const el = `<div class="lagu">
//   <ul>
//     <li>${lagu.penyanyi}</li>
//     <li>${lagu.judul} ${lagu.feat ? `(Feat. ${lagu.feat})` : ''}</li>
//   </ul>
// </div>`

// nested html fragments
const mhs = {
  nama: 'budi',
  semester: 4,
  mataKuliah: ['AI','Linear Algebra', 'OOP','Indonesian']
}

function cetakMataKuliah(mataKuliah){
  return `
    <ol>
      ${mataKuliah.map(m => `
        <li>${m}</li>
      `).join('')}
    </ol>
  `
}

const el = `<div class="mhs">
  <h1>${mhs.nama}</h1>
  <span>Semester: ${mhs.semester}</span>
  <h4>Mata Kuliah</h4>
  ${cetakMataKuliah(mhs.mataKuliah)}
</div>`

document.body.innerHTML = el;