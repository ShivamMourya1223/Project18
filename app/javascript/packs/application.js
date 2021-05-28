// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"
import "bootstrap"
require("jquery")



$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();   
});

// MDB Lightbox Init
$(function () {
$("#mdb-lightbox-ui").load("mdb-addons/mdb-lightbox-ui.html");
});




$(document).ready(function(){
  $("button").click(function(){
    $("#test").hide();
  });
});


$(document).ready(function(){
  $("#p1").mouseenter(function(){
    alert("You entered p1!");
  });
});

$(document).ready(function(){
  $("#hide").click(function(){
    $("p").hide();
  });
  $("#show").click(function(){
    $("p").show();
  });
});

$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});

$(document).ready(function(){
  $("button").click(function(){
    $("#div1").load("data.txt");
  });
});



Rails.start()
Turbolinks.start()
ActiveStorage.start()
