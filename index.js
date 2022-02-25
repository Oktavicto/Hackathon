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

// prompt("Mohon masukkan nama anda")
// prompt("Mohon masukkan alamat anda")

let total = 0
let buttonNasi = document.getElementById("nasi")
let counterNasi = 0
buttonNasi.addEventListener("click", function (event) {
  event.preventDefault()
  counterNasi++
  if (counterNasi === 1) {
    const belanja = document.getElementById("belanjaan")
    const list = document.createElement('li')
    list.classList.add('list-pesanan')
    list.id = 'qtyNasi'
    // list.innerText = `Nasi x ${counterNasi}`
    list.innerHTML =
    `
    <div id= "divNasi" style= "display: flex; justify-content: space-between">
      <span>Nasi</span>
      <div style= "display: flex; justify-content: flex-end; width: 58%;"><span style= "float: right;"> X ${counterNasi}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetNasi'
    resetButton.innerText = `Reset`
    divNasi.appendChild(resetButton)
  } else {
    let list = document.getElementById("qtyNasi")
    list.innerHTML =
    `
    <div id= "divNasi" style= "display: flex; justify-content: space-between">
      <span>Nasi</span>
      <div style= "display: flex; justify-content: flex-end; width: 58%;"><span style= "float: right;"> X ${counterNasi}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetNasi'
    resetButton.innerText = `Reset`
    divNasi.appendChild(resetButton)

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
    list.classList.add('list-pesanan')
    list.id = 'qtyAyam'
    list.innerHTML =
    `
    <div id= "divAyam" style= "display: flex; justify-content: space-between">
      <span>Ayam</span>
      <div style= "display: flex; justify-content: flex-end; width: 55%;"><span style= "float: right;"> X ${counterAyam}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetAyam'
    resetButton.innerText = `Reset`
    divAyam.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyAyam")
    list.innerHTML =
    `
    <div id= "divAyam" style= "display: flex; justify-content: space-between">
      <span>Ayam</span>
      <div style= "display: flex; justify-content: flex-end; width: 55%;"><span style= "float: right;"> X ${counterAyam}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetAyam'
    resetButton.innerText = `Reset`
    divAyam.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtytelorBalado'
    list.innerHTML =
    `
    <div id= "divTelorBalado" style= "display: flex; justify-content: space-between">
      <span>Telor Balado</span>
      <div style= "display: flex; justify-content: flex-end; width: 38%;"><span style= "float: right;"> X ${countertelorBalado}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resettelorBalado'
    resetButton.innerText = `Reset`
    divTelorBalado.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtytelorBalado")
    list.innerHTML =
    `
    <div id= "divTelorBalado" style= "display: flex; justify-content: space-between">
      <span>Telor Balado</span>
      <div style= "display: flex; justify-content: flex-end; width: 38%;"><span style= "float: right;"> X ${countertelorBalado}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resettelorBalado'
    resetButton.innerText = `Reset`
    divTelorBalado.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtyesTeh'
    list.innerHTML =
    `
    <div id= "divEsTeh" style= "display: flex; justify-content: space-between">
      <span>Es Teh</span>
      <div style= "display: flex; justify-content: flex-end; width: 53%;"><span style= "float: right;"> X ${counteresTeh}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetesTeh'
    resetButton.innerText = `Reset`
    divEsTeh.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyesTeh")
    list.innerHTML =
    `
    <div id= "divEsTeh" style= "display: flex; justify-content: space-between">
      <span>Es Teh</span>
      <div style= "display: flex; justify-content: flex-end; width: 53%;"><span style= "float: right;"> X ${counteresTeh}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetesTeh'
    resetButton.innerText = `Reset`
    divEsTeh.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtygorengan'
    list.innerHTML =
    `
    <div id= "divGorengan" style= "display: flex; justify-content: space-between">
      <span>Gorengan</span>
      <div style= "display: flex; justify-content: flex-end; width: 45%;"><span style= "float: right;"> X ${countergorengan}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetgorengan'
    resetButton.innerText = `Reset`
    divGorengan.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtygorengan")
    list.innerHTML =
    `
    <div id= "divGorengan" style= "display: flex; justify-content: space-between">
      <span>Gorengan</span>
      <div style= "display: flex; justify-content: flex-end; width: 45%;"><span style= "float: right;"> X ${countergorengan}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetgorengan'
    resetButton.innerText = `Reset`
    divGorengan.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtykerupuk'
    list.innerHTML =
    `
    <div id= "divKerupuk" style= "display: flex; justify-content: space-between">
      <span>Kerupuk</span>
      <div style= "display: flex; justify-content: flex-end; width: 48%;"><span style= "float: right;"> X ${counterkerupuk}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetkerupuk'
    resetButton.innerText = `Reset`
    divKerupuk.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtykerupuk")
    list.innerHTML =
    `
    <div id= "divKerupuk" style= "display: flex; justify-content: space-between">
      <span>Kerupuk</span>
      <div style= "display: flex; justify-content: flex-end; width: 48%;"><span style= "float: right;"> X ${counterkerupuk}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetkerupuk'
    resetButton.innerText = `Reset`
    divKerupuk.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtyosengTempe'
    list.innerHTML =
    `
    <div id= "divOsengTempe" style= "display: flex; justify-content: space-between">
      <span>Oseng Tempe</span>
      <div style= "display: flex; justify-content: flex-end; width: 36%;"><span style= "float: right;"> X ${counterosengTempe}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetosengTempe'
    resetButton.innerText = `Reset`
    divOsengTempe.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyosengTempe")
    list.innerHTML =
    `
    <div id= "divOsengTempe" style= "display: flex; justify-content: space-between">
      <span>Oseng Tempe</span>
      <div style= "display: flex; justify-content: flex-end; width: 36%;"><span style= "float: right;"> X ${counterosengTempe}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetosengTempe'
    resetButton.innerText = `Reset`
    divOsengTempe.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtyrawon'
    list.innerHTML =
    `
    <div id= "divRawon" style= "display: flex; justify-content: space-between">
      <span>Rawon</span>
      <div style= "display: flex; justify-content: flex-end; width: 52%;"><span style= "float: right;"> X ${counterrawon}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetrawon'
    resetButton.innerText = `Reset`
    divRawon.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtyrawon")
    list.innerHTML =
    `
    <div id= "divRawon" style= "display: flex; justify-content: space-between">
      <span>Rawon</span>
      <div style= "display: flex; justify-content: flex-end; width: 52%;"><span style= "float: right;"> X ${counterrawon}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetrawon'
    resetButton.innerText = `Reset`
    divRawon.appendChild(resetButton)
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
    list.classList.add('list-pesanan')
    list.id = 'qtysayurKangkung'
    list.innerHTML =
    `
    <div id= "divSayurKangkung" style= "display: flex; justify-content: space-between">
      <span>Sayur Kangkung</span>
      <div style= "display: flex; justify-content: flex-end; width: 30%;"><span style= "float: right;"> X ${countersayurKangkung}</span></div>
    </div>
    `
    belanja.appendChild(list)
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetsayurKangkung'
    resetButton.innerText = `Reset`
    divSayurKangkung.appendChild(resetButton)

  } else {
    let list = document.getElementById("qtysayurKangkung")
    list.innerHTML =
    `
    <div id= "divSayurKangkung" style= "display: flex; justify-content: space-between">
      <span>Sayur Kangkung</span>
      <div style= "display: flex; justify-content: flex-end; width: 30%;"><span style= "float: right;"> X ${countersayurKangkung}</span></div>
    </div>
    `
    const resetButton = document.createElement('button')
    resetButton.classList.add("buy-btn")
    resetButton.id = 'resetsayurKangkung'
    resetButton.innerText = `Reset`
    divSayurKangkung.appendChild(resetButton)
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
  if (total === 0) {
    // alert(`Beli dulu bos!`) 
    Swal.fire({
      title: 'Beli dulu bos!',
      text: 'Kamu belum memesan apapun',
      icon: 'error',
      confirmButtonText: 'kembali ke menu'
    })
  } else {
    // alert(`Terimakasih telah memesan. Pesanan anda akan segera diantar oleh Mas Yanto ^^. Mohon untuk mempersiapkan biaya sebesar ${new Intl.NumberFormat('id-ID', {
    //   style: 'currency',
    //   currency: 'IDR'
    // }).format(total)}`)
    // // window.location.reload()
    const { value: text } = Swal.fire({
      input: 'text',
      inputLabel: 'Masukkan alamatmu :',
      // inputValue: text,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return 'Isi alamat bos!'
        } else {
          return Swal.fire({
            title: 'Pesanan berhasil!',
            text: `Terimakasih telah memesan. Pesanan anda akan segera diantar ke ${value} oleh Mas Yanto ^^. Mohon untuk mempersiapkan biaya sebesar ${new Intl.NumberFormat('id-ID', {
              style: 'currency',
              currency: 'IDR'
            }).format(total)}`,
            icon: 'success',
            confirmButtonText: "pesan kembali",
          }) .then(function(isConfirm) {
            if (isConfirm) {
              window.location.reload();
            } 
          }); 
        }
      }
    })
  }
})






