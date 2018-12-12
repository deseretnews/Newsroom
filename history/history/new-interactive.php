<?php

// get parameters from arguments
$name = $argv[1];

// create new scss and js files
$file = fopen("src/styles/" . $name . ".scss", "w") or die("Unable to open file!");
fwrite($file, "div.interactive[data-type=\"" . $name . "\"] {}\n@media only screen and (max-device-width: 480px) {div.interactive[data-type=\"" . $name . "\"] {}}");
fclose($file);
$file = fopen("src/scripts/" . $name . ".js", "w") or die("Unable to open file!");
fwrite($file, "export default function " . ucwords($name) . "(container) {\n\tvar R = new Newsroom.rapid;\n\tR.a(container, R.c('h1', 'Loading...'));\n\tcontainer.classList.add('inline');\n\t;Newsroom.ajax(json).then(function (sections) {});\n}");
fclose($file);

// app.js
$string = file_get_contents("src/scripts/app.js");
$string = str_replace("\nwindow.Newsroom", "import " . ucwords($name) . " from './" . $name . ".js';\n\nwindow.Newsroom", $string);
$string = str_replace("else console.warn", "else if (type === '" . $name . "') new " . ucwords($name) . "(interactive);\n\t\t\telse console.warn", $string);
$file = fopen("src/scripts/app.js", "w") or die("Unable to open file!");
fwrite($file, $string);
fclose($file);

// main.scss
$string = file_get_contents("src/styles/main.scss");
$string = $string . "\n@import \"./" . $name . ".scss\";";
$file = fopen("src/styles/main.scss", "w") or die("Unable to open file!");
fwrite($file, $string);
fclose($file);

// example app.js
$string = file_get_contents("examples/app.js");
$string = str_replace("var interactives = {", "var interactives = {\n\t\t" . $name . ": {\n\t\t\ttype: \"" . $name . "\"\n\t\t},", $string);
$file = fopen("examples/app.js", "w") or die("Unable to open file!");
fwrite($file, $string);
fclose($file);

// main app.js
$string = file_get_contents("app.js");
$string = str_replace("var interactives = {", "var interactives = {\n\t" . $name . ": '<div class=\"interactive\" data-type=\"" . $name . "\"></div>',", $string);
$file = fopen("app.js", "w") or die("Unable to open file!");
fwrite($file, $string);
fclose($file);

// index.html
$string = file_get_contents("index.html");
$interactive = file_get_contents("src/templates/interactive-template.html");
$interactive = str_replace("{{capital}}", ucwords($name), $interactive);
$interactive = str_replace("{{lowercase}}", $name, $interactive);
$string = str_replace("<!-- add new interactives below -->", "<!-- add new interactives below -->\n" . $interactive, $string);
$file = fopen("index.html", "w") or die("Unable to open file!");
fwrite($file, $string);
fclose($file);
