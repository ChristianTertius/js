/* 
  Spread Operator -> memecah iterables(jamak) menjadi single element

  📌 Iterables Object:
      - String
      - Array
      - Arguments / Nodelist
      - TypedArray
      - Map 
      - Set
      - User Defined Iterables
*/

// console.log(...mhs[0]);

// gabungkan 2 array
// const dosen = ['Anisa', 'Aldean', 'hamdan']
// const orang =[...mhs, 'Budi', ...dosen]
// const orang = mhs.concat(dosen)
// console.log(orang);

// Mengcopy array
// const mhs = ['Christian', 'dodi', 'eric']
// const mhs1 = [...mhs];
// mhs1[0] = 'anton'
// console.log(mhs1);

// const liMhs = document.querySelectorAll('li')
// const mhs = [...liMhs].map(m => m.textContent);
// // const mhs = liMhs.map(m => m.textContent)
// console.log(mhs)

const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')
nama.innerHTML = huruf;