// alert('i am here')
function addNewWeField(){
    console.log("i'm inside we")
    let newNode=document.createElement("textarea")
    newNode.classList.add("form-control")
    newNode.classList.add("weField")
    newNode.classList.add("mt-2")
    newNode.setAttribute("row",3)
    newNode.setAttribute("placeholder","enter here")

    
    let addObj=document.getElementById("we")
    let addBtnObj=document.getElementById("addWe")

    addObj.insertBefore(newNode,addBtnObj)
}

function addAqField(){
    //alert("i,m iside Aq")
    let newNode1=document.createElement("textarea")
    newNode1.classList.add("form-control")
    newNode1.classList.add("eqField")
    newNode1.classList.add("mt-2")

    newNode1.setAttribute("rows",3)
    newNode1.setAttribute("placeholder","enter here")

    let addNewBtn=document.getElementById("aq")
    let addBtnObj=document.getElementById("aqBtn")
    addNewBtn.insertBefore(newNode1,addBtnObj)
}

function generateCV(){
    let nameObj=document.getElementById('nameField').value;
    document.getElementById('nameT1').innerHTML=nameObj;
    document.getElementById('nameT2').innerHTML=nameObj;

    let contactObj=document.getElementById('contactField').value;
    document.getElementById('contactT').innerHTML=contactObj;
    let addressObj=document.getElementById('addressField').value;
    document.getElementById('addressT').innerHTML=addressObj;

    
    document.getElementById('fbT').innerHTML=document.getElementById('fbField').value;
    
    document.getElementById('instaT').innerHTML=document.getElementById('instaField').value;
    
    document.getElementById('linkedT').innerHTML=document.getElementById('linkedField').value;

    
    document.getElementById('objectiveT').innerHTML=document.getElementById('objectiveField').value;

    // work for experience field
    let wes=document.getElementsByClassName('weField');
    let str="";
    for(let e of wes){
        str=str + `<li> ${e.value} </li>`
    }
    document.getElementById('weT').innerHTML=str;

    //Acedmic Qualification
    let aqs=document.getElementsByClassName('eqField')
    let str1="";
    for(let e of aqs){
        str1+=`<li> ${e.value} </li>`
    }
    document.getElementById('aqT').innerHTML=str1;

    document.getElementById('cv-form').style.display='none'
    document.getElementById('cv-template').style.display='block'
}

function printCV(){
    window.print();
}