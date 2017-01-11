$('#submit').click(converterController);
$('#searchbox').keypress( function(e) {
  if (e.which == 13) {
    converterController();
  }
});
$('#delete').click( a => {
  $("#searchbox").val("");
  $("#articles").empty();  
});

function converterController() {
  let num = $("#searchbox").val().replace(",", "");
  let convertedNum = converter(num);
  let html = num > 0 && num < 5000 ? convertedNum: "Please input a valid number.";
  $("#articles").html("<div class='article'>" + html + "</div>");
}

function converter(number) {
  let output = "", str = number.toString();
  for (let i = 0; i < parseInt(str[str.length - 4]); i++) { output += "M"; }
  for (let i = 0; i < parseInt(str[str.length - 3]); i++) { output += "C"; }
  for (let i = 0; i < parseInt(str[str.length - 2]); i++) { output += "X"; }
  for (let i = 0; i < parseInt(str[str.length - 1]); i++) { output += "I"; }
  return output.replace(/CCCCCCCCC/g, "CM").replace(/CCCCC/g, "D").replace(/CCCC/g, "CD").replace(/XXXXXXXXX/g, "XC").replace(/XXXXX/g, "L").replace(/XXXX/g, "XL").replace(/IIIIIIIII/g, "IX").replace(/IIIII/g, "V").replace(/IIII/g, "IV");
}