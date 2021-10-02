<?php

function component_attributes(array $attributes  = []): string
{
    $str = "";
    foreach ($attributes as $name => $value) {
        if ($value !== null) {
            $str .= $name . '="' . $value . '" ';
        }
    }

    return trim($str);
}

function component_classes(string $initial_classes, string $extra_classes): string
{
    $classes_str = "";
    if (is_string($initial_classes)) {
        $classes_str = $initial_classes;
    } else {
        if (is_array($initial_classes)) {
            $classes_str = implode(" ", $initial_classes);
        }
    }
    if (isset($extra_classes) && is_string($extra_classes)) {
        $classes_str .= " " . $extra_classes;
    } else {
        if (isset($extra_classes) && is_array($extra_classes)) {
            $classes_str .= " " . implode(" ", $extra_classes);
        }
    }
    $classes_str = trim($classes_str);

    return "class='$classes_str'";
}
