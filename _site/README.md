## How to make changes to the website

1. This is all going to be pretty confusing unless your familiar with Jekyll/Liquid. If not, don't worry, just read on!
2. Each of the pages exist in the top level of the repository. This means you don't need to go into subdirectories to edit content on the main page etc.
3. It's tempting to make changes in the `_site` directory. DON'T. It won't cause any harm, but changes won't be saved. Want to know why? The `_site` directory holds the content of the site upon being build/compiled. Next time you load the site, the contents of the directory will be overwritten by the next build

### I want to make a change to the index.html

`index.html` is the default page when a user comes to the website, known as the home page/landing page. To edit the main content, simply click on the `index.html` file, then the edit tool, and you can start editing text. It is good to have a basic level of understanding of both Markdown and HTML before editing. If not, *only change the text, not the html tags*. You can also change images by uploading an image to the `images` directory, and then finding where the image has been used in the website, and changing the link to the new image path i.e `<img src='/images/newImage.jpg' />`





Twenty by HTML5 UP
html5up.net | @n33co
Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)


This is Twenty, a minimal, multi-page responsive site template for HTML5 UP.

As the name implies, this is my twentieth (!) design for HTML5 UP. Since the last
few have been single page affairs, I decided to go with something a bit more conventional
and threw in four extra page layouts. Beyond that, it's the usual drill: fully responsive,
built on HTML5/CSS3/skel, and CCA licensed like all my other stuff. Sass sources are
also included for those of you into that sort of thing (entirely optional).

Special thanks to Michael Domaradzki (md.photomerchant.net) for allowing me to use
his excellent photos in Twenty's demo*.

(* = Not included! Only meant for use with my own on-site demo, so please do NOT download
and/or use any of Michael's work without his explicit permission!)

AJ
n33.co @n33co dribbble.com/n33


Credits:

	Demo Images:
		Michael Domaradzki (md.photomerchant.net)
			"Night Vision"
			"At the Station II"
			"Airchitecture II"
			"Livewires II"
			"Midnite Xpress I"

	Icons:
		Font Awesome (fortawesome.github.com/Font-Awesome)

	Other:
		jQuery (jquery.com)
		html5shiv.js (@afarkas @jdalton @jon_neal @rem)
		CSS3 Pie (css3pie.com)
		background-size polyfill (github.com/louisremi)
		jquery.dropotron (n33.co)
		jquery.scrolly (n33.co)
		jquery.scrollgress (n33.co)
		skel (n33.co)
