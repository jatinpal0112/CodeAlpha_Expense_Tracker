let i = 1;
let s = 1;
let k = 1;
document.getElementById("btn").addEventListener("click",function(){

    if(i>5){
        alert("Can't enter new record.");
    }

    else if(document.getElementById("entryType").value == '' || document.getElementById("name").value == '' || document.getElementById("amount").value == ''){
        alert("Please fill all the entries");
    }

    else if(document.getElementById("amount").value < 1){
        alert("Please enter valid amount");
    }
    
    else if(document.getElementById("entryType").value == 1){
        let j = 1; 

        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) + Number(document.getElementById("amount").value);

        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("amount").value);

        document.getElementById("tr"+i+""+j).innerHTML = s;
        j++;

        document.getElementById("tr"+i+""+j).innerHTML = document.getElementById("name").value;
        j++;

        document.getElementById("tr"+i+""+j).innerHTML = Number(document.getElementById("amount").value);
        j++;

        document.getElementById("tr"+i+""+j+""+k).setAttribute("src", "Images/up.png");
        j++;

        document.getElementById("tr"+i+""+j+""+k).setAttribute("src", "Images/cross.png");

        i++;
        s++;
    }

    else if(Number(document.getElementById("mainItem1Para2").innerHTML) < Number(document.getElementById("amount").value)){
        alert("Wrong Input! Your expense can't be greater than your balance amount.")
    }

    else{
        let j = 1;

        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) + Number(document.getElementById("amount").value);

        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("amount").value);

        document.getElementById("tr"+i+""+j).innerHTML = s;
        j++;

        document.getElementById("tr"+i+""+j).innerHTML = document.getElementById("name").value;
        j++;

        document.getElementById("tr"+i+""+j).innerHTML = Number(document.getElementById("amount").value);
        j++;

        document.getElementById("tr"+i+""+j+""+k).setAttribute("src", "Images/down.png");
        j++;

        document.getElementById("tr"+i+""+j+""+k).setAttribute("src", "Images/cross.png");

        i++;
        s++;
    }
});

document.getElementById("tr151").addEventListener("click",function(){
    document.getElementById("mainItem1Content2Item1Para2").innerHTML = "0";
    document.getElementById("mainItem1Content2Item2Para2").innerHTML = "0";
    document.getElementById("mainItem1Para2").innerHTML = "0";
    for(let i=1; i<6; i++){
        document.getElementById("tr"+i+"1").innerHTML = "";
        document.getElementById("tr"+i+"2").innerHTML = "";
        document.getElementById("tr"+i+"3").innerHTML = "";
        document.getElementById("tr"+i+"41").setAttribute("src", "");
        document.getElementById("tr"+i+"51").setAttribute("src", "");
    }
    i = 1;
    s = 1;
});

document.getElementById("tr251").addEventListener("click",function(){

    if(document.getElementById("tr241").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr23").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr23").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr23").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr23").innerHTML);
    }

    if(document.getElementById("tr341").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr33").innerHTML);
    }

    if(document.getElementById("tr441").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr43").innerHTML);
    }

    if(document.getElementById("tr541").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr53").innerHTML);
    }

    for(let i=2; i<6; i++){
        document.getElementById("tr"+i+"1").innerHTML = "";
        document.getElementById("tr"+i+"2").innerHTML = "";
        document.getElementById("tr"+i+"3").innerHTML = "";
        document.getElementById("tr"+i+"41").setAttribute("src", "");
        document.getElementById("tr"+i+"51").setAttribute("src", "");
    }
    i = 2;
    s = 2;
});

document.getElementById("tr351").addEventListener("click",function(){

    if(document.getElementById("tr341").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr33").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr33").innerHTML);
    }

    if(document.getElementById("tr441").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr43").innerHTML);
    }

    if(document.getElementById("tr541").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr53").innerHTML);
    }

    for(let i=3; i<6; i++){
        document.getElementById("tr"+i+"1").innerHTML = "";
        document.getElementById("tr"+i+"2").innerHTML = "";
        document.getElementById("tr"+i+"3").innerHTML = "";
        document.getElementById("tr"+i+"41").setAttribute("src", "");
        document.getElementById("tr"+i+"51").setAttribute("src", "");
    }
    i = 3;
    s = 3;
});

document.getElementById("tr451").addEventListener("click",function(){

    if(document.getElementById("tr441").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr43").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr43").innerHTML);
    }

    if(document.getElementById("tr541").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr53").innerHTML);
    }

    for(let i=4; i<6; i++){
        document.getElementById("tr"+i+"1").innerHTML = "";
        document.getElementById("tr"+i+"2").innerHTML = "";
        document.getElementById("tr"+i+"3").innerHTML = "";
        document.getElementById("tr"+i+"41").setAttribute("src", "");
        document.getElementById("tr"+i+"51").setAttribute("src", "");
    }
    i = 4;
    s = 4;
});

document.getElementById("tr551").addEventListener("click",function(){

    if(document.getElementById("tr541").getAttribute("src") == "Images/up.png"){
        document.getElementById("mainItem1Content2Item1Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
    }
    else{
        document.getElementById("mainItem1Content2Item2Para2").innerHTML = Number(document.getElementById("mainItem1Content2Item2Para2").innerHTML) - Number(document.getElementById("tr53").innerHTML);
        document.getElementById("mainItem1Para2").innerHTML = Number(document.getElementById("mainItem1Para2").innerHTML) + Number(document.getElementById("tr53").innerHTML);
    }
    
    for(let i=5; i<6; i++){
        document.getElementById("tr"+i+"1").innerHTML = "";
        document.getElementById("tr"+i+"2").innerHTML = "";
        document.getElementById("tr"+i+"3").innerHTML = "";
        document.getElementById("tr"+i+"41").setAttribute("src", "");
        document.getElementById("tr"+i+"51").setAttribute("src", "");
    }
    i = 5;
    s = 5;
});
