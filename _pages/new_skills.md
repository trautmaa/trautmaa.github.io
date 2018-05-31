---
layout: page
title: Skills
permalink: /newskills/
---

<div>
{% for location in site.data.skills %}
    <div class="location">
        <h3>{{ location.name }}</h3>
        <h4>{{ location.date }}</h4>
            <div class="skills-grid">
            {% for topic in location.topics %}
                <!-- Here we hardcode the number of colors in our colorlist as the modulo  -->
                {% assign index = forloop.index | modulo: 4 | plus:1 %} 
                <div class="skills-list-item bg-{{ index }}">
                        <p>{{ topic.name }}</p>
                        <p>{{ topic.description }}</p>
                </div>
            {% endfor %}
            </div>
    </div>
{% endfor %}
</div>