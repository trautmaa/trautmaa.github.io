---
layout:    section
title:     "Recent Work"
slug: "projects"
---
<!-- Begin blog block -->

<div class="blog-block">
<div class="grid grid-30-70">
{% for post in site.posts %}
{% if post.publish %}
	<div class="blog-block-grid-item">
		<img src="{{ post.img-src }}">
	</div>
	<div class="blog-block-grid-item">
		<h4>
			{% if post.custom-url %}
			<a class="font-400" href="{{ post.custom-url }}">
			{% else %}
			<a class="font-400" href="{{ post.url | prepend: site.baseurl }}">
			{% endif %}
			{{ post.title }}
			</a>
			<!-- <time class="font-400">{{ post.date | date: "%b %-d, %Y" }}</time> -->
		</h4>
		<p>{{ post.description }}</p>
	</div>
{% endif %}
{% endfor %}
</div>
</div>

<!-- End blog block -->
