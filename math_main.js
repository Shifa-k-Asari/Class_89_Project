number1_name = localStorage.getItem("player1_name");
number1_score = 0;
document.getElementById("number1_name").innerHTML = number1_name + " : ";
document.getElementById("number1_score").innerHTML = number1_score;
document.getElementById("number_question").innerHTML = "Question turn - " + number1_name;

number2_name = localStorage.getItem("player2_name");
number2_score = 0;
document.getElementById("number2_name").innerHTML = number2_name + " : ";
document.getElementById("number2_score").innerHTML = number2_score;
document.getElementById("number_question").innerHTML = "Answer turn - " + number2_name;

function send()
{
    Number1 = document.getElementById("number1").value;
    Number2 = document.getElementById("number2").value;

    actual_answer = parseInt(Number1) * parseInt(Number2);
    
    question_number = "<h4>" + Number1 + "X" + Number2 + "</h4>";
    input_box = "<br> Answer : <input type='number' id='input_check_box'>";
    check_button = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}