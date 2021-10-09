<section class="project" id="projects">
    <div class="project__main">
        <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $sections["project"]["title"] !!}</h2>
        <div class="grid">
            <div class="grid__i--4-12 grid__i--12-12@tablet project__head">
                <h3 class="title _medium">{!! $sections["project"]["content"] !!}</h3>

                <div class="project__content">
                    <span class="project__category js-project-category">{{$projects[0]["category"]}}</span>
                    <h4 class="title _uppercase _italic _extra-big project__title js-project-title">{{$projects[0]["title"]}}</h4>
                    <div class="u-mt-40 u-flex u-justify-space-between u-align-i-center u-full-width">
                        @component("components.button", [
                            "classes" => "_outline _small js-project-url",
                            "url" => $projects[0]["url"],
                            "label" => "See the project",
                        ])@endcomponent
                        <button class="project__next js-project-next" data-index="0">
                            <span>Next</span>
                            <div>
                                @component("components.svg.arrow", [
                                    "classes" => ""
                                ])@endcomponent
                            </div>
                        </button>
                    </div>
                </div>
            </div>
            <div class="grid__i--8-12 grid__i--12-12@tablet">
                <ul class="project__list">
                    @foreach($projects as $index => $project)
                        <li class="project__item js-project-observer-item" data-project="{{json_encode(array_merge($project, ["index" => $index]))}}">
                            <a href="{{ $project["url"] }}">
                                @component("components.picture", array_merge($project["pictures"][0], ["classes" => "project__picture"]))@endcomponent
                                <span class="project__index">0{{ $index + 1 }}</span>
                            </a>
                        </li>
                    @endforeach
                </ul>
            </div>
        </div>
    </div>
</section>
