let a = 0;






function change1() {
    if (document.querySelector('.btn1').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn1').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn1').style.backgroundColor == "yellow")
        document.querySelector('.btn1').style.backgroundColor = "rgb(207, 128, 31)";
}

function change2() {
    if (document.querySelector('.btn2').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn2').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn2').style.backgroundColor == "yellow")
        document.querySelector('.btn2').style.backgroundColor = "rgb(207, 128, 31)";

}

function change3() {
    if (document.querySelector('.btn3').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn3').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn3').style.backgroundColor == "yellow")
        document.querySelector('.btn3').style.backgroundColor = "rgb(207, 128, 31)";
}

function change4() {
    if (document.querySelector('.btn4').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn4').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn4').style.backgroundColor == "yellow")
        document.querySelector('.btn4').style.backgroundColor = "rgb(207, 128, 31)";
}

function change5() {
    if (document.querySelector('.btn5').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn5').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn5').style.backgroundColor == "yellow")
        document.querySelector('.btn5').style.backgroundColor = "rgb(207, 128, 31)";
}

function change6() {
    if (document.querySelector('.btn6').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn6').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn6').style.backgroundColor == "yellow")
        document.querySelector('.btn6').style.backgroundColor = "rgb(207, 128, 31)";
}

function change7() {
    if (document.querySelector('.btn7').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn7').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn7').style.backgroundColor == "yellow")
        document.querySelector('.btn7').style.backgroundColor = "rgb(207, 128, 31)";
}

function change8() {
    if (document.querySelector('.btn8').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn8').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn8').style.backgroundColor == "yellow")
        document.querySelector('.btn8').style.backgroundColor = "rgb(207, 128, 31)";
}

function change9() {
    if (document.querySelector('.btn9').style.backgroundColor == "rgb(207, 128, 31)")
        document.querySelector('.btn9').style.backgroundColor = "yellow";

    else if (document.querySelector('.btn9').style.backgroundColor == "yellow")
        document.querySelector('.btn9').style.backgroundColor = "rgb(207, 128, 31)";
}


function result() {

    if (document.querySelector('.btn1').style.backgroundColor == "rgb(207, 128, 31)" &&
        document.querySelector('.btn2').style.backgroundColor == "rgb(207, 128, 31)" &&
        document.querySelector('.btn3').style.backgroundColor == "yellow" &&
        document.querySelector('.btn4').style.backgroundColor == "rgb(207, 128, 31)" &&
        document.querySelector('.btn5').style.backgroundColor == "yellow" &&
        document.querySelector('.btn6').style.backgroundColor == "yellow" &&
        document.querySelector('.btn7').style.backgroundColor == "yellow" &&
        document.querySelector('.btn8').style.backgroundColor == "rgb(207, 128, 31)" &&
        document.querySelector('.btn9').style.backgroundColor == "yellow") {
        document.querySelector('.yes').style.display = "block";
        document.querySelector('.all').style.display = "none";
    } else {
        document.querySelector('.no').style.display = "block";
        document.querySelector('.all').style.display = "none";
    }
}

function go() {
    document.querySelector('.yes').style.display = "none";
    document.querySelector('.container').style.display = "none";


}
