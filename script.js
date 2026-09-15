/* =========================
PASSWORD / UNLOCK
========================= */

function checkPassword(){

const password =
    document.getElementById("passwordInput").value.trim();

if(password === "1705"){

    const passwordScreen =
        document.getElementById("passwordScreen");

    const website =
        document.getElementById("websiteContent");

    passwordScreen.style.opacity = "0";
    passwordScreen.style.transition = "opacity .8s ease";

    setTimeout(() => {

        passwordScreen.style.display = "none";
        website.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"instant"
        });

        startCuteEffects();

    },800);

}else{

    const box =
        document.querySelector(".password-box");

    box.animate(
        [
            {transform:"translateX(0)"},
            {transform:"translateX(-8px)"},
            {transform:"translateX(8px)"},
            {transform:"translateX(-5px)"},
            {transform:"translateX(5px)"},
            {transform:"translateX(0)"}
        ],
        {
            duration:400
        }
    );

    alert("PIN-nya salah bestie 😭🤎");

}

}

/* ENTER KEY FOR PIN */

document.addEventListener("DOMContentLoaded",()=>{

const input =
    document.getElementById("passwordInput");

if(input){

    input.addEventListener("keydown",(event)=>{

        if(event.key === "Enter"){
            checkPassword();
        }

    });

}

});

/* =========================
OPEN GIFT
========================= */

function openGift(){

const music =
    document.getElementById("music");

if(music){

    music.volume = 0.55;

    music.play().catch(()=>{
        console.log("Music needs user interaction.");
    });

}

const gift =
    document.getElementById("giftSection");

if(gift){

    gift.scrollIntoView({
        behavior:"smooth",
        block:"start"
    });

}

createHeartBurst();

}

/* =========================
START EFFECTS
========================= */

function startCuteEffects(){

createHeart();

setInterval(createHeart,650);

setInterval(createSparkle,900);

createFloatingQuote();

startTypingEffect();

}

/* =========================
FLOATING HEARTS
========================= */

function createHeart(){

const container =
    document.getElementById("hearts");

if(!container) return;

const heart =
    document.createElement("div");

const hearts = [
    "♡",
    "♥",
    "🤍",
    "♡",
    "💗"
];

heart.className = "heart";

heart.innerHTML =
    hearts[
        Math.floor(Math.random()*hearts.length)
    ];

heart.style.left =
    Math.random()*100 + "vw";

heart.style.bottom =
    "-30px";

heart.style.fontSize =
    (Math.random()*15+14) + "px";

heart.style.animationDuration =
    (Math.random()*5+6) + "s";

heart.style.animationDelay =
    Math.random()*1.5 + "s";

heart.style.opacity =
    Math.random()*.5+.25;

container.appendChild(heart);

setTimeout(()=>{
    heart.remove();
},12000);

}

/* =========================
HEART BURST
========================= */

function createHeartBurst(){

const symbols = [
    "♡",
    "♥",
    "🤍",
    "💗",
    "✦"
];

for(let i=0;i<18;i++){

    const heart =
        document.createElement("div");

    heart.innerHTML =
        symbols[
            Math.floor(
                Math.random()*symbols.length
            )
        ];

    heart.style.position="fixed";

    heart.style.left="50%";
    heart.style.top="55%";

    heart.style.zIndex="9999";

    heart.style.pointerEvents="none";

    heart.style.fontSize =
        (Math.random()*18+15)+"px";

    const x =
        (Math.random()-.5)*500;

    const y =
        (Math.random()-.5)*500;

    heart.animate(
        [
            {
                transform:
                    "translate(-50%,-50%) scale(.5)",
                opacity:1
            },
            {
                transform:
                    `translate(
                        calc(-50% + ${x}px),
                        calc(-50% + ${y}px)
                    ) scale(1.3)`,
                opacity:0
            }
        ],
        {
            duration:
                Math.random()*800+900,
            easing:"ease-out"
        }
    );

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },1800);

}

}

/* =========================
SPARKLES
========================= */

function createSparkle(){

if(
    document.getElementById("websiteContent")
    .style.display !== "block"
){
    return;
}

const sparkle =
    document.createElement("div");

sparkle.innerHTML =
    Math.random() > .5 ? "✦" : "✧";

sparkle.style.position="fixed";

sparkle.style.left =
    Math.random()*100+"vw";

sparkle.style.top =
    Math.random()*100+"vh";

sparkle.style.color =
    "#e8a4b4";

sparkle.style.fontSize =
    (Math.random()*12+8)+"px";

sparkle.style.pointerEvents="none";

sparkle.style.zIndex="5";

sparkle.style.opacity="0";

document.body.appendChild(sparkle);

sparkle.animate(
    [
        {
            opacity:0,
            transform:"scale(.5) rotate(0deg)"
        },
        {
            opacity:.7,
            transform:"scale(1.2) rotate(90deg)"
        },
        {
            opacity:0,
            transform:"scale(.5) rotate(180deg)"
        }
    ],
    {
        duration:1800,
        easing:"ease-in-out"
    }
);

setTimeout(()=>{
    sparkle.remove();
},1900);

}

/* =========================
FADE-IN SCROLL
========================= */

const animationStyle =
document.createElement("style");

animationStyle.innerHTML = `

.reveal{

opacity:0;

transform:
    translateY(45px);

transition:
    opacity .9s ease,
    transform .9s ease;

}

.reveal.show{

opacity:1;

transform:
    translateY(0);

}

`;

document.head.appendChild(animationStyle);

const observer =
new IntersectionObserver(
(entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("show");

            observer.unobserve(entry.target);

        }

    });

},
{
    threshold:.12
}

);

