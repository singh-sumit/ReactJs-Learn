window.onload=function(){
    customPTag();
}
function customPTag(){
    //grab main tag
    let mainTag=document.getElementById('holder');
    let pTag=document.createElement('p');
    pTag.innerText='This is a P Tag text';
    
    //append to main tag
    mainTag.appendChild(pTag);
}
