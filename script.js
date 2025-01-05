const inputColor = document.querySelector('#color-input')
const btnColorAdd = document.querySelector('#btn-color')
console.log(inputColor);
console.log(btnColorAdd);
// inputColor.onblur = function () {
//     console.log('jhii');
//     let box = document.createElement('div')
//     box.className = "box";

//     box.style.background = inputColor.value
//     console.log(box);

//     console.log(inputColor.value);
//     document.body.append(box)
// }

// btnColorAdd.addEventListener('click', function () {
//     console.log('jhii');
//     let box = document.createElement('div')
//     box.className = "box";

//     box.style.background = inputColor.value
//     console.log(box);

//     console.log(inputColor.value);
//     document.body.append(box)
// })

btnColorAdd.addEventListener('click', function () {
    let colors = inputColor.value.split(' ')
    console.log(colors);
    colors.forEach(element => {

    let box = document.createElement('div')
    box.className = "box";

    box.style.background = element
    console.log(box);

    box.addEventListener('click', function(){
        this.remove()
    })

    box.addEventListener('mouseover', function(event){
        document.body.style.background = event.target.style.background
    })

    console.log(inputColor.value);
    document.body.append(box)
    });

    inputColor.value = ''

})