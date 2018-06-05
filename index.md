---
layout: default
---

I am a front-end developer excited about data visualization looking to use existing technologies to improve lives.

Most recently I have been building a website for actor [Adam Shaukat](https://trautmaa.github.io/shaukat/) and exploring animation with [regl](http://regl.party/). You can see more coding projects on my [Github](https://github.com/trautmaa).

In Winter of 2018 I taught the Backend Programming Bootcamp at [The New School of Atlanta](https://tnsatlanta.org/). You can see the sites students made here (link coming soon).

<!-- Thank you to [Tania Rascia](https://www.taniarascia.com/) for her excellent blog. Thanks also to [Joseph R. Tomelleri](http://www.americanfishes.com/), whose drawings I referenced in creating the trout logo. -->

<!-- Begin blog block -->

<div class="blog-block">
<h3>Latest Blog Post:</h3>
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
</div>

<!-- End blog block -->
