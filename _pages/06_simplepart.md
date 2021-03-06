---
layout: nature-scene
title: 
permalink: /simplepart-backup/
---
<style>

    /*************
    ************** 
    Nature Scene ********************************************************************/


    #Eruption, #Sunflare, #Rain, #Raincloud, #Snow, #Spring, #Atlanta {
        visibility: hidden;
    }
    #Home {
        visibility: visible;
    }
    svg {
        max-height:73vh;
        display:block;
        margin:auto;
        pointer-events:all;
    }
    #Water:hover ~ #Fish {
        display:block;
    }
    #Volcano:hover ~ #Eruption, #Eruption:hover {
        display:block;
    }
    #Clouds:hover ~ #Rain, #Rain:hover {
        display:block;
    }
    #Sun:hover ~ #Sunflare, #Sunflare:hover {
        display:block;
    }

    /*************
    ************** 
    Other CSS ********************************************************************/


</style>

<div class="wrapper">
    <div class="box box-nature">
        {% include natureScene.svg %}
    </div>
    <div class="box box-text">
        <div id="me-text" data-slug="Home">
            <p>Company info goes here</p>
            <h2>Dear Recruiter,</h2>
            <p>
                My name is Alex Trautman. I grew up outside of Boston, Massachusetts loving sports and the outdoors. I am a Front-End Developer, a teacher of Math and Computer Science, and a Wilderness Therapy Guide.
            </p>
            <p>
                In 2015 I received my Bachelor's degree in Computer Science from Carleton College in Northfield, MN. While at Carleton I also took many art courses and worked for both the Art and Computer Science departments. I played Ultimate Frisbee and captained our Division 1 team my Senior year. I lived on campus in a food-focused, community-oriented interest house.
            </p>
            <p>
                I am looking for a position as a Front-End Developer. I am really excited to expand my knowledge of web technologies to include data visualization tools and techniques.
            </p>
            <p>
                Let me tell you a quick story...
            </p>
            <br>
        </div>
        <div id="snow-text" data-slug="Snow">
            <br>
            <h2>Minneapolis, Minnesota</h2>
            <h3>2015 - 2016</h3>
            <h4>Full Stack Web Development</h4>
            <p>
                After graduating from school I found a position as a Front-End Developer at a small tech company in Minneapolis, Minnesota. The company is called FourCubed.
            </p>
            <p>
                At FourCubed I had the opportunity to learn an immense amount from a superb supervisor. I either worked independently or with a team of a few other developers. Over the course of the year I worked with and learned about...
            </p>
            <ul>
                <li>MySQL</li>
                <li>Scripting large, weekly database backups to Amazon Web Services with Bash</li>
                <li>Ruby on Rails</li>
                <li>NodeJS</li>
                <li>Github and Version Control</li>
                <li>JavaScript / jQuery</li>
                <li>HTML</li>
                <li>CSS / Sass / Bootstrap</li>
                <li>Static Site Templating</li>
                <li>Content Delivery Networks</li>
                <li>Photoshop</li>
            </ul>
            <p>
                The independence and responsibilities of this year helped me grow immeasurably. I am confident in my ability to accept the limits of my knowledge, and this helps me to rapidly learn new technologies. 
            </p>
            <br>
        </div>
        <div id="mountains-text" data-slug="Eruption">
            <br>
            <h2>Colorado and Vermont</h2>
            <h3>2016 - 2017</h3>
            <h4>Education, Wilderness and Therapy</h4>
            <p>
                From September 2016 - September 2017 I spent around 120 days sleeping outside. I had the opportunity to work with teenagers at the highest and lowest points of their lives. In this period I learned how to prepare lessons and teach. I led my students over glorious Rocky Mountain passes, and I comforted them as they dealt with dehabilitating depression and past trauma.
            </p>
            <p>
                I spent the Fall semester learning the art of teaching through a professional residency in education at the High Mountain Institute in Leadville, CO. I planned trigonometry units and taught advanced algebra. I also co-led three expeditions (totaling around 6 weeks) in which we focused on backcountry skills and leadership techniques.
            </p>
            <p>
                In the Spring I worked as a Wilderness Therapy Guide in Waitsfield, Vermont. My co-leader and I aided students with mental illness and troubled pasts as they worked through a challenging curriculum designed to help them overcome their circumstances. 
            </p>
            <p>
                These experiences directed my growth as an educator and wilderness guide. More than anything they honed my patience and ability to empathize.
            </p>
            <br>
        </div>
        <div id="spring-text" data-slug="Atlanta">
            <br>
            <h2>Atlanta, Georgia</h2>
            <h3>2017 - Present</h3>
            <h4>Start-up, Education, Coffeehouse</h4>
            <p>
                In July I moved to Atlanta with my partner, who is a first year medical student at Emory University. In the Fall I worked developing a startup concept as a Founder in Goodie Nation's Hack the Violence program. My concept won the accolade of "Most Innovative Chat Bot" at one of the program's hackathons.
            </p>
            <p>
                This past winter I taught a sophomore Backend Bootcamp course at The New School of Atlanta. My students built personal websites and learned about the web and the basics of HTML, CSS and JavaScript.
            </p>
            <p>
                I have worked consistently this whole period as a barista at San Francisco Coffee Roasting Company.
            </p>
            <br>
        </div>
        <div id="you-text" data-slug="Spring">
            <br>
            <h2>Simplepart</h2>
            <p>
                I was interested in your company because of x, y, z...
            </p>
            <p>
            Blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah blah 
            </p>
        </div>

    </div>
</div>

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

<script>


// Check if an element lies across the vertical middle of the viewport
$.fn.isMid = function() {
  var elementTop = $(this).offset().top;
  var elementBottom = elementTop + $(this).outerHeight();

  var viewportTop = $(window).scrollTop();
  var viewportMid = viewportTop + $(window).height() / 2;

  return (elementTop <= viewportMid && viewportMid <= elementBottom);
};

$('div.box-text').on('resize scroll', function() {

  // Iterate through menu items
  $('.box-text div').each(function() {
      // Reveal / hide on fixed sidenav
      var slug = $(this).attr('data-slug');
      var sceneSection = "#" + slug;
      if ( $(this).isMid() ) { // This 
        console.log(sceneSection);
        $(sceneSection).css({
            transition : 'visibility 0s, opacity 0.5s linear',
            visibility       : 'visible',
            opacity          : 1
        });
      } else {
        $(sceneSection).css({
            visibility : 'hidden',
            opacity    : 0,
            transition : 'visibility 0s, opacity 0.5s linear'
        });
      }
  });



});
</script>