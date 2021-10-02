@if($src ?? false)
    <div {!! component_classes("", $classes ?? "") !!}>
        <img src="{!! asset("images/$src") !!}" alt="{{$alt}}">
    </div>
@endif
