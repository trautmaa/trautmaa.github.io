


var $background = $('#background'),
    $skills = $('#skills'),
    $projects = $('#projects'),
    $experience = $('#experience');
var background = $('#background').offset().top,
    skills = $('#skills').offset().top,
    projects = $('#projects').offset().top,
    experience = $('#experience').offset().top;


// Prevent flash - this would happen if user was already viewing a section and refreshed
// the page
// Check if user is looking at a section and make it fully visible
var windowBottom = $(this).scrollTop() + $(window).height();

// If windowBottom is below background section on page load, mark it and above as visited
if ( windowBottom > (background) ){
    $background.data( "vis", true );
}

// If windowBottom is below skills section on page load, mark it and above as visited
if ( windowBottom > (skills) ){
    $skills.data( "vis", true );
    $background.data( "vis", true );
}

// If windowBottom is below projects section on page load, mark it and above as visited
if ( windowBottom > (projects) ){
    $projects.data( "vis", true );
    $skills.data( "vis", true );
    $background.data( "vis", true );
}

// If windowBottom is below experience section on page load, mark it and above as visited
if ( windowBottom > (experience) ){
    $experience.data( "vis", true );
    $projects.data( "vis", true );
    $skills.data( "vis", true );
    $background.data( "vis", true );
}



// Make sections fadein on scroll
$(window).scroll(function() {
        var windowBottom = $(this).scrollTop() + $(window).height();

        // If windowBottom is below background section and has yet to animate
        if ( (windowBottom > (background)) && !$background.data( "vis") ){
            TweenLite.from($background, 1,{autoAlpha:0});
            $background.data( "vis", true );
        }

        // If windowBottom is below skills section and has yet to animate
        if ( (windowBottom > (skills)) && !$skills.data( "vis") ){
            TweenLite.from($skills, 1,{autoAlpha:0});
            $skills.data( "vis", true );
            $background.data( "vis", true );
        }

        // If windowBottom is below projects section and has yet to animate
        if ( (windowBottom > (projects)) && !$projects.data( "vis") ){
            TweenLite.from($projects, 1,{autoAlpha:0});
            $projects.data( "vis", true );
            $skills.data( "vis", true );
            $background.data( "vis", true );
        }

        // If windowBottom is below experience section and has yet to animate
        if ( (windowBottom > (experience)) && !$experience.data( "vis") ){
            TweenLite.from($experience, 1,{autoAlpha:0});
            $experience.data( "vis", true );
            $projects.data( "vis", true );
            $skills.data( "vis", true );
            $background.data( "vis", true );
        }
});

