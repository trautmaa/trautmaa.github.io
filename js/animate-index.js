$(window).scroll(function() {
    var background = $('#background').offset().top,
        skills = $('#skills').offset().top,
        projects = $('#projects').offset().top,
        experience = $('#experience').offset().top,
        wH = $(window).height(),
        wS = $(this).scrollTop() + $(window).height();
    var $background = $('#background'),
        $skills = $('#skills'),
        $projects = $('#projects'),
        $experience = $('#experience');
        if ( (wS > (background)) && !$background.data( "vis") ){
            TweenLite.from($background, 1.5,{autoAlpha:0});
            $background.data( "vis", true );
        }
        if ( (wS > (skills)) && !$skills.data( "vis") ){
            TweenLite.from($skills, 1.5,{autoAlpha:0});
            $skills.data( "vis", true );
        }
        if ( (wS > (projects)) && !$projects.data( "vis") ){
            TweenLite.from($projects, 1.5,{autoAlpha:0});
            $projects.data( "vis", true );
        }
        if ( (wS > (experience)) && !$experience.data( "vis") ){
            TweenLite.from($experience, 1.5,{autoAlpha:0});
            $experience.data( "vis", true );
        }
});
// TweenLite.from($("#background"), 0.5,{autoAlpha:0});