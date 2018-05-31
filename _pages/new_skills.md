---
layout: page
title: Skills
permalink: /newskills/
---

<div>
{% for location in site.data.skills %}
    <h3>{{ location.name }}</h3>
    <h4>{{ location.date }}</h4>
    <div class="skills-grid">
            <div class="skills-list-item">
                {% for topic in location.topics %}
                <p>{{ topic.name }}</p>
                <p>{{ topic.description }}</p>
                {% endfor %}
            </div>
    </div>
{% endfor %}
</div>