$(document).ready(function() {



var timer = 120
var correct = 0
var incorrect = 0
var unanswered = 0

// This all works, just need to make the clock start when you hit Start
$("#start").show()
$("#quiz").hide()
$("#finish").hide()

$("#begin").on("click", function() {
    $("#quiz").show()
    $("#start").hide()
    interval;
    timer = 120
})
// The above works

// Working timer
var interval = setInterval(function() {
    timer--;
    $("#timer").text("Time Remaining: " + timer);
    if (timer === 0) clearInterval(interval);
    // if (timer == 0) alert("Time's up!")
    if (timer === 0) {
        $("#quiz").hide()
        $("#finish").show()

    }
}, 1000);
// Working timer

// I can at least console log the right answer
    $('.correct').change(function(){
      if($(this).is(':checked')){
          console.log("right");
      }
    });   
   
    $(".incorrect").change(function(){
        if ($(this).is(":checked")){
            console.log("nope")
        }
    })





      
    


// Q&A data
questions = {
    q1: "Which Twin Cities band scored the one-hit wonder 'Surfin' Bird?'",
    q2: "Who was the original drummer for The Replacements?",
    q3: "Sean Tillmann also performed under what moniker, besides Har Mar Superstar?",
    q4: "Craig Finn fronted which band before The Hold Steady?",
    q5: "In what Minnesota city was Bob Dylan born?",
    q6: "Prince's album Purple Rain was recorded live at which Minneapolis landmark?",
    q7: "Tony Zaccardi just purchased which long-standing Twin Cities dive bar?",
    q8: "Which local 90's band took their name from the movie 'It's A Wonderful Life?'?",
    q9: "What is the name of Morris Day's valet?",
    q10: "A new local hip hop group is named after which comic book villain?"
};

options = {
    q1: ["Husker Du", "The Time", "The Trashmen", "Lizzo"],
    q2: ["Chris Mars", "Ringo Starr", "Bob Mould","John Blackwell Jr."],
    q3: ["Night Moves", "The Horrors", "The Suburbs", "Sean Na Na"],
    q4: ["Lftr Pllr", "The Revolution", "Cut Copy", "Koo Koo Kangaroo"],
    q5: ["Hibbing", "St. Paul", "Duluth", "Ely"],
    q6: ["The Metrodome", "First Avenue", "The Mall of America", "The Turf Club"],
    q7: ["Palmer's", "Grumpy's", "The Triple Rock", "Vegas Lounge"],
    q8: ["Soul Asylum", "Babes In Toyland", "Zuzu's Petals", "Dillinger Four"],
    q9: ["Bobby Stinson", "Jerome Benton", "Dan Wilson", "Lori Barbero"],
    q10: ["The Joker", "Shredder", "Kingpin", "Lex Luthor"]
}

answers = {
    q1: "The Trashmen",
    q2: "Chris Mars",
    q3: "Sean Na Na",
    q4: "Lftr Pllr",
    q5: "Duluth",
    q6: "First Avenue",
    q7: "Palmer's",
    q8: "Zuzu's Petals",
    q9: "Jerome Benton",
    q10: "Shredder"
}

// Q&A data

});