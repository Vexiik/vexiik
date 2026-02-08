const terminal = document.getElementById("terminal");

const lines = [
"> Booting CyberSec OS...",
"> Initializing exploit framework...",
"> Connecting to darknet relay...",
"> Loading recon modules...",
"> Performing network scan...",
"> Port 22 OPEN",
"> Port 80 OPEN",
"> Port 443 OPEN",
"> Injecting test payload...",
"> Firewall bypassed",
"> Establishing secure tunnel...",
"> Monitoring packets...",
"> Deploying IDS...",
"> System hardened",
"> Awaiting commands..."
];

let i = 0;

function type() {
if(i < lines.length){
terminal.innerHTML += lines[i] + "<br>";
terminal.scrollTop = terminal.scrollHeight;
i++;
setTimeout(type, 600);
}
}

type();

// continuous fake logs
setInterval(()=>{
terminal.innerHTML += "> Recon IP 192.168."+rand()+"."+rand()+"<br>";
terminal.scrollTop = terminal.scrollHeight;
},2000);

function rand(){
return Math.floor(Math.random()*255);
}

// glitch flicker
setInterval(()=>{
document.querySelector(".glitch").style.opacity =
Math.random() > .92 ? ".6":"1";
},100);
