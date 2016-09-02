$(document).ready(function(){

  // var tmpl = document.getElementById('comment-template');
  // document.body.appendChild(tmpl.content.cloneNode(true));


  function setQuestions(){
    var question_list = ["How much do you like radio buttons?", "What is your favorite number?", "What is 2 x 3?", "What is the meaning of life?", "What?"]


    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      while (0 !== currentIndex) {

        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }

    return(shuffle(question_list));

  }



  $('#awesome_img').click(function(){
    randomized_questions = setQuestions()
    var q1 = randomized_questions[0]
    var q2 = randomized_questions[1]
    var q3 = randomized_questions[2]
    var q4 = randomized_questions[3]
    var q5 = randomized_questions[4]

    document.getElementById('q1').innerHTML = q1
    document.getElementById('q2').innerHTML = q2
    document.getElementById('q3').innerHTML = q3
    document.getElementById('q4').innerHTML = q4
    document.getElementById('q5').innerHTML = q5
    var text = "Awesome"
    $( "#main_container" ).hide();
    $( "#main_container_1" ).show();
    document.getElementById('header_img').src='../images/awesome.png';
    document.getElementById('title_text').innerHTML = text
  });

  $('#great_img').click(function(){
    randomized_questions = setQuestions()
    var q1 = randomized_questions[0]
    var q2 = randomized_questions[1]
    var q3 = randomized_questions[2]
    var q4 = randomized_questions[3]
    var q5 = randomized_questions[4]

    document.getElementById('q1').innerHTML = q1
    document.getElementById('q2').innerHTML = q2
    document.getElementById('q3').innerHTML = q3
    document.getElementById('q4').innerHTML = q4
    document.getElementById('q5').innerHTML = q5

    var text = "Great"
    $( "#main_container" ).hide();
    $( "#main_container_1" ).show();
    document.getElementById('header_img').src='../images/great.png';
    document.getElementById('title_text').innerHTML = text
  });

  $('#ok_img').click(function(){
    randomized_questions = setQuestions()
    var q1 = randomized_questions[0]
    var q2 = randomized_questions[1]
    var q3 = randomized_questions[2]
    var q4 = randomized_questions[3]
    var q5 = randomized_questions[4]

    document.getElementById('q1').innerHTML = q1
    document.getElementById('q2').innerHTML = q2
    document.getElementById('q3').innerHTML = q3
    document.getElementById('q4').innerHTML = q4
    document.getElementById('q5').innerHTML = q5

    var text = "Ok"
    $( "#main_container" ).hide();
    $( "#main_container_1" ).show();
    document.getElementById('header_img').src='../images/ok.png';
    document.getElementById('title_text').innerHTML = text
  });

  $('#mmmmh_img').click(function(){
    randomized_questions = setQuestions()
    var q1 = randomized_questions[0]
    var q2 = randomized_questions[1]
    var q3 = randomized_questions[2]
    var q4 = randomized_questions[3]
    var q5 = randomized_questions[4]

    document.getElementById('q1').innerHTML = q1
    document.getElementById('q2').innerHTML = q2
    document.getElementById('q3').innerHTML = q3
    document.getElementById('q4').innerHTML = q4
    document.getElementById('q5').innerHTML = q5


    var text = "Mmmh"
    $( "#main_container" ).hide();
    $( "#main_container_1" ).show();
    document.getElementById('header_img').src='../images/mmmmh.png';
    document.getElementById('title_text').innerHTML = text
  });

  $('#oops_img').click(function(){
    randomized_questions = setQuestions()
    var q1 = randomized_questions[0]
    var q2 = randomized_questions[1]
    var q3 = randomized_questions[2]
    var q4 = randomized_questions[3]
    var q5 = randomized_questions[4]

    document.getElementById('q1').innerHTML = q1
    document.getElementById('q2').innerHTML = q2
    document.getElementById('q3').innerHTML = q3
    document.getElementById('q4').innerHTML = q4
    document.getElementById('q5').innerHTML = q5

    var text = "Oops"
    $( "#main_container" ).hide();
    $( "#main_container_1" ).show();
    document.getElementById('header_img').src='../images/oops.png';
    document.getElementById('title_text').innerHTML = text
  });

  $('#logo').click(function(){
    window.open('mailto:test@butterfly.com?subject=I have a problem&body=help!');
    $( "#main_container" ).show();
    // $( "#main_container_1" ).hide();
    $("#main_container_1").css("display", "none");
  });

  $('#edit_img').click(function(){
    $( "#main_container" ).show();
    // $( "#main_container_1" ).hide();
    $("#main_container_1").css("display", "none");
  });

  $('#great_img').click(function(){

  });

  $('.q1_text').click(function(){
    $( "#q1_text_box" ).show();
  });

  $('.q1_no_text').click(function(){
    $( "#q1_text_box" ).hide();
  });

  $('.q2_text').click(function(){
    $( "#q2_text_box" ).show();
  });

  $('.q2_no_text').click(function(){
    $( "#q2_text_box" ).hide();
  });

  $('.q3_text').click(function(){
    $( "#q3_text_box" ).show();
  });

  $('.q3_no_text').click(function(){
    $( "#q3_text_box" ).hide();
  });

  $('.q4_text').click(function(){
    $( "#q4_text_box" ).show();
  });

  $('.q4_no_text').click(function(){
    $( "#q4_text_box" ).hide();
  });

  $('.q5_text').click(function(){
    $( "#q5_text_box" ).show();
  });

  $('.q5_no_text').click(function(){
    $( "#q5_text_box" ).hide();
  });

  // $('.testClass').click(function(){
  //   $( "#q5_text_box" ).show();
  // });


function isOneChecked ( name ) {

    var checkboxes = document.getElementsByName( name ),
        i = checkboxes.length - 1;

    for ( ; i > -1 ; i-- ) {

        if ( checkboxes[i].checked ) { return true; }

    }

    return false;
}


function areAllChecked(){
  if (isOneChecked("optradio") && isOneChecked("optradio_2") && isOneChecked("optradio_3") && isOneChecked("optradio_4") && isOneChecked("optradio_5")){
    return true
  }
}


  $('#submit_button').click(function(){
    if(areAllChecked()){
      alert('thanks for submitting your results')
    }else{
      alert('It looks like you missed a question')
    }
  });


});

