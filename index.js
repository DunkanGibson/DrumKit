const key = document.getElementsByClassName('key');
const keyTransformStyles = `
    transform: scale(1.5)
`

key.addEventListner('onkeydown', (event) => {
    key.style.cssText = keyTransformStyles;
    alert("Worked")
});

console.log("test")

// function transformKey(){
    
// }

// function playSound(){
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         alert('Undo!')
//       }
// }