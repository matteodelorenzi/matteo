<section class="project" id="projects">
    <div class="project__main">
        <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $sections["project"]["title"] !!}</h2>
        <div class="grid">
            <div class="grid__i--4-12 grid__i--12-12@tablet project__head">
                <h3 class="title _medium">{!! $sections["project"]["content"] !!}</h3>

                <div class="project__content">
                    <h4 class="title _uppercase _italic _extra-big project__title js-project-title">{{$projects[0]["title"]}}</h4>
                    <div class="u-mt-40">
                        @component("components.button", [
                            "classes" => "_outline _small js-project-url",
                            "url" => "",
                            "label" => "See the project",
                        ])@endcomponent
                        <button>
                            <span>Next</span>
                            <span>
                                @component("components.svg.arrow", [
                                    "classes" => ""
                                ])@endcomponent
                            </span>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid__i--8-12 grid__i--12-12@tablet">
                <ul class="project__list">
                    @foreach($projects as $index => $project)
                        <li class="project__item js-project-observer-item" data-project="{{json_encode($project)}}">
                            @component("components.picture", array_merge($project["pictures"][0], ["classes" => "project__picture"]))@endcomponent
                            <span class="project__index">0{{ $index + 1 }}</span>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>
