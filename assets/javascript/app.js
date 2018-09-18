$(document).ready(function() {

	var index = 0;

	var countdownTimer = {

		time : 30,

		reset: function() {

			this.time = 30;

			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');

		},

		start: function() {

			counter = setInterval(countdownTimer.count, 1000);	

		},

		stop: function() {

			clearInterval(counter);

		},

		count: function() {

				countdownTimer.time--;

				console.log(countdownTimer.time);

//				$('.timer').html(countdownTimer.time);

			if (countdownTimer.time >= 0) {

				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');

			}

			else {

				index++;

				answerWrong();

				countdownTimer.reset();

				if (index < questionArray.length) {

					loadQuestion(index);

				} else {

					$(".answerchoice").hide();

					showScore();

				}

			}

		}

	};

/*

	var trivia = {

		questions: ['Who was the host for Kitchen Kabaret?',

								'Who starred in the title role of Condorman?',

								'In Captain EO, what is the name of the elephant like alien?',

								'The 1980\'s were big for new personal computer introductions. Which of the following computers was introduced in 1980?',

								'What country was welcomed into the World Showcase at EPCOT Center in 1984?',

								'In 1981 a Disney constructed WED-Way People Mover opened at which airport?',

								'What school is attended in the Disney Channel Series, Girl Meets World?',

								'Which Walt Disney World location opened on the same day as the Disney-MGM Studios theme park on May 1, 1989?',

								'Which of the following films is NOT part of the Walt Disney Studios Silly Symphonies?',

								'Which wartime activity did the Walt Disney Studios partake in to support the American war effort?'],

		q1: ['A. Fud Wrapper',

				 'B. Cookie Ann Milk',

				 'C. Bonnie Appetit',

				 'D. Cherry Ontop'],

		q2: ['A. Zac Efron',

				 'B. Michael Crawford',

				 'C. Billy Crystal',

				 'D. Michael Keaton'],

		q3: ['A. Trunks',

				 'B. Hooter',

				 'C. Elle',

				 'D. Odie'],

		q4: ['A. Sinclair ZX80',

				 'B. IBM PC',

				 'C. Commodore 64',

				 'D. Atari 2600'],

		q5: ['A. Norway',

				 'B. Morocco',

				 'C. France',

				 'D. Japan'],

		q6: ['A. Houston Intercontinental Airport',

				 'B. Orlando International Airport',

				 'C. Atlanta International Airport',

				 'D. Dallas/Ft. Worth International Airport'],

		q7: ['A. Vintage High School',

				 'B. Peyton Middle School',

				 'C. John Quincy Adams Middle School',

				 'D. Washington High School'],

		q8: ['A. Typhoon Lagoon',

				 'B. Pleasure Island',

				 'C. Both A & B',

				 'D. None of the above'],

		q9: ['A. The Night Before Christmas',

				 'B. Three Little Pigs',

				 'C. The Old Mill',

				 'D. The Gallopin\' Gaucho'],

		q10: ['A. Recycling used film footage',

				  'B. Designing US Army & US Navy insignia',

				  'C. Hosted a Studio Victory Garden where employees grew food for their families',

				  'D. Forced employees to carpool by closing parking lots to non-carpool cars']		 						

	}

*/

var correct = 0;

var wrong = 0;

var q1 = {

	question : 'Who was the host for Migos video "Walk it Like I Talk it?',

	possibleAnswers : ['A. Warren Buffet',

				 'B. Jamie Foxx',

				 'C. Don Shula',

				 'D. Rick Flair'],

	flags : [false, true, false, false],

	answer : 'B. Jamie Foxx'

};



var q2 = {

	question: 'Who starred in the title role of JAckie Robinson in the 2013 film?',

	possibleAnswers: ['A. Dwayne Johnson',

				 'B.Chadwick Boseman',

				 'C. Micheal B. Jordan',

				 'D. Michael Keaton'],

	flags : [false, true, false, false],

	answer : 'B. Chadwick Boseman'

};



var q3 = {

	question : 'In the film "Castaway", what sports ball was personified as Chucks friend Wilson',

	possibleAnswers : ['A. Football',

				 'B. Volleyball',

				 'C. Tennis ball',

				 'D. Basketball'],

	flags : [false, true, false, false],

	answer : 'B. Volleyball'

};



var q4 = {

	question : 'On your machine, which button combination produces a triangle',
	possibleAnswers : ['A. Alt + J',

				 'B. Ctrl + w',

				 'C. Alt + T',

				 'D. Shift + P'],

	flags : [true, false, false, false],

	answer : 'A. Alt + J'

};



var q5 = {

	question : 'What country last state to be added to the United States',

	possibleAnswers : ['A. Vermont',

				 'B. Hawaii',

				 'C. Alaska',

				 'D. Puerto Rico'],

	flags : [false, true, false, false],

	answer : 'B. Hawaii'

};



var q6 = {

	question : 'Who was the NBA MVP in the year 2008',

	possibleAnswers : ['A. Kobe Bryant',

				 'B. Lebron James',

				 'C. Tracy Mcgrady',

				 'D. Dwayne Wade'],

	flags : [true, false, false, false],

	answer : 'A. Kobe Bryant'

};



var q7 = {

	question : 'What school is attended in the Disney Channel Series, Girl Meets World?',

	possibleAnswers : ['A. Vintage High School',

				 'B. Peyton Middle School',

				 'C. John Quincy Adams Middle School',

				 'D. Washington High School'],

	flags : [false, false, true, false],

	answer : 'C. John Quincy Adams Middle School'

};



var q8 = {

	question : 'What is the deepest part of the ocean?',

	possibleAnswers : ['A. Tonga Trench',

				 'B. Mariana Trench',

				 'C. Phillipine Trench',

				 'D. Kermadec Trench'],

	flags : [false, true, false, false],

	answer : 'B. Mariana Trench'

};



var q9 = {

	question : 'What was the name of the cowboy character in the film "Toy Story"',

	possibleAnswers : ['A. Tommy',

				 'B. Billy',

				 'C. Georgey',

				 'D. Woody'],

	flags : [false, false, false, true],

	answer : 'D. Woody'

};



var q10 = {

	question : 'What was the name of the main characters dog in the film "The Nightmare Before Christmas',

	possibleAnswers : ['A. Clink',

				  'B. Zero',

				  'C. Ghost',

				  'D. Casper'],

	flags : [false, true, false, false],

	answer : 'B. Zero'

}



var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];



function loadQuestion(questionSelection) {

	console.log(questionSelection);

	countdownTimer.reset();

  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");

  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();

  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();

  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();

  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();

//  getAnswer();  

//  nextQuestion(index);

}



//function nextQuestion() {

//	index = index++;

//	console.log(index);

//}



function setup() {

	index = 0;

	$('.question').append('<button id="startButton">Start</button>');

	$('#startButton').on('click', function() {

		$(this).hide();

		countdownTimer.start();

	 	loadQuestion(index);

	});

}		



function getAnswer() {



//  nextQuestion();

	$('.answerchoice').on('click', function() {

	  console.log('alert', index);

		index++;

		console.log('click', index);

		$(".question").text('');

		$("#buttonA").text('');

		$("#buttonB").text('');

		$("#buttonC").text('');

		$("#buttonD").text('');

		loadQuestion();

	})

}



function answerCorrect() {

	correct++;

	alert("Correct!");

	console.log("correct");

}



function answerWrong() {

	wrong++;

	alert("Incorrect!");

	console.log("wrong");

}



function showScore() {

	$('.question').empty();

	$('.question').append("<h2><p>" + correct + " correct</p></h2>");

	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");

	countdownTimer.stop();

	$('.timer').empty();



}

//		for (var i=0; i<questionArray.length; i++) {

//			$('.question').append('<p>'+questionArray[i].question+'</p>');

//			for (var j=0; j<questionArray[i].possibleAnswers.length; j++) {

//				$('.answers').append('<span><button id="possibleAnswer">' + questionArray[i].possibleAnswers[j]+ '</button></span>');

//			}

//			$('#possibleAnswers').on('click', function() {





//		console.log("click");

//		countdownTimer.start();

//		for (var i = 0; i < questionArray.length; i++) {

//			console.log(i);



//			$('.timer').html('<h3>'+countdownTimer.time + ' seconds remaining</h3>');

//			$('.question').html(questionArray[i].question);

//			while (countdownTimer != 0) {



//			}

		

//	});

	$('#startButton').click(countdownTimer.start);



//}

setup();

$('.answerchoice').on('click', function() {

 console.log($(this));

 if(this.id == 'buttonA') {

 	var answerChosen = 'A';

 } else if(this.id == 'buttonB') {

 	answerChosen = 'B';

 } else if (this.id == 'buttonC') {

 	answerChosen = 'C';

 } else if (this.id == 'buttonD') {

 	answerChosen = 'D';

 } 

 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {

 	answerCorrect();

 } else if (answerChosen == 'A') {

 	answerWrong();

 }

 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {

 	answerCorrect();

 } else if (answerChosen == 'B') {

 	answerWrong();

 }

if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {

 	answerCorrect();

 } else if (answerChosen == 'C') {

 	answerWrong();

 }

if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {

 	answerCorrect();

 } else if (answerChosen == 'D') {

 	answerWrong();

 }



 $(".question").text('');

 $("#buttonA").text('');

 $("#buttonB").text('');

 $("#buttonC").text('');

 $("#buttonD").text('');

 index++;

 if (index < questionArray.length) {

 	loadQuestion(index);

 } else {

 	$(".answerchoice").hide();

 	showScore();

 }

});





	$('#start').click(countdownTimer.start);

});