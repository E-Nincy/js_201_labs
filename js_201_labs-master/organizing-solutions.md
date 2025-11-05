# Organizing Your Solutions

For many of the exercises, you'll need to create corresponding HTML files so that the solutions can be loaded in a live server.

For example, here is an example chapter folder that has three files:

```text

labs
├ 99_example_labs
│ ├ process data.md
│ ├ create table.md
│ └ special methods.md
│
...

```

You'll generally only need to create one sandbox per chapter:

```diff

  labs
  ├ 99_example_labs
  │ ├ process data.md
  │ ├ create table.md
  │ ├ special methods.md
+ │ └ solutions
+ │   ├ solutions.html
+ │   └ script.js
  │
  ...

```

Though in some cases, you may be asked to create more sandboxes so you could end up with many sandboxes per chapter:

```diff

  labs
  ├ 99_example_labs
  │ ├ process data.md
+ │ ├ process data
+ │ │ ├ process_data.html
+ │ │ └ script.js
  │ ├ create table.md
+ │ ├ create table
+ │ │ ├ create_table.html
+ │ │ └ script.js
  │ ├ special methods.md
+ │ ├ special methods
+ │ │ ├ special_methods.html
+ │ │ └ script.js
  |
  ...

```

You will generally be told when you need to break out into new sandboxes, but don't be shy about it. Sandboxes are cheap and disposable, treat them as such. By default, you should start a `solutions` sandbox in each chapter.

If you have a few, keep things organized by keeping an `index.html` file at the top level with links to all your sandboxes:

```diff

  00_SAMPLE
  ├ 01 - exercises
+ | ├ index.html
  │ ├ process data.md
  │ ├ process data
  │ │ ├ index.html
  │ │ └ script.js
  │ ├ create table.md
  │ ├ create table
  │ │ ├ index.html
  │ │ └ script.js
  │ ├ special methods.md
  │ ├ special methods
  │ │ ├ index.html
  │ │ └ script.js
  │ ├ mini project
  │ │ ├ index.html
  │ │ └ script.js
  │ └ chapter exercises
  │   ├ index.html
  │   └ script.js
  |
  ...

```

The top level index file can then be populated with links, the `href` attribute can point to the folder, if the folder has a `index.html` file:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <!-- ... -->
  </head>

  <body>
    <a href="process data">Process Data</a>
    <a href="create table">Create Table</a>
    <a href="special methods">Special Methods</a>
    <a href="mini project">Mini Project</a>
    <a href="chapter exercises">Chapter Exercises</a>
  </body>
</html>
```

Within each sandbox, you can optionally use the HTML to present the results of the labs, along with the console outputs.
