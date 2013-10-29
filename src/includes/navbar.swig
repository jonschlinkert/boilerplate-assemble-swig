<header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
  <div class="container">
    <div class="navbar-header">
      <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a href="{{site.root}}" class="navbar-brand">Assemble</a>
    </div>
    <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
      <ul class="nav navbar-nav">
        <li{% if basename == "extend" %} class="active"{% endif %}>
          <a href="{{site.root}}extend.html">Extend</a>
        </li>
        <li{% if basename == "autoescape" %} class="active"{% endif %}>
          <a href="{{site.root}}autoescape.html">Autoescape</a>
        </li>
        <li{% if basename == "condense" %} class="active"{% endif %}>
          <a href="{{site.root}}condense.html">Condense</a>
        </li>
        <li{% if basename == "filters" %} class="active"{% endif %}>
          <a href="{{site.root}}filters.html">Filters</a>
        </li>
        <li{% if basename == "js" %} class="active"{% endif %}>
          <a href="{{site.root}}javascript.html">JavaScript</a>
        </li>
        <li{% if basename == "customize" %} class="active"{% endif %}>
          <a href="{{site.root}}customize.html">Customize</a>
        </li>
      </ul>
      <ul class="nav navbar-nav navbar-right">
        <li{% if basename == "about" %} class="active"{% endif %}>
          <a href="{{site.root}}about.html">About</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
