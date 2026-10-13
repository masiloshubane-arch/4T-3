
/* ==========================================
   OUR LITTLE SECRET
   Interactive features
========================================== */

const openingScreen = document.getElementById("openingScreen");
const letterScreen = document.getElementById("letterScreen");

const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
const buttonArea = document.getElementById("buttonArea");

const letterText = document.getElementById("letterText");
const signature = document.getElementById("signature");
const letterFooter = document.getElementById("letterFooter");
const replayButton = document.getElementById("replayButton");

const music = document.getElementById("backgroundMusic");
const musicButton = document.getElementById("musicButton");
const musicLabel = document.getElementById("musicLabel");

const heartsContainer = document.getElementById("hearts-container");

/* ==========================================
   YOUR LOVE LETTER
========================================== */

const letter = `Hey T<3,

I have been thinking, about what has happened recently, and about the strange way a single moment can make you question everything you thought you had figured out.

It is almost amusing how life works. You can spend so much time living comfortably within the boundaries, convinced that you understand where everyone belongs in your life, only for an introduction of a feeling you can no longer pretend you haven't felt.

And ever since then, I have found myself thinking about you in ways I cannot quite explain.

I don't know what that kiss meant to you, and I don't want to assume that we experienced it in the same way. But I know what it has done to my thoughts. It has left me wondering whether some things happen because we planned them or because, for a brief moment, our hearts were brave enough to do something our minds had been too afraid to consider.

I have thought about everything. Believe me, I have.

I have thought about the fact that you are part of our friend group, that we share people, memories, laughter, and spaces that we cannot simply abandon if things become complicated. I have thought about how this could change the atmosphere between us, how things could become awkward, and how something between two people could unintentionally affect the people around them.

I have even thought about the possibility of me leaving next year. I have considered the uncertainty of tomorrow, the possibility of things not working out, and the reality that sometimes people meet each other at the wrong time, even when the feelings themselves seem right.

I have considered all of it, and perhaps that is what makes this so difficult.

Because if this were simply a matter of logic, I could probably convince myself to leave it alone. I could remind myself of the complications, list every possible consequence, and choose the safest option. I could pretend that nothing happened and return to the comfort of pretending that my feelings have no say in the matter.

But feelings are rarely that obedient.

You see, the heart does not always ask whether a feeling is convenient before allowing itself to feel it. Sometimes it simply recognises something, and the mind is left trying to understand what the heart has already begun to experience.

And I am not saying that feelings should excuse recklessness. I know that our choices have consequences, and I would never want my emotions to become the reason you feel pressured, our friendship becomes uncomfortable, or our friend group loses the beautiful dynamic we have built.

I care about those things, too. I care about you as a person, not merely as a possibility of something romantic.

But I also believe that pretending not to feel something does not necessarily make it disappear. Sometimes, all it does is teach us how to hide from the truth while quietly carrying it around.

And the truth is, I wanted to write this letter because I don't want to leave unanswered question between us.

What I can tell you is that I am willing to understand what this is, without rushing it, without forcing it to become something before it is ready, and without allowing fear to make the decision on our behalf.

Perhaps this becomes something beautiful. Perhaps we discover that Saturday was simply a moment we shared, one that we can look back on without regret. I don't know.

And strangely enough, I am learning that not knowing does not always have to be a bad thing. Sometimes uncertainty is simply life reminding us that not every meaningful beginning comes with instructions.

I read a quote that says

"Sometimes, the soul recognises a possibility long before the mind has finished calculating the cost of believing in it."

Maybe that is where I find myself with you. Somewhere between what makes sense and what feels right, between the fear of what could change and the curiosity of what could begin.

I am not writing this to ask you to figure everything out with me right now. I am not asking you to choose between a possibility and the comfort of what we already have. I simply want you to know that I have considered the complications, and despite them, I cannot honestly say that Saturday meant nothing to me.

Because sometimes, life presents us with a choice we never anticipated, and we must decide whether we are going to let the fear of what might happen prevent us from discovering what could happen.

I don't know if we are meant to become a story worth telling. I don't know whether our timing is perfect or terribly inconvenient. But I know that I would rather approach this with honesty, patience, and respect than allow assumptions and unspoken feelings to decide everything for us.

Whatever happens, I want us to remember that we are two human beings trying to understand something neither of us necessarily planned for. We don't have to have all the answers today. We just have to be honest enough to ask the questions.

And if there is something here worth exploring, perhaps we owe it to ourselves to discover it gently, without sacrificing the people we are or the friendships that brought us into each other's lives in the first place.

Because maybe the most beautiful things in life are not the things that come without complications, but the things we approach with enough courage to be honest and enough wisdom to be careful.

And you, somehow, have become one of those things I find myself thinking about.

// I don't need you to figure a solution ASAP because I have written all of this. Take your time. Be honest with yourself, and with me, when you're ready.

Whatever your answer is, I want it to be yours, freely given and without pressure.

Because feelings may be beyond our control, but the way we treat each other will always be our responsibility.

And if nothing else, I hope we can look back at this moment knowing that we were brave enough to be honest, and kind enough to handle whatever comes next.

With a little courage and a lot of honesty,
From me, to you.`;

