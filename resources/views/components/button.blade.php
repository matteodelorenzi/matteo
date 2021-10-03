<?php
$url = $url ?? false;
$label = $label ?? "";
$attr = $attr ?? [];
$icon = $icon ?? false;
?>

@if($url)

    <a {!! component_classes("button", $classes ?? "") !!} {!! component_attributes($attr) !!} href="{{$url}}">
        <span>{!! $label !!}</span>
        @if($icon)
            @component("components.svg.$icon", [
                "classes" => "button__icon"
            ])@endcomponent
        @endif
    </a>

@else

    <button {!! component_classes("button", $classes ?? "") !!} {!! component_attributes($attr) !!}>
        <span>{!! $label !!}</span>
        @if($icon)
            @component("components.svg.$icon", [
                "classes" => "button__icon"
            ])@endcomponent
        @endif
    </button>
@endif
