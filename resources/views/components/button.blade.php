<?php
$url = $url ?? false;
$label = $label ?? "";
$attr = $attr ?? [];
?>

@if($url)

    <a {!! component_classes("button", $classes ?? "") !!} {!! component_attributes($attr) !!} href="{{$url}}">
        <span>{!! $label !!}</span>
        @yield("icon")
    </a>

@else

    <button {!! component_classes("button", $classes ?? "") !!} {!! component_attributes($attr) !!}>
        <span>{!! $label !!}</span>
        @yield("icon")
    </button>
@endif
