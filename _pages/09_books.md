---
layout: blank
title: Books
permalink: /books/
---
{% for year in site.data.books %}
<h1>{{ year.year }}</h1>
{% for book in year.books %}
<section class="media book showcase" data-isbn="{{ book.isbn }}">
  <header>
    <h3 class="title"></h3>
    <h4 class="author"></h4>
    <p>{{ book.isbn }}</p>
  </header>
  <img src="" alt="" class="thumbnail" />  
</section>
{% endfor %}
{% endfor %}

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
<script src="/js/books.js"></script>
