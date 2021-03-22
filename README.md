# Pre-work - _Memory and Sound Game_

**Harrison's Memory and Sound Game** is a Light & Sound Memory game to apply for CodePath's SITE Program.

Submitted by: **Harrison Huang**

Time spent: **4** hours spent in total

Link to project: [here](https://glitch.com/edit/#!/harrisons-memory-sound-game?path=README.md%3A2%3A0)

## Required Functionality

The following **required** functionality is complete:

- [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
- [x] "Start" button toggles between "Start" and "Stop" when clicked.
- [x] Game buttons each light up and play a sound when clicked.
- [x] Computer plays back sequence of clues including sound and visual cue for each button
- [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess.
- [x] User wins the game after guessing a complete pattern
- [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

- [x] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
- [x] Buttons use a pitch (frequency) other than the ones in the tutorial
- [x] More than 4 functional game buttons
- [x] Playback speeds up on each turn
- [x] Computer picks a different pattern each time the game is played
- [x] Player only loses after 3 mistakes (instead of on the first mistake)
- [x] Game button appearance change goes beyond color (e.g. add an image)
- [x] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
- [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [x] Added instructions at the bottom of the page, which disappear when the game starts
- [x] Added a counter for the current number of guesses remaining
- [x] Added two different image views, one that appears as a background to the button when pressed, the other at the bottom (that one being the full image)

## Video Walkthrough

Here's a walkthrough of the game:

![Beginning the game](https://i.imgur.com/xx3KaLg.gif)

![A successful completion of the game](https://i.imgur.com/OYo1lwV.gif)

![A failed completion of the game](https://i.imgur.com/Q09iPqh.gif)

## Reflection Questions

1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here.

- [Use of `Math.random` in JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)
- [How to show JavaScript variables in HTML](https://www.w3schools.com/js/js_output.asp)
- [Use of the HTML img tag](https://www.w3schools.com/tags/tag_img.asp)
- [Background image in CSS](https://www.w3schools.com/cssref/pr_background-image.asp)
- [Individual piano notes in mp3 files](https://www.reddit.com/r/piano/comments/3u6ke7/heres_some_midi_and_mp3_files_for_individual/)
- [Playing audio files in HTML](https://programminghead.com/how-to-play-audio-in-html-using-javascript/)

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words)

- One challenge I ran into was how to design and implement additional images in the same place as buttons. In my mind, I had three options, each of which came with its own cons:
  - have the buttons disappear when pressed, being replaced by images (though this would probably be hard to do, as the buttons rely on the on mouse down/up functionality),
  - have the images appear inline next to the button that was just pressed (though this would mess with the current placement of the other buttons), or
  - have the images appear at the bottom of the screen (which would be far away from the main button layout).
- I decided to go with the third option because it interfered the least with the existing elements, and it also allowed me to display full images without having to specifically crop them or size them to fit in a small window.
- While I actually did implement the third option, I was still unhappy with it, so I looked around for other ways to solve my problem. In browsing all my code files, I wondered if I could use other elements to help me. In fact, I did discover a better alternative: not implementing images using HTML, but rather CSS. CSS allows you to set background images to an element, which includes buttons, so that would preserve the functionality of the buttons, the placement of the buttons, and the relative location of the image. The limitation to the way I used this function, though, is that my images don't appear as full images, but rather as small windows of them. I think this is fine though, as the current implementation still has the non-interfering full image displays at the bottom. In the future, I'd want to consider cropping the images myself to make more meaningful displays when buttons are pressed.
- While I can come up with design ideas and weigh them well on my own, I learned that I should try to think outside the box to solve my issues, as problems tend not to have easy solutions given only a few ways of solving them. It's easy to get narrow-minded when programming without knowing many tools, so this challenge served as a good reminder to always be curious and thinking creatively.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words)

- I would like to know how much of the basic skills I've learned through this pre-work assignment is applicable in the real-world use of frontend development in HTML/CSS/JavaScript. I feel like I would need to learn a lot more before I'm able to work in web development at a high level. I don't really know the extent to which HTML/CSS/JS can be used for development, and how powerful these languages and tools are, so I would ask what more can I learn about them before I can consider myself a competent frontend developer, and how accessible are the more powerful features of these three languages to a beginner like me? I am curious to know how much more there is to learn and what kinds of things you can do given these skills and knowledge.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words)

- If I had a few more hours to work on this project, I'd try to make the game into a perfect pitch trainer, in which each of the functional buttons maps to a key on a piano, and the game gradually increases in difficulty by simply playing sounds instead of triggering keys, which forces players to click on keys solely by the sound prompt. This could be extended even further by having an endless mode, which instead of deciding whether a player wins or loses, can score a player based on how many keys were correctly guessed and how quickly they were pressed. A player can keep trying over and over again to get a new high score.
- In the case that the buttons are implemented as piano keys, I'd also want to support different kinds of keyboards, ranging from all the keys in a major scale (how it is currently), all keys in a scale including accidentals, a keyboard spanning two octaves, or all 88 keys in a piano.
- Another idea I have for possible additional features is pre-programmed songs, so that piano players could have an interactive way to learn and memorize series of notes and eventually entire pieces.
- There is still a bit of work to be done to make the audio work correctly, as it seems that the audio files don't play if keys are pressed in rapid succession. I'm not sure if this is my fault, but the tones don't seem to play if I open my page in a new window (though it still works correctly in the side-by-side view in Glitch).
- I think it would also be productive to refactor the code in such a way that every single button does not have to be manually added (like how you can do reflection in Java), but I'm not sure how to do this in HTML/JavaScript (or if this is possible).

## License

    Copyright Harrison Huang

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
