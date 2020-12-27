let text = document.getElementsByClassName('text');
//className returns array 
for(let i =0; i<text.length; i++){
    let topText = text[i].innerText;
    console.log(topText);
}
