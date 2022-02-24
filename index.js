// <!-- 2 function -->
/*
1. functiion 1
output => {
  Nasi: {
    jumlah: 2,
    total: 6000
  },
  ayam: {
    jumlah: 3,
    total: 30000
  }
}
function 2
totalBelanja => 36000
*/

const menuWartol = [
  ['nasi', 3000],
  ['telorBalado', 5000],
  ['ayam', 10000],
  ['osengTempe', 5000],
  ['sayurKangkung', 5000],
  ['gorengan', 2000],
  ['rawon', 12000],
  ['esTeh', 4000],
  ['kerupuk', 2000]
]

let pesanan 

function totalBelanja(detailBelanja) {
  if (!detailBelanja) {
    return 'belanja dulu'
  }
  let totalBelanja = 0
  for (const key in detailBelanja) {
    for (let i = 0; i < menuWartol.length; i++) {
      const menu = menuWartol[i];
      if (menu[0] === key) {
        totalBelanja += (detailBelanja[key] * menu[1])
      }
    }
  }
  return totalBelanja
}

// console.log(totalBelanja(pesanan))

let totalNasi = 0
let buttonNasi = document.getElementsByClassName("nasi")[0]
let counterNasi = 0
buttonNasi.addEventListener("click", function (event) {
  event.preventDefault()
  totalNasi += 3000
  counterNasi++
  const totalBiaya = document.createElement('h2')
  const belanja = document.getElementById("belanjaan")
  if (counterNasi === 1) {
    const list = document.createElement('li')
    list.classList.add('qtyNasi')
    list.id = 'qtyNasi'
    list.innerText = `Nasi x ${counterNasi}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetNasi'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
    console.log(document.getElementById("qtyNasi"))

  } else {
    let list = document.getElementById("qtyNasi")
    list.innerText = `Nasi x ${counterNasi}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetNasi'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetNasi = document.getElementById('resetNasi')

  buttonResetNasi.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtyNasi')
    parent.removeChild(child)
    // total = total - (counterNasi*3000)
    counterNasi = 0
  })

  // totalBiaya.id = 'totalBiaya'
  // totalBiaya.innerText = `${totalNasi}`
  // belanja.appendChild(totalBiaya)
})



// let buttonAyam = document.getElementById("ayam")
// let counterAyam = 0
// buttonAyam.addEventListener("click", function (event) {
//   event.preventDefault()
//   total += 10000
//   counterAyam++
//   if (counterAyam === 1) {
//     const belanja = document.getElementById("belanjaan")
//     const list = document.createElement('li')
//     // list.classList.add('qtyAyam')
//     list.id = 'qtyAyam'
//     list.innerText = `Ayam x ${counterAyam}`
//     belanja.appendChild(list)
//     const resetButton = document.createElement('button')
//     resetButton.id = 'resetAyam'
//     resetButton.innerText = `Reset`
//     list.appendChild(resetButton)

//   } else {
//     let list = document.getElementById("qtyAyam")
//     list.innerText = `Ayam x ${counterAyam}`
//     const resetButton = document.createElement('button')
//     resetButton.id = 'resetAyam'
//     resetButton.innerText = `Reset`
//     list.appendChild(resetButton)
//   }

//   let buttonResetAyam = document.getElementById('resetAyam')

//   buttonResetAyam.addEventListener("click", function () {
//     let parent = document.getElementById('belanjaan')
//     let child = document.getElementById('qtyAyam')
//     parent.removeChild(child)
//     total = total - (counterAyam*10000)
//     counterAyam = 0
//   })

// })


console.log(counterNasi)









