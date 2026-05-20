var inputNum = document.getElementById("inputNum");


document.getElementById("btnA").addEventListener('click', () => {
    //alert("Button A clicked!");
    inputNum.style.backgroundColor = 'pink';
    alert('You picked' + inputNum.value);

})
 