const texts = document.querySelector(".texts");

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();

recognition.interimResults = true;

let p = document.createElement("p");
recognition.addEventListener("result", (e) => {
    texts.appendChild(p);

    const text = Array.from(e.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
    p.innerText = text;

    if (e.results[0].isFinal) {

        if (text.includes("how are you")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "I am fine";
            texts.appendChild(p);
        }

        if (
            text.includes("what's your name") ||
            text.includes("whats your name") ||
            text.includes("what is your name") ||
            text.includes("Who are you")
        ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My Name is Speech recognition";
            texts.appendChild(p);
        }

        if (
            text.includes("who make you") ||
            text.includes("who is your creator") ||
            text.includes("who created you")
        ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "My creator is SAKSHAM AGARWAL";
            texts.appendChild(p);
        }

        if (
            text.includes("which language do you like") ||
            text.includes("which language do you prefer") ||
            text.includes("what is your favourite language")
        ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "ENGLISH";
            texts.appendChild(p);
        }

        if (text.includes("open my YouTube")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "opening youtube channel";
            texts.appendChild(p);
            window.open("https://www.youtube.com/");
        }

        if (text.includes("open YouTube music")) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "opening youtube music";
            texts.appendChild(p);
            window.open("https://music.youtube.com/");
        }

        if (text.includes("play any song on YouTube music") ||
            text.includes("play a song on YouTube music") ||
            text.includes("play a song on youtube music")
        ) {
            p = document.createElement("p");
            p.classList.add("replay");
            p.innerText = "opening youtube music";
            texts.appendChild(p);
            window.open("https://music.youtube.com/watch?v=5DF9aRuiOZo&list=RDAMVM5DF9aRuiOZo");
        }
        
        p = document.createElement("p");
    }
});

recognition.addEventListener("end", () => {
    recognition.start();
});

recognition.start();
