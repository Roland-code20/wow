
function submitForm(e) {
    e.preventDefault();
    let name = document.getElementById("name").value;
    let age= document.getElementById("age").value;



  if(age<=0){document.getElementById("formMsg").textContent =`Please your age cannot be negative or 0 😎`}
    
  else if(age>0 && age<16){
      document.getElementById("formMsg").textContent =`You must be at least 16 years to contact a counsellor 😊. 
      Your age is ${age} years.`
    }

    
  else{document.getElementById("formMsg").textContent = `Thanks for contacting us ${name}!  We'll get back to you soon.`;
}}

    
/*
function read(){
    document.getElementById("read").innerHTML=`My name is Ama Owusu 👧. I am a clinical psychologist with 15 years of experience.
    I was once a person living with clinical depression and also severe anxiety😣.
    I had a tough journey and so I want to help others facing similar mental challenges .
    . Contact me and let's talk 😁.`
}

function read1(){
    document.getElementById("read1").innerHTML=`My name is Kwame Mensah 🧑. I am a counselor with 25 years of experience.
 I have always had the passion of helping people with their problems. I started my journey of counselling in high school and have heloed many 
 students on their mental health journey. Contact me and let's talk 😁.`
}

function read2(){
    document.getElementById("read2").innerHTML=`My name is Linda Asara 👧. I am a therapist with 10 years of experience.
    I had severe childhood anxiety and was living with post traumatic stress disorder(PTSD)😣.
    I had a tough journey and so I want to help others facing similar mental challenges .
    . Contact me and let's talk 😁.`
}*/

function read() {
  document.getElementById('read').innerHTML = "<span>Dr Ama Owusu is passionate about youth mental health and has helped over 500 clients. She loves hiking and painting.</span>";
  document.getElementById('showLessBtn').style.display = "block";
}
function read1() {
  document.getElementById('read1').innerHTML = "<span>Dr. Kwame Mensah advocates for mental health in schools and enjoys football and volunteering.</span>";
  document.getElementById('showLessBtn').style.display = "block";
}
function read2() {
  document.getElementById('read2').innerHTML = "<span>Dr Linda Asare specializes in trauma support and is a published author. She enjoys gardening.</span>";
  document.getElementById('showLessBtn').style.display = "block";
}
function showLess() {
  document.getElementById('read').innerHTML = '<button class="we" onclick="read()">about</button>';
  document.getElementById('read1').innerHTML = '<button class="we" onclick="read1()">about</button>';
  document.getElementById('read2').innerHTML = '<button class="we" onclick="read2()">about</button>';
  document.getElementById('showLessBtn').style.display = "none";
}