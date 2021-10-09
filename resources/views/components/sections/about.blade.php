<section class="about" data-barba="container">
    <div class="about__main">

        <h2 class="title _tiny _uppercase _letter-spacing u-text-vertical _section-title">{!! $sections["about"]["title"] !!}</h2>

        <div class="grid">
            <div class="grid__i--4-12 grid__i--5-12@desktop grid__i--12-12@tablet">
                <h2 class="about__title"><span>M</span>atteo <span class="_secondary">De Lorenzi</span></h2>
                @component("components.picture", array_merge($sections["about"]["picture"], ["classes" => "about__picture-mobile"]))@endcomponent
                <div class="text-content _big _max-width">{!! $sections["about"]["content"] !!}</div>
            </div>
            <div class="grid__i--8-12 grid__i--7-12@desktop grid__i--12-12@tablet">
                <div class="about__container">
                    <div class="about__content">
                        @component("components.picture", array_merge($sections["about"]["picture"], ["classes" => "about__picture"]))@endcomponent
                        @component("components.button", [
                            "classes" => "about__button _round _outline _big",
                            "label" => "Send me love",
                            "url" => "#contact"
                        ])@endcomponent
                    </div>
                </div>
            </div>
        </div>

        @component("components.button", [
            "classes" => "about__next",
            "label" => "Latest works",
            "url" => "#projects",
            "icon" => "arrow"
        ])@endcomponent

    </div>
</section>
