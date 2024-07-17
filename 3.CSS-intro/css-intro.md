# css

- Cascading style sheets
- Cascading - many rules applying on same element or different elements
- to beautify all our HTML elements.
- helps us to make responsive design.
- one valid styling should end with ;

# 3 ways to apply css

- inline - all elements have special attribute called style, with which we can specify the css properties.
  -- problem - as the properties grow, it will bloat.
- internal - only applicable to a single file or single page.
- external css - a seperate external file, which can be added in any html file.

# selectors

- selectors are mechanism in which we can select bunch of html elements and style them together.
- different ways of selectors
- class. (.)
- id. (#)
- element. (p)
- universal. (\*)
- attribute. (input[disabled])
- there are 4 types of combinators
- descendant, adjancent, genral, next-sibling. ( , >, ~, +)

# Box model

- every element in html is treated as box model.
- each element contains, content , border, padding and margin.
- padding - is inner space (space between content and border).
- margin - is outer space (space between elements).
- border - is a visible square box.
- width - width of the element.
- height - height of the element.

# Block vs inline elements

- Block elements - take 100% of the width, which makes its next element moved to next line.
- inline elements - takes width of the content. not entire 100%
  -- inline elements:
  -- width and height will not work.
  -- padding and margin will work but only horizontal (left and right, margin-top and margin-bottom, will not work).

# box-sizing: content box vs border-box

- In content box, the widh and height of the elements are calculated as follows:
- final element width = left border + left padding + width + right border + right padding.
- final element height = top border + top padding + height + bottom border + bottom padding.
- but if we apply border-box, than only width and height of the element is considered as element width and height.
- add border-box, in universal selector, so all the elements gets inherits that border-box sizding
