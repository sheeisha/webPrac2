function calc(){
    var num1=document.getElementById("txtAtt").value;
    var num2=document.getElementById("txtTot").value;
    num1=parseInt(num1);
    num2=parseInt(num2);

    var perc=(num1/num2)*100;

    // alert("percentage = "+perc.toFixed(2));

    document.getElementById("txtRes").value=perc.toFixed(2)+"%";

    if(perc >75)
    {
        str_a="Well done!";
        document.getElementById("display_message").style.backgroundColor="green";
        document.getElementById("display_message").style.color="yellow";

    }
    else if (perc <50){

        str_a="Stop bunking lectures";
        document.getElementById("display_message").style.backgroundColor="red";
        document.getElementById("display_message").style.color="black";

    }

    document.getElementById("display_message").innerHTML=str_a;
}

function calcGpa(){
    var num1=parseInt(document.getElementById("txtCgpa1").value);
    var num2=parseInt(document.getElementById("txtCgpa2").value);
    var num3=parseInt(document.getElementById("txtCgpa3").value);
    var num4=parseInt(document.getElementById("txtCgpa4").value);
    var num5=parseInt(document.getElementById("txtCgpa5").value);

    var gpa=(num1+num2+num3+num4+num5)/5;
    document.getElementById("txtResult").value=gpa.toFixed(2);

}

function calcecc(){

    var num1=parseInt(document.getElementById("txtecc").value);
    var num2=parseInt(document.getElementById("txtecc1").value);

    var bal=num1-num2;
    document.getElementById("display_messageecc").style.backgroundColor="red";
    document.getElementById("display_messageecc").style.color="black";
    document.getElementById("display_messageecc").style.padding="5px";
    document.getElementById("display_messageecc").innerHTML="ECCs you need: "+bal;
}