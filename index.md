---
layout: home
---
<!-- Header Gets Inserted Here -->


<!-- Begin Home Page Sections -->

{% for section in site.sections %}
{{ section }}
{% endfor %}



<!-- End Home Page Sections -->



<!-- Begin blog block -->

<!-- <div class="blog-block">
<h3>Latest Project:</h3>
<div class="grid">
{% for post in site.posts %}
{% if post.publish %}
	{% if post.img-src %}
	<div class="blog-block-grid-item">
		<img src="{{ post.img-src}}">
	</div>
	{% endif %}	
	<div class="blog-block-grid-item">
		<h4>
			<a href="{{ post.url | prepend: site.baseurl }}">
			{{ post.title }}
			</a>
			- 
			<time>{{ post.date | date: "%b %-d, %Y" }}</time>
		</h4>
		<p>{{ post.description }}</p>
	</div>
</div>
{% break %}
{% endif %}
{% endfor %}
</div> -->

<!-- End blog block -->

