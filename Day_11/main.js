var year = document.getElementById("year");
document.write("<select>");
for (i = 1905; i <= 2025; i++) {
  document.write("<option>" + i + "</option>");
}
document.write("</select>");

var Days = document.getElementById("Days");
document.write("<select>");
for (i = 1; i <= 31; i++) {
  document.write("<option>" + i + "</option>");
}
document.write("</select>");
