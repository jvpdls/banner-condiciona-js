# Vanilla JS | Ad Insertion

Snippet to conditionally display promotional banners depending on the user's device. Executed on the client side.

The script depends on the existence of a `<div id="top-banner"></div>` section on the page where it is called.

The advantage of using direct implementation on the front end is not that you don't need to separate cached versions of the page to serve when the site is fully responsive.

The code considers the insertion of the script in the footer of the website, so that the section where the image will be inserted will have already been created when it is made available in the DOM.
