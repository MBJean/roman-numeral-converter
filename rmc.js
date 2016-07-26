$(document).ready(function(){
  $('#submit').click(convert);
  $('#searchbox').keypress(function (e) {
    if (e.which == 13) {
      convert();
    }
  });
  $('#delete').click(deleteFunction);
});

function convert() {
 var num = $("#searchbox").val().replace(',', '');
  if (isNaN(num) === true) {
    var html = "<div class='article'>" + num + " is not a number!</div>";
    $("#articles").html(html);
  } else {
    var test = num;
    var numeral = [];
    if (test / 1000 >= 1) {
      var placeholder1000 = [];
      for (i = 1; i <= test / 1000; i++) {
        placeholder1000.push("M");
      }
      numeral.push(placeholder1000.join(""));
      test = test - (Math.floor(test / 1000) * 1000);
    }
    if (test / 100 >= 1) {
      var placeholder100 = [];
      for (i = 1; i <= test / 100; i++) {
        placeholder100.push("C");
      }
      numeral.push(placeholder100.join(""));
      test = test - (Math.floor(test / 100) * 100);
    }
    if (test / 10 >= 1) {
      var placeholder10 = [];
      for (i = 1; i <= test / 10; i++) {
        placeholder10.push("X");
      }
      numeral.push(placeholder10.join(""));
      test = test - (Math.floor(test / 10) * 10);
    }
    if (test > 0) {
      var placeholder1 = [];
      for (i = 1; i <= test; i++) {
        placeholder1.push("I");
      }
      numeral.push(placeholder1.join(""));
    }
    num = numeral.join("").replace(/CCCCC/g, "D").replace(/DD/g, "M").replace(/DCCCC/g, "CM").replace(/CCCC/g, "CD").replace(/XXXXX/g, "L").replace(/LL/g, "C").replace(/XXXX/g, "XL").replace(/LXL/g, "XC").replace(/IIIII/g, "V").replace(/VV/g, "X").replace(/IIII/g, "IV").replace(/VIV/g, "IX");
    var html = "<div class='article'>" + num + "</div>";
    $("#articles").html(html);
  }
}

var deleteFunction = function() {
  $("#searchbox").val("");
  $("#articles").empty();  
};
