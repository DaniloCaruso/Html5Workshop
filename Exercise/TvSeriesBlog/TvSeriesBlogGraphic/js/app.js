function submitWalkingDeadForm() {
    var username = document.forms["walkingDeadCommentsForm"]["username"].value;
    var commento = document.forms["walkingDeadCommentsForm"]["comment"].value;

    if((username && commento) || (username!="" && commento!=""))
    alert("username:"+username+"\n"+"commento:"+commento);
}


function submitGameOfThronesForm() {
    var username = document.forms["gameOfThronesCommentsForm"]["username"].value;
    var commento = document.forms["gameOfThronesCommentsForm"]["comment"].value;

    if((username && commento) || (username!="" && commento!=""))
    alert("username:"+username+"\n"+"commento:"+commento);
}


function submitBigBangTheoryForm() {
    var username = document.forms["bigBangTheoryCommentsForm"]["username"].value;
    var commento = document.forms["bigBangTheoryCommentsForm"]["comment"].value;

    if((username && commento) || (username!="" && commento!=""))
        alert("username:"+username+"\n"+"commento:"+commento);
    }