let typingTimer = null;
let isTyping = false;
let hasStarted = false;

/* ==========================================
   FLOATING HEARTS
========================================== */

const heartSymbols = ["♥", "♡", "❤", "💕"];

function createHeart() {
    const heart = document.createElement("span");

    heart.className = "floating-heart";
    heart.textContent =
        heartSymbols[Math.floor(Math.random() * heartSymbols.length)];

    const size = Math.random() * 23 + 10;
    const duration = Math.random() * 8 + 9;

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = size + "px";
    heart.style.animationDuration = duration + "s";
    heart.style.opacity = Math.random() * 0.5 + 0.2;

    heartsContainer.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Start with a few hearts and keep creating them.
for (let i = 0; i < 12; i++) {
    setTimeout(createHeart, i * 450);
}

setInterval(createHeart, 650);

/* ==========================================
   RUNAWAY NO BUTTON
========================================== */

function moveNoButton() {
    const areaRect = buttonArea.getBoundingClientRect();

    const buttonWidth = noButton.offsetWidth;
    const buttonHeight = noButton.offsetHeight;

    // Keep the button inside the visible area.
    const maxX = Math.max(0, areaRect.width - buttonWidth);
    const maxY = Math.max(0, areaRect.height - buttonHeight);

    noButton.style.position = "absolute";
    noButton.style.left = Math.random() * maxX + "px";
    noButton.style.top = Math.random() * maxY + "px";
    noButton.style.zIndex = "5";
}

// Desktop: run away when the pointer approaches.
noButton.addEventListener("pointerenter", moveNoButton);

// Mobile: run away when she tries to touch it.
noButton.addEventListener("pointerdown", (event) => {
    event.preventDefault();
    moveNoButton();
});

// Backup in case a click is triggered.
noButton.addEventListener("click", (event) => {
    event.preventDefault();
    moveNoButton();
});


/* ==========================================
   START THE EXPERIENCE - FIX
========================================== */

yesButton.addEventListener("click", () => {
    if (hasStarted) return;

    hasStarted = true;

    // Show the letter screen without waiting for music.
    openingScreen.classList.add("hidden");
    letterScreen.classList.remove("hidden");
    musicButton.classList.remove("hidden");

    window.scrollTo(0, 0);

    // Begin typing immediately.
    startTyping();

    // Play music separately so it cannot block the letter.
    music.volume = 0.12;

    music.play()
        .then(() => {
            musicLabel.textContent = "Music on";
        })
        .catch(() => {
            musicLabel.textContent = "Play music";
        });
});


/* ==========================================
   LETTER TYPING EFFECT
========================================== */

function startTyping() {
    clearTimeout(typingTimer);

    isTyping = true;

    letterText.textContent = "";
    signature.classList.add("hidden");
    letterFooter.classList.add("hidden");
    replayButton.classList.add("hidden");

    let index = 0;

    // One character every 23 milliseconds.
    const typingSpeed = 23;

    function typeNextCharacter() {
        if (index < letter.length) {
            letterText.textContent += letter.charAt(index);
            index++;

            // Keep the latest text visible on longer screens.
            const rect = letterText.getBoundingClientRect();

            if (rect.bottom > window.innerHeight - 45) {
                window.scrollBy({
                    top: 35,
                    behavior: "smooth"
                });
            }

            typingTimer = setTimeout(
                typeNextCharacter,
                typingSpeed
            );
        } else {
            finishTyping();
        }
    }

    typeNextCharacter();
}

function finishTyping() {
    isTyping = false;

    signature.classList.remove("hidden");
    letterFooter.classList.remove("hidden");
    replayButton.classList.remove("hidden");

    signature.scrollIntoView({
        behavior: "smooth",
        block: "nearest"
    });
}

/* ==========================================
   REPLAY THE LETTER
========================================== */

replayButton.addEventListener("click", () => {
    if (isTyping) {
        clearTimeout(typingTimer);
    }

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    setTimeout(startTyping, 350);
});

/* ==========================================
   MUSIC PLAY / PAUSE CONTROL
========================================== */

musicButton.addEventListener("click", async () => {
    if (music.paused) {
        try {
            await music.play();
            musicLabel.textContent = "Music on";
        } catch (error) {
            musicLabel.textContent = "Tap to retry";
        }
    } else {
        music.pause();
        musicLabel.textContent = "Music off";
    }
});
