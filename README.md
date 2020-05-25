#Endangered Species Card Game

This is a card matching game which uses images of indangered animal species. The main purpose is to raise 
some awareness of poor creatures which are on a brink of extinction because of the human race. I've implemented
the flipping animation for prettier look during the gameplay.

##UX Design

-As a user I want a memory game where I have to match identical cards*
-That's exactly what this project does!*

-Whenever I click on card, I expect it to flip and show the front image*
-By using CSS and JavaScript I implemented that as a feature*

-When I click on two matching cards, the both stay flipped*
-Both cards will remain flipped because of added Inactive CSS class*

-If cards don't match, both of them should flip back*
-That's exactly what happens and it's achieved by removing and adding some classes to the chosen cards*

-I shouldn't be able to click on the same card twice*
-Whenever you click on card, the script will remove any interactivity from it*

-When I enter the user name, I expect it to be shown somewhere within the webpage*
-The user name you input will be shown on the top-left corner. It'll be saved to your local storage and can be changed at any time!*

-The turns counter should increase every time I flip two cards*
-Whenever you flip two cards the JavaScript will increment the turns counter and push the value into HTML page*

-If all cards are matched I expect a message notifying me of my victory*
-When all cards are matched, the message pops-up congratulating the user and offering to restart the game*

##Features

-User can fill out a text field before starting game to use it as a User Name. Which will be displayed on top-left corner*
-The user name is stored in Local Storage and retrieved every time the user visits the page*
-When the user clicks on card, it flips and reveals the front image*
-When two cards are flipped they'll be compared to each other, if they don't match flip them back. If they do then keep them open*
-Every time the user clicks on two cards to compare them. The turns counter will increase and display it on the bar on top of the page*
-If all cards are matched, victory pop-up message will be shown. Which will display in how many turns user beated the game. Also an option to restart will be available*
-A reset button which will randomize cards position, flip them back and reset all the counters*

##Technologies Used

-JQuery is used to simplify DOM navigation and making interactions on the webpage easier to achieve*
-BootStrap was used to align content easier. At the beggining of project I expected to use more of it, but at the end it's there just to be there*

##Testing

For testing I utilised Chrome Dev Tools which prooved to be an invaluable asset at finding out what's wrong with code.
By using the console.log() command to keep track of all the variables and their condition within the Console tab of Dev Tools
Also by using the same tools, I'd select an HTML element which doesn't display as I would expect it to. Then check all 
the rules to see which one alters the view of the page. Along with that I'd create new temporary styles to see which
one of them would achieve the result I expect.
Also with those tools I'd change the screen size and pick the smartphone/tablet resolutions to check how the site
displays on the mobile devices. Also to ensure that the quality of the webpage is consistent across all platforms
I checked the page on my phone Galaxy S5, my friends HTC Honor, IPad and some other devices provided to me by my frineds.

##Deployment

To deploy the page I simply pushed all of the repository data to GitHub. Navigated to the repository name and then to the
settings tab. In the settings tab I scrolled down to the GitHub Pages section, and there via few simple clicks
I published the page.

##Credits

I'd like to give credit and thank the guys on https://whyfiles.org/202critter_cards/ for making the cards which I utilised 
within this project. Go check them out, they have a bunch of interesting pages made!
Also I express my gratitude to my mother and my cat for moral support and kick in the ass for boosted work! :D


