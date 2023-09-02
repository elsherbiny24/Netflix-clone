//let p = document.querySelectorAll('.p-last');
let acc = document.querySelectorAll('.last');
//console.log(acc);
let i;
for (i = 0; i < acc.length; i++) {

    //  acc[i].addEventListener('click', function () {
    //   this.classlist.toggle('active');
    //    let p = this.nextElementSibling;
    //    if (p.style.maxHeight){
    //     p.style.maxHeight = null;
    //    }else{ p.style.maxHeight = p.scrollHeight +"px"}

    //  })
    acc[i].addEventListener('click', function () {
        this.classList.toggle('active');
        let p = this.nextElementSibling;
        if (p.style.maxHeight) {
            p.style.maxHeight = null;
        } else { p.style.maxHeight = p.scrollHeight + 'px' }
    })
}
// acc[i].addEventListener('click', function () {
//     this.classList.toggle('active');
//     let p = this.nextElementSibling;
//     if (p.style.maxHeight) {
//         p.style.maxHeight = null;
//     } else { p.style.maxHeight = p.scrollHeight + 'px' }
// })

