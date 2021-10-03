<section class="single">
    <div class="single__main">

        <div class="single__head">
            <a class="single__close" href="{{url("/")}}">
                <span>Back</span>
                <div>
                    @component("components.svg.close", [
                        "classes" => ""
                    ])@endcomponent
                </div>
            </a>
            <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $category !!}</h2>
        </div>

        <h1 class="title _extra-big _italic">{!! $title !!}</h1>
        <div class="text-content _max-width _big u-mt-140">{!! $content !!}</div>

        <div class="grid">
            <div class="grid__i--8-12 grid__i--12-12@tablet">
                <ul class="single__list">
                    @foreach($pictures as $picture)
                        <li class="single__item">
                            <div class="single__block">
                                @component("components.picture", array_merge($picture, [
                                    "classes" => "single__picture"
                                ]))@endcomponent
                                @if($picture["legend"])
                                    <span class="legend">{!! $picture["legend"] !!}</span>
                                @endif
                            </div>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>
