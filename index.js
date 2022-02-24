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
  ['telor balado', 5000],
  ['ayam', 10000],
  ['oseng tempe', 5000],
  ['sayur kangkung', 5000],
  ['gorengan', 2000],
  ['rawon', 12000],
  ['es teh', 4000],
  ['kerupuk', 2000]
]

let pesanan = {nasi: 2, ayam: 3}

function detailPesanan(input) {
  let result = {}
  for (const key in input) {
    let total = 0
    for (let i = 0; i < menuWartol.length; i++) {
      const menu = menuWartol[i];

      if (key === menu[0]) {
        total = (menu[1] * input[key])
      }
      
    }
    result[key] = {
      jumlah: input[key],
      total: total
    }
  }
  return result
}

console.log(detailPesanan(pesanan))

function totalBelanja() {
  let detailBelanja = detailPesanan(pesanan)
  let totalBelanja = 0
  for (const key in detailBelanja) {
    totalBelanja += detailBelanja[key].total
  }
  return totalBelanja
}

console.log(totalBelanja())