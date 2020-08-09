window.onload = function(){
    show(0)
}


var question = [{
    id:1,
    question:"How do you create a function in Javascript?",
    answer:"function myFunction()",
    options:[
        "function = myFunction()",
        "function myFunction()",
        "function: myFunction",
        "function; myFunction"
    ]

},
{ 
    id:2,
    question:"Which of the following are capabilities of functions in Javascript?",
    answer:"Accept parameters",
    options:[
        "Return a value",
        "Accept parameters and Return a value",
        "Accept parameters",
        "None of the above"
    ]

},
{
    id:3,
    question:"Using _______ statement is how you test for a specific condition?",
    answer:"If",
    options:[
        "Select",
        "If",
        "Switch",
        "For"
    ]

},
{
    id:4,
    question:"The _______ method of an array object adds and/or removes elements from an array?",
    answer:"Splice",
    options:[
        "Reverse",
        "Shift",
        "Slice",
        "Splice"
    ]
    
},
{
    id:5,
    question:"Which of the following attribute can hold the Javascript version?",
    answer:"Splice",
    options:[
        "LANGUAGE",
        "SCRIPT",
        "VERSION",
        "None of the above"
    ]

},
{
    id:6,
    question:"Which on is the first fully supported 64-bit operating system?",
    answer:"Linux",
    options:[
        "Windows Vista",
        "Mac",
        "Linux",
        "Windows XP"
    ]
},
{   id:7,
    question:"Which of the following is not a web browser?",
    answer:"Facebook",
    options:[
        "MOSAIC",
        "WWW",
        "Facebook",
        "Netscape navigator"
    ]

},
{
    id:8,
    question:"Which one of the following is a programming language?",
    answer:"HTML",
    options:[
        "HTTP",
        "HTML",
        "HPML",
        "FTP"

    ]
},
{
    id:9,
    question:"Who is the father of computer?",
    answer:"Charles Babbage",
    options:[
        "Charlie Babbage",
        "Dennis Ritchie",
        "Charles Babbage",
        "Ken Thompson"
    ]
},
{
    id:10,
    question:"Which is not a correct type of a computer?",
    answer:"Mini Frame computer",
    options:[
        "Mini Frame computer",
        "Super computer",
        "Workstations",
        "Personal computer"
    ]
}
]

var question_shift = 0;
function mine(){
    question_shift++
    show(question_shift)
    
}
function show(e){
    var ques = document.getElementById("question")
    ques.innerHTML = `<h1> ${question[e].question} </h1>
    <ul class="list">
                      <li class="member">${question[e].options[0]}</li>
                      <li class="member">${question[e].options[1]}</li>
                      <li class="member">${question[e].options[2]}</li>
                      <li class="member">${question[e].options[3]}</li>
                  </ul>`
                  active()
}
function active(){
    let member1 = document.querySelectorAll("li.member")
    for(let i=0 ; i<member1.length;i++){
        member1[i].onclick = function(){
            for(let j =0 ; j<member1.length ; j++){
                if(member1[j].classList.contains("active")){
                   member1[j].classList.remove("active")
                }
            }
            member1[i].classList.add("active")

        }
    }
}

