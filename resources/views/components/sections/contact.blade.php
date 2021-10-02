<section class="contact" id="contact">
    <div class="contact__main">
        <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $sections["contact"]["title"] !!}</h2>
        <h3 class="title _medium contact__content">{!! $sections["contact"]["content"] !!}</h3>

        <div class="grid">
            <div class="grid__i--8-12 grid__i--12-12@tablet">
                <div class="contact__links">
                    @component("components.svg.arrow", [
                        "classes" => "contact__arrow"
                    ])@endcomponent
                    <ul class="contact__list">
                        <li class="contact__item">
                            <a class="contact__link" target="_blank"
                               href="mailto:{!! $contact["mail"]["url"] !!}">{!! $contact["mail"]["label"] !!}</a>
                        </li>
                        @foreach($socials as $social)
                            <li class="contact__item">
                                <a class="contact__link" target="_blank"
                                   href="{!! $social["url"] !!}">{!! $social["label"] !!}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </div>
    </div>
</section>
