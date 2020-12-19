function myFunction() {
    var str = document.getElementById("phoneField5").value;
    var n = str.length;


    if (n < 10) {
        document.getElementById("demo").innerHTML = "Wrong";
    } else {
        document.getElementById("demo").innerHTML = "correct";
    }
}