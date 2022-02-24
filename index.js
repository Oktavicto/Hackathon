//menuWartol = [
//   ['nasi', 3000],
//   ['telorBalado', 5000],
//   ['ayam', 10000],
//   ['osengTempe', 5000],
//   ['sayurKangkung', 5000],
//   ['gorengan', 2000],
//   ['rawon', 12000],
//   ['esTeh', 4000],
//   ['kerupuk', 2000]
// ]

prompt("Mohon masukkan nama anda")
prompt("Mohon masukkan alamat anda")

let total = 0
let buttonNasi = document.getElementsByClassName("nasi")[0]
let counterNasi = 0
buttonNasi.addEventListener("click", function (event) {
  event.preventDefault()
  counterNasi++
  if (counterNasi === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')
    list.classList.add('qtyNasi')
    list.id = 'qtyNasi'
    list.innerText = `Nasi x ${counterNasi}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetNasi'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  } else {
    let list = document.getElementById("qtyNasi")
    list.classList.add('qtyNasi')
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
    total = total - (counterNasi*3000)
    counterNasi = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })
  total += 3000
  
  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
  
})

let buttonAyam = document.getElementById("ayam")
let counterAyam = 0
buttonAyam.addEventListener("click", function (event) {
  event.preventDefault()
  total += 10000
  counterAyam++
  if (counterAyam === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtyAyam'
    list.innerText = `Ayam x ${counterAyam}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetAyam'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyAyam")
    list.innerText = `Ayam x ${counterAyam}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetAyam'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetAyam = document.getElementById('resetAyam')

  buttonResetAyam.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtyAyam')
    parent.removeChild(child)
    total = total - (counterAyam*10000)
    counterAyam = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttontelorBalado = document.getElementById("telorBalado")
let countertelorBalado = 0
buttontelorBalado.addEventListener("click", function (event) {
  event.preventDefault()
  total += 5000
  countertelorBalado++
  if (countertelorBalado === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtytelorBalado'
    list.innerText = `Telor Balado x ${countertelorBalado}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resettelorBalado'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtytelorBalado")
    list.innerText = `Telor Balado x ${countertelorBalado}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resettelorBalado'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResettelorBalado = document.getElementById('resettelorBalado')

  buttonResettelorBalado.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtytelorBalado')
    parent.removeChild(child)
    total = total - (countertelorBalado*5000)
    countertelorBalado = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonesTeh = document.getElementById("esTeh")
let counteresTeh = 0
buttonesTeh.addEventListener("click", function (event) {
  event.preventDefault()
  total += 4000
  counteresTeh++
  if (counteresTeh === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtyesTeh'
    list.innerText = `Es Teh x ${counteresTeh}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetesTeh'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyesTeh")
    list.innerText = `Es Teh x ${counteresTeh}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetesTeh'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetesTeh = document.getElementById('resetesTeh')

  buttonResetesTeh.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtyesTeh')
    parent.removeChild(child)
    total = total - (counteresTeh*4000)
    counteresTeh = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttongorengan = document.getElementById("gorengan")
let countergorengan = 0
buttongorengan.addEventListener("click", function (event) {
  event.preventDefault()
  total += 2000
  countergorengan++
  if (countergorengan === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtygorengan'
    list.innerText = `Gorengan x ${countergorengan}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetgorengan'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtygorengan")
    list.innerText = `Gorengan x ${countergorengan}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetgorengan'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetgorengan = document.getElementById('resetgorengan')

  buttonResetgorengan.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtygorengan')
    parent.removeChild(child)
    total = total - (countergorengan*2000)
    countergorengan = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonkerupuk = document.getElementById("kerupuk")
let counterkerupuk = 0
buttonkerupuk.addEventListener("click", function (event) {
  event.preventDefault()
  total += 2000
  counterkerupuk++
  if (counterkerupuk === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtykerupuk'
    list.innerText = `Kerupuk x ${counterkerupuk}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetkerupuk'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtykerupuk")
    list.innerText = `Kerupuk x ${counterkerupuk}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetkerupuk'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetkerupuk = document.getElementById('resetkerupuk')

  buttonResetkerupuk.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtykerupuk')
    parent.removeChild(child)
    total = total - (counterkerupuk*2000)
    counterkerupuk = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonosengTempe = document.getElementById("osengTempe")
let counterosengTempe = 0
buttonosengTempe.addEventListener("click", function (event) {
  event.preventDefault()
  total += 5000
  counterosengTempe++
  if (counterosengTempe === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtyosengTempe'
    list.innerText = `Oseng Tempe x ${counterosengTempe}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetosengTempe'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyosengTempe")
    list.innerText = `Oseng Tempe x ${counterosengTempe}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetosengTempe'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetosengTempe = document.getElementById('resetosengTempe')

  buttonResetosengTempe.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtyosengTempe')
    parent.removeChild(child)
    total = total - (counterosengTempe*5000)
    counterosengTempe = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonrawon = document.getElementById("rawon")
let counterrawon = 0
buttonrawon.addEventListener("click", function (event) {
  event.preventDefault()
  total += 12000
  counterrawon++
  if (counterrawon === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtyrawon'
    list.innerText = `Rawon x ${counterrawon}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetrawon'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyrawon")
    list.innerText = `Rawon x ${counterrawon}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetrawon'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetrawon = document.getElementById('resetrawon')

  buttonResetrawon.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtyrawon')
    parent.removeChild(child)
    total = total - (counterrawon*12000)
    counterrawon = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonsayurKangkung = document.getElementById("sayurKangkung")
let countersayurKangkung = 0
buttonsayurKangkung.addEventListener("click", function (event) {
  event.preventDefault()
  total += 5000
  countersayurKangkung++
  if (countersayurKangkung === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')

    list.id = 'qtysayurKangkung'
    list.innerText = `Sayur Kangkung x ${countersayurKangkung}`
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.id = 'resetsayurKangkung'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtysayurKangkung")
    list.innerText = `Sayur Kangkung x ${countersayurKangkung}`
    const resetButton = document.createElement('button')
    resetButton.id = 'resetsayurKangkung'
    resetButton.innerText = `Reset`
    list.appendChild(resetButton)
  }

  let buttonResetsayurKangkung = document.getElementById('resetsayurKangkung')

  buttonResetsayurKangkung.addEventListener("click", function () {
    let parent = document.getElementById('belanjaan')
    let child = document.getElementById('qtysayurKangkung')
    parent.removeChild(child)
    total = total - (countersayurKangkung*5000)
    countersayurKangkung = 0
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`

    if (total === 0) {
      let parent = document.getElementsByClassName("totalBayar")[0]
      let child = document.getElementById('total')
      parent.removeChild(child)
    }
  })

  if (!document.getElementById('total')) {
    const bayar = document.getElementsByClassName("totalBayar")[0]
    const totalBiaya = document.createElement('h3')
    totalBiaya.id = 'total'
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
    bayar.appendChild(totalBiaya)
  } else {
    const totalBiaya = document.getElementById('total')
    totalBiaya.innerText = `${new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(total)}`
  }
})

let buttonCheckout = document.getElementById("chckout-btn")
buttonCheckout.addEventListener("click", function () {
  alert(`Terimakasih telah memesan. Pesanan anda akan segera diantar oleh Mas Yanto ^^. Mohon untuk mempersiapkan biaya sebesar ${new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR'
  }).format(total)}`)
  
})






