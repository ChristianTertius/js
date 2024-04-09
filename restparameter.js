/* 
  Rest(sisa) Paramter -> supaya dpe argument jadi tdk terbatas, di akhir

  📌Notes:
    - Array.from(arguments) -> mengubah menjadi array (awalnya object)
*/

// function myFunc(){
//   // return Array.from(arguments)
//   return [...arguments]
// }

// console.log(myFunc(1,2,3,4,5));

// function tambah(...number){

//   return number.reduce((a,b) => a + b)
// }
// console.log(tambah(1,2,3,4,5));

// array destructuring
// const team1 = ['Santi', 'Santo', 'desy', 'bella', 'Chris', 'anton']
// const [ketua, wakil, ...anggota] = team1
// console.log(ketua);

// object destructuring
// const team = {
//   pm: 'Christian Carlos',
//   frontEnd1: 'Budi',
//   frontEnd2: 'Wawan',
//   backEnd: 'Sinta',
//   ux: 'Naomi',
//   devOps: 'Gloria'
// }

// const {pm, ...myTeam} = team;
// console.log(pm);

// filtering
function filterBy(type, ...values){
  return values.filter(v => typeof v === type)
}

console.log(filterBy('number', 1,2,'Anton', false, 10, true, 'Sinta'));