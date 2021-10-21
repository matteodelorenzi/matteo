@if($src ?? false)
    <div {!! component_classes("slide-js", $classes ?? "") !!}>
        <img src="{!! asset("images/$src") !!}" alt="{{$alt}}">
    </div>
@endif
