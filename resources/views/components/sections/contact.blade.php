<section class="contact">
    <div class="contact__main">
        <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $sections["contact"]["title"] !!}</h2>
        <h3 class="title _medium contact__content">{!! $sections["contact"]["content"] !!}</h3>

        <div class="contact__links">
            <svg class="contact__arrow" viewBox="0 0 64 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M63.0002 32.4998L39.7055 55.7946M63.0002 32.4998L39.7054 9.20504M63.0002 32.4998L1 32.5"/>
            </svg>
            <ul class="contact__list">
                <li class="contact__item">
                    <a class="contact__link" target="_blank" href="mailto:{!! $contact["mail"]["url"] !!}">{!! $contact["mail"]["label"] !!}</a>
                </li>
                @foreach($socials as $social)
                    <li class="contact__item">
                        <a class="contact__link" target="_blank" href="{!! $social["url"] !!}">{!! $social["label"] !!}</a>
                    </li>
                @endforeach
            </ul>
        </div>
    </div>
</section>
