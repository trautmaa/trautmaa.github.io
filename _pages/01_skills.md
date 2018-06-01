---
layout: page
title: Skills
permalink: /skills/
---

<div>
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