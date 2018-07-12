---
layout: page
title: Skills
permalink: /skills/
---
<div class="{{ page.title }}">
    <ul>
        <li>
            <span>
                Experienced and excited <b>frontend web developer</b>
            </span>
        </li>
        <li>
            <span>
                Interest in <b>design</b> and <b>data visualization</b> technologies
            </span>
        </li>
        <li>
            <span>
                Strong <b>interpersonal skills</b> with past experience in the mental health care industry and education
            </span>
        </li>
        <li>
            <span>
                Graduate of Northfield, Minnesota’s <a target="blank" href="https://www.carleton.edu/">
                  Carleton College
                </a> with a Bachelor of Arts in Computer Science.
            </span>
        </li>
    </ul>
{% for location in site.data.skills %}
    <div class="location">
        <h2>{{ location.name }}</h2>
        <h4>{{ location.date }}</h4>
        <p>{{ location.text }}</p>
            <div class="skills-grid">
            {% for topic in location.topics %}
                <!-- Here we hardcode the number of colors in our colorlist as the modulo  -->
                {% assign index = forloop.index | modulo: 4 | plus:1 %}
                <div class="skills-list-item bg-{{ index }}">
                        <h3>{{ topic.name }}</h3>
                        <p>{{ topic.description }}</p>
                </div>
            {% endfor %}
            </div>
    </div>
{% endfor %}
</div>
