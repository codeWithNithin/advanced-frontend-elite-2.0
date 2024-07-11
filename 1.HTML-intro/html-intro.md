# HTML

- Hyper Text markup language.
- Not a programming language.
- proramming lang -> decision making.
- structure of the web page.
- mark down language is also like markup lang, which helps us write documents in other way using #
- HTML is used to describe and to structure the content of a webpage.

## markup

- a medium of writing and formatting text documents.

## hyper text

- special type of text document in which we can add hyper links, of another document
- google def: a text that contain links to other texts

## note: we will not be able to link document in google docs.

## HTML tags

- it is not recommended to write plan text in HTML doc, as it is not the building block.
- building block of any HTML document, are called as tags.
- it consists of elements that describe different types of content:
  -- paragraphs, links, heading, images, videos, etc.
- Web browsers understand HTML and render HTML code as websites.

# Setup first HTML file, HTML tags, self closing tags

- code editor: VS code
- what is the use of extension (ex: .js, .html)
- it just tell the OS, what is the meaning of this file, which software is compatible to open, what might be the content inside this file.

# create a HTML file

- extension will be .html
- file name is given as index.
- plain text is not the recomended way. as it is not a builiding block of HTML docs.
- building block of any HTML document, are called as tags

# tags

- a simple mechanism using which we can tell, what is this part of doc. actually meaning.
- format
- <tagname> content </tagname>
- <tagname> -> opening tag
- </tagname> -> closing tag
- in between opening and closing tag we keep some info or also known as content.
  -- format
  -- <tagname> content </tagname>
- few tags called as self closing tags, they dont need a seperate closing tag.
  -- format
  -- <tagname />
- here opening and closing is managed by the same tag.

# some HTML tags

- Heading (h1, h2, h3, h4, h5, h6)
- h1 -> helps write heading in boldest and with font size.
- h2 -> helps write heading with bit small heading that h1.
- Paragraph (p) - when we have some normal piece of information, which is not really highlighted.
- list items (ol, ul)
- ol -> ordered list
  -- output:
  -- 1. HTML
  -- 2. CSS
  -- 3. JS
  -- 4. REACT
- unordered list
  -- output:
  -- . HTML
  -- . CSS
  -- . JS
  -- . REACT
- li -> list item.

# to check the HTML doc

- in file browser, go to that index.html and click on it to open it on browser.

## VS Code, helps you autocomplete the tags.

# Documents can beformed in any way. -> order of elements or tags doesnt matter.

# Browser dev tools and elements tab

- we can see the actual html tags.

# emmet - plugin that helps you write faster HTML

# images and accessbility - img tag with src and alt

- <img /> - used to display image.
  -- attributes: extra information about tags.
  -- src -> accepts the path of theat image, where it is been located.
  -- alt -> alternate text to be displayed when the image is not loading, also it helps screen readers to dictate, for visibly disabled.

# img is not the only way to add image, we can also use CSS and JS.

# inline and block tag - div and span

- block tag - a tag, which places its next tag's content in new line.
  -- div - a general container.
- span - a tag, which keeps its next tag in line with it self.

# video and Audio - we can check in mdn docs

# marque and comment

- comments are added like <!-- comment -->.
- short cut in vs code - ctrl + /.

# note: always google the tags and check for mdn doc.

# input tag

- attributes:
- type: type of input, its value can be: text, checkbox, button, color, datetime, radio, number, email.
- value: this is the value,that the input box contains, will be prepopulated inside text box. if type is button, then value will be button text.
- name: this is used to pass as field for backend, on form submission.
- id: using this id, we can do multiple things
  -- 1. we can take the referene of it in JS
  -- 2. we can use it, to attach the value of id with label tag's for attr. that will then work programmatically.
- when type is radio, we have to set the name of the checkbox as common for n no. of radio buttons, and value for individuals.

  # DOCTYPE

  - it signals browser, that it accepts an HTML version 5 document

# semantic HTML

- we will write tags according to context.
- its not necessary to put div everywhere.
- serves the purpose to tell exactly what is the context of the data.
- adding meaningful tags to document.
- whenever someone reads the html raw code, they will be able to actually understand the coding implementation.
- it helps improve readability and maintainablity, because code is properly distinguished.
- for better seo.
- for acessibility,alt property in img tag helps screen readers, to actually understand, what actually image is representing...
- its not recomendation, its neccissity.
- also refers to meaning of piece of code.