document.querySelectorAll(
".section," +
".glass-card," +
".polaroid," +
".reason-card," +
".cute-message," +
".final-section," +
".ending"
).forEach(element=>{

element.classList.add("reveal");

observer.observe(element);

});

/* =========================
POLAROID EFFECT
========================= */

document
.querySelectorAll(".polaroid")
.forEach(card=>{

card.addEventListener(
    "mouseenter",
    ()=>{
        card.style.transform =
            "rotate(0deg) translateY(-12px) scale(1.06)";
    }
);

card.addEventListener(
    "mouseleave",
    ()=>{
        card.style.transform="";
    }
);

});

/* =========================
CUTE CLICK EFFECT
========================= */

document.addEventListener(
"click",
(event)=>{

    const burst =
        document.createElement("span");

    burst.innerHTML =
        "♡";

    burst.style.position="fixed";

    burst.style.left =
        event.clientX+"px";

    burst.style.top =
        event.clientY+"px";

    burst.style.color =
        "#df91a6";

    burst.style.fontSize="20px";

    burst.style.pointerEvents="none";

    burst.style.zIndex="9999";

    document.body.appendChild(burst);

    burst.animate(
        [
            {
                transform:
                    "translate(-50%,-50%) scale(.5)",
                opacity:1
            },
            {
                transform:
                    "translate(-50%,-100px) scale(1.3)",
                opacity:0
            }
        ],
        {
            duration:700,
            easing:"ease-out"
        }
    );

    setTimeout(()=>{
        burst.remove();
    },750);

}

);

/* =========================
FLOATING LOVE QUOTES
========================= */

const quotes = [

"I'm so lucky to have you, Rama. ♡",

"Five months, countless little memories. 🤎",

"You make ordinary days feel special.",

"Aku sayang kamu, lebih dari yang bisa aku jelasin. ♡",

"Having you in my life feels like a little blessing.",

"Thank you for being my favorite person. 🧸",

"Lima bulan sama kamu, and I'd choose you again.",

"You are one of my favorite parts of every day.",

"My heart is happier with you in it. ♡"

];

function createFloatingQuote(){

const quote =
    document.createElement("div");

quote.className =
    "floating-quote";

quote.innerText =
    quotes[0];

document.body.appendChild(quote);

let currentQuote=0;

setInterval(()=>{

    currentQuote++;

    if(currentQuote >= quotes.length){
        currentQuote=0;
    }

    quote.style.opacity="0";

    setTimeout(()=>{

        quote.innerText =
            quotes[currentQuote];

        quote.style.opacity="1";

    },500);

},5000);

}

/* =========================
QUOTE STYLE
========================= */

const quoteStyle =
document.createElement("style");

quoteStyle.innerHTML = `

.floating-quote{

position:fixed;

bottom:22px;

left:50%;

transform:translateX(-50%);

max-width:90%;

text-align:center;

white-space:nowrap;

background:
    rgba(82,24,43,.65);

backdrop-filter:
    blur(14px);

border:
    1px solid rgba(255,210,220,.15);

padding:
    11px 20px;

border-radius:50px;

font-size:12px;

color:#f0d8de;

z-index:998;

transition:
    opacity .5s ease,
    transform .5s ease;

box-shadow:
    0 8px 25px rgba(0,0,0,.2);

}

@media(max-width:500px){

.floating-quote{

    font-size:10px;

    padding:
        9px 15px;

    bottom:15px;

}

}

`;

document.head.appendChild(quoteStyle);

/* =========================
TYPING EFFECT
========================= */

function startTypingEffect(){

const heroText =
    document.querySelector(".hero-content p");

if(!heroText) return;

const originalText =
    heroText.innerHTML;

/*
   Don't replace the original paragraph.
   Add a tiny romantic message instead.
*/

const typing =
    document.createElement("div");

typing.className =
    "typing-message";

typing.style.marginTop="18px";

typing.style.color="#c996a4";

typing.style.fontSize="12px";

typing.style.minHeight="20px";

heroText.after(typing);

const messages = [
    "made with love by Aya ♡",
    "for my favorite Rama 🧸",
    "five months and still falling for you...",
    "you + me = my favorite story ♡"
];

let messageIndex=0;
let charIndex=0;
let deleting=false;

function type(){

    const message =
        messages[messageIndex];

    if(!deleting){

        typing.textContent =
            message.substring(
                0,
                charIndex++
            );

        if(charIndex > message.length){

            deleting=true;

            setTimeout(type,1800);

            return;
        }

    }else{

        typing.textContent =
            message.substring(
                0,
                charIndex--
            );

        if(charIndex < 0){

            deleting=false;

            charIndex=0;

            messageIndex++;

            if(
                messageIndex >= messages.length
            ){
                messageIndex=0;
            }

        }

    }

    setTimeout(
        type,
        deleting ? 35 : 70
    );

}

type();

}

/* =========================
HERO PARALLAX
========================= */

window.addEventListener(
"scroll",
()=>{

    const hero =
        document.querySelector(".hero");

    if(!hero) return;

    const scroll =
        window.pageYOffset;

    if(scroll < window.innerHeight){

        hero.style.transform =
            `translateY(${scroll*0.05}px)`;

    }

}

);

/* =========================
MUSIC FADE-IN
========================= */

const music =
document.getElementById("music");

if(music){

music.addEventListener(
    "play",
    ()=>{

        music.volume=0;

        let volume=0;

        const fade =
            setInterval(()=>{

                volume += .05;

                if(volume >= .55){

                    volume=.55;

                    clearInterval(fade);

                }

                music.volume=volume;

            },150);

    },
    {
        once:true
    }
);

}

/* =========================
DOUBLE CLICK = LOVE
========================= */

document.addEventListener(
"dblclick",
()=>{

    createHeartBurst();

}

);
