var lettersFound = 0;
var word = "WORD";
var wordArray = word.split('');
var counter = 1;
var wordHidden = [];
var gameStarted = false;
var str;
var lettersFound = 0;
var hyphenCount = 0;
function newGame()

{
        location.reload();
        startGame();
}

function startGame()
{
        if(gameStarted == false)
        {
                var i;
                for (i = 0; i < word.length; i++) 
                {
                        if(wordArray[i] == "-")
                        {
                                wordHidden[i] = "-";
                                ++hyphenCount;
                        }
                        else
                        {
                                wordHidden[i] = "_ ";
                        }
                }
                str = wordHidden.join('');
                document.getElementById("word").innerHTML = str;
                gameStarted = true;
        }
}

function guessLetter(x)
{
        if(gameStarted == true)
        {
                var y = x+"Button";
                if(counter != 7 && lettersFound != word.length-hyphenCount)
                {
                        document.getElementById(y).style.visibility = "hidden";
                        var found = false;
                        var i;
                        for (i = 0; i < wordArray.length; i++) {
                                if(x == wordArray[i])
                                {
                                        wordHidden[i] = x;
                                        str =wordHidden.join('');
                                        document.getElementById("word").innerHTML = str;
                                        found = true;
                                        ++lettersFound;
                                }
                        }
                }
                if(found == false)
                {
                        var z = "Rusty" + counter;        
                        document.getElementById(z).style.visibility = "hidden";
                        ++counter;
                }
                if(counter == 7)
                {

                                if (confirm("You lose! New Game?")) {
                                        newGame();
                                }                         
                }
        }
}

function guessWord()
{
        if(counter != 7 && lettersFound != word.length-hyphenCount)
        {
                var txt;
                var wordGuess = prompt("Please enter your guess:", "");
                var upper = wordGuess.toUpperCase();
                if (wordGuess == null || wordGuess == "")
                {
                } 
                else if(upper == word)
                {
                        txt = "Congratulations!";
                        document.getElementById("word").innerHTML = word;
                        alert("Congrats");
                }
                else
                {
                        var z = "Rusty" + counter;        
                        document.getElementById(z).style.visibility = "hidden";
                        ++counter;
                        if(counter < 7)
                        {
                                alert("Incorrect Guess");
                        }
                        else
                        {
                                if (confirm("You lose! New Game?")) {
                                        newGame();
                                }                         }
                }
        }
}
