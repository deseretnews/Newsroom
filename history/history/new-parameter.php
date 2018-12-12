<?php
$name = $argv[1];
$parameter = $argv[2];
$value = $argv[3];

function replace($url, $replace, $append)
{
    $content = file_get_contents($url);
    $string = str_replace($replace, $replace . $append, $content);
    $file = fopen($url, "w") or die("Unable to open file!");
    fwrite($file, $string);
    fclose($file);
}

replace("src/scripts/app.js", "new " . ucwords($name) . "(interactive", ", Newsroom.parameter(interactive, '" . $parameter . "')");
replace("app.js", "data-type=\"" . $name . "\"", " data-" . $parameter . "=\"#\"");
replace("examples/app.js", "type: \"" . $name . "\"", ",\n\t\t\t" . $parameter . ": \"" . $value . "\"");
replace("src/scripts/" . $name . ".js", ucwords($name) . "(container", ", " . $parameter);
