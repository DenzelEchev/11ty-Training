---
layout: layouts/pages-layout.njk
title: Post Page
---

# Hello

<ul>
{% for page in collections.pages %}
<li><a href="{{page.url}}">{{page.data.title}}</a></li>
{% endfor %}
</ul>

<a href="">Back to the Home Page</a>
