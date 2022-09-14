const key = document.querySelectorAll("div.key");

const keyTransformStylesOnPress = `
    transform: scale(1.1);
    outline: solid #ffc600 3px;
`

const keyTransformStylesOnRelease = `
    transform: scale(1);
    outline: solid black 2px;
`

addEventListener('keydown', e => {
    
  if(e.key === "a" || e.key === "s"){
    key.forEach((keyBoardItem) => {
        keyBoardItem.style.cssText = keyTransformStylesOnPress;
      }); 
    }
});

addEventListener('keyup', e => {
  key.forEach((keyBoardItem) => {
    keyBoardItem.style.cssText = keyTransformStylesOnRelease;
  }); 
});


// function transformKey(){
    
// }

// function playSound(){
//     if (event.code == 'KeyZ' && (event.ctrlKey || event.metaKey)) {
//         alert('Undo!')
//       }
// }