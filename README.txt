Cabinet Dentaire Fes - Dr Benslimane
Open index.html in a browser.

index.html          page structure
css/style.css       custom styles (css/bootstrap.min.css = Bootstrap 5.3.3)
js/fancybox.umd.js  Fancybox 5.0.36 (gallery lightbox, css/fancybox.css)
js/main.js          animations, gallery, theme, form (js/bootstrap.bundle.min.js = Bootstrap JS)
images/*.svg        default gallery illustrations

GALLERY PHOTOS
By default the gallery loads the clinic's real photos from dentistefes.com (needs internet).
If a photo can't load, the local illustration in images/ is shown instead.

To save the photos on your computer (offline use):
- Windows: double-click download-photos.bat
- Mac / Linux: run  sh download-photos.sh
It downloads the 8 photos into images/photos/ and updates js/main.js automatically.
The list of photo links is in photos-links.txt (you can also save them by hand).

PHOTOS: the gallery now reads the photos from images/ (IMG_9608.jpg, MVI_9596-frame-at-0m43s.jpg, ...). Keep the same file names.

The gallery photos (.webp) are in images/ and written directly in index.html. IMG_9213_jpg.webp is the doctor portrait (section A propos).
