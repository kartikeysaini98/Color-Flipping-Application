const color_list = ['#E52B50','#FFBF00','#FBCEB1','#DE5D83','#F7E7CE','#DC143C','green','black','grey']
const btn =document.getElementById('btnn');
const colr = document.querySelector('.kar');

btn.addEventListener('click', function(){
    const clr = random()
    document.body.style.backgroundColor=color_list[clr]
    colr.textContent = color_list[clr]

})

function random(){
    return Math.floor(Math.random() * color_list.length)
}