window.onload = function() {
    if(document.getElementById("Home")){
        alert("Welcome to home page")
    }
    else if(document.getElementById("prod")){
        alert("Welcome to products page")
    }
    else if(document.getElementById("Contact")){
        alert("Welcome to contact page")
    }
};

if (document.getElementById("dt")) {
    let dt=new Date().getFullYear();
    document.getElementById("dt").innerHTML = "Year: "+dt;
}

function aval(name){
    if(name=="a1"){ alert("Devil May Cry 1 is available") }
    else if(name=="a2"){ alert("Devil May Cry 2 isnt available") }
    else if(name=="a3"){ alert("Devil May Cry 3 is available") }
    else if(name=="a4"){ alert("Devil May Cry 4 is available. Will be soon out of stock") }
    else if(name=="a5"){ alert("Devil May Cry 5 is available") }
}; 

function validateForm() {
    let name = document.forms["form"]["name"].value
    let email = document.forms["form"]["email"].value
    if (name == "" || email=="") {
        alert("Both boxes must be filled out");
        return false;
    }
}

const chbutton = document.getElementById("cbutton");
const chcontain = document.getElementById("ccontain");

if (chbutton && chcontain) {
    chbutton.addEventListener("click",()=> {
        chcontain.classList.toggle("hid");
    })
}
const sendBtn = document.getElementById("sms");
const useinp = document.getElementById("usin");
const chatBox = document.getElementById("cbox");

sendBtn.addEventListener("click", () => {
  let msg = useinp.value.trim();

  if (msg === "") return;

  chatBox.innerHTML += `<p><b>You:</b> ${msg}</p>`;

  let reply = "";

  if (msg.toLowerCase() === "hello"||msg.toLowerCase() === "hi"||msg.toLowerCase()==="hey") {
    reply = "Hey there! Welcome to the world of Devil May Cry. I'm dante. How may i be of service?";
  } else if(msg.toLowerCase()==="how are you"){
    reply="Never felt better!"
  }
  else if (msg.toLowerCase() === "why should i buy your game") {
    reply = "To play duh. Im kidding. DMC players search for the thrilling and intense gameplay. If you're up for that, no harm in trying :)";
  } else if (msg.toLowerCase() === "how long is the delivery time") {
    reply = "Almost instant, just show us valid proof of your checkout and the game is yours to play";
  } else if(msg.toLowerCase()==="I want to buy a game"){
    reply ="Finally made up you mind, huh? Head to the products section to get your favourite game!";
  }
  else {
    reply = "The things you wrote would even make a devil cry. Try to type something we understand.";
  }

  chatBox.innerHTML += `<p><b>Dante:</b> ${reply}</p>`;

  useinp.value = "";

  chatBox.scrollTop = chatBox.scrollHeight;
});