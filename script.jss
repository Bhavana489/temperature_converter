const convertFahrenheit = () =>{

    var celsius = parseFloat(document.querySelector("#celsius").value);

    var fahrenhietResult = (1.8 * celsius)+32;
    var a = fahrenhietResult.toFixed(2);

    document.querySelector("#celsius").value=celsius;
    document.querySelector("#fahrenhiet").value=a;
}

const convertcelsius = () =>{

    var Fahrenhiet = parseFloat(document.querySelector("#fahrenhiet").value);

    var celsiusResult = (fahrenhiet - 32)/1.8;
    var b = celsiusResult.toFixed(2);

    document.querySelector("#celsius").value=b;
    document.querySelector("#fahrenhiet").value=fahrenhiet;
}

constreset = ()=>{
    document.querySelector("#celsius").value=" ";
    document.querySelector("#fahrenhiet").value=" ";

}