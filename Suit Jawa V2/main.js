//let ulang = true
//while(ulang) {
//    let tebakanUser = prompt('Pilih antara: \ngajah, orang, atau semut')


//    let hasil = ''
//    

//    console.log(hasil);

//    ulang = confirm('Lanjut?')
//}
function pilihanComputer() {
    const comp = Math.random()

    if (comp < 0.34) return 'gajah'
    if (comp > 0.34 && comp < 0.64) return 'orang'
    return 'semut'
}

function getResult(comp, player) {
    if (player == comp) return 'SERI!'
    if (player == 'gajah') return comp == 'orang' ? 'MENANG!' : 'KALAH!'
    if (player == 'orang') return comp == 'semut' ? 'MENANG!' : 'KALAH!'
    if (player == 'semut') return comp == 'gajah' ? 'MENANG!' : 'KALAH!'
}

function putar() {
    const imgComputer = document.querySelector('.img-computer')
    const gambar = ['gajah', 'semut', 'orang']
    let i = 0
    const waktuMulai = new Date().getTime() 
    setInterval(function() {
        if(new Date().getTime() - waktuMulai > 1000) {
            clearInterval
            return
        }
        imgComputer.setAttribute('src', 'https://learndy.github.io/suja/img/' + gambar[i++] + '.png')
        if(i == gambar.length) i = 0
    }, 100)
}

const pilihan = document.querySelectorAll('li img')
pilihan.forEach(function(p) {
    p.addEventListener('click', function() {
        const pComp = pilihanComputer()
        const pPlayer = p.className
        const hasil = getResult(pComp, pPlayer)

        putar()

        setTimeout(function() {
            const imgComp = document.querySelector('.img-computer')
            imgComp.setAttribute('src', 'https://learndy.github.io/suja/img/' + pComp + '.png')
        
            const info = document.querySelector('.result')
            info.innerHTML = hasil
        }, 1000)
    })
})