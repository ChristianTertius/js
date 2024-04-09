/* 
  Asynchronous Javascript

  What is Javascript: Javascript is a single-threaded, non-blocking, asynchronous and concurrent language
  
  Thread: Urutan Eksekusi code yg dpt dilakukan scr bebas / independent satu sama lain
  Single Thread: Eksekusi satu-satu, jadi satu thread for satu task, seklar dulu baru lanjut
  Multi Thread: Masih eksekusi satu-satu, mar dpe thread boleh banyak / ke yang berbeda

  Blocking: Satu-satu, task 2 harus tunggu task 1 klar dulu baru blh eksekusi
  Non-Blocking: blh lanjut ke task 2 walaupun task 1 blum klar

  Synchronous: Seperti biasa
  Asynchronous (Single Threaded): Biarpun blum klar, boleh lanjut mar msh dalam 1 thread
  Asynchronous (Multi Threaded): Bisa mengerjakan banyak thread secara bersamaan

  Concurrency = Asynchronous + Single-threaded
  Parallelism = Asynchronous + Multi-threaded

  📌Summary:
      - Single vs Multi Thread 
        Lingkungan Eksekusi 'task'
      - Blocking vs Non-blocking
        Teknik 'ngoding' (IO related) -> for fix blocking, asynchronous callback
      - Asynchronous vs Synchronous
        Teknik 'ngoding' (HTTP Request related)
      - Concurrent vs Parallel
        Lingkungan eksekusi 'task'

  Asynchronous Callback:
    console.log('satu')
    setTimeOut(()=>{
      console.log('dua')
    }, 5000);
    console.log('tiga')
    🔈 jadi clog satu -> clog tiga -> (habis 5 detik) clog dua, jadi nd perlu tunggu
    🔈 setTimeOut -> Asynchronous Function/Callback punyanya web Apis, jadi biarpun dibuat 0, tetap akal masuk ke Web Apis 

  Using for:
    - Callback -> function yg dpe parameter itu function le
      cth:
        console.log('satu')
        setTimeOut(()=>{
          console.log('dua')
        }, 5000);
        console.log('tiga')
        🔈 jadi clog satu -> clog tiga -> (habis 5 detik) clog dua, jadi nd perlu tunggu
    - Promise
    - ajax
    - Async & await

  📝 Notes:
      - V8 Engine
        - Structure:
          - Heap:
              - Memory Allocation
              - Function
              - Hoisting
            cth: console.log('satu')
          - Stack:
              - Function call
              - Execution Context
        - ada tertanam di browser
*/