/* While manipulating the elements in DOM
we traverse through the related elements of our targeted elements in the DOM
We already know how to target element by their query , ID and Classes.

How to target though targetted element:
1. To Parent: element.parentElement: To get the parent element of targetted element;
2. To Sibling: element.previousElementSibling or element.lastElementSibling;
3. To Child: element.firstElementChild or element.lastElementChild;

How to create NEW element in document:
document.createElement('elementTagName');
Then add attributes to the element created by element.setAttribute('attributeType','attributeValue').
And then position the element as per requirements of our webPAGE in DOM tree.
