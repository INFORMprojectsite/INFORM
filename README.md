# INFORM

## Maintenance

### Content
To update or add new content to the front page, add a new markdown document in `/collections/_inform`.

To add a new image, simply upload it to `/assets/img`. Then, in the markdown page you wish to add it to, add it as an inline image:

`![alt-text](assets/img/[name-of-image].jpg)`.

See `collections/_inform/mortality.md` for an example.

### Styling
To change the color of an index tile which does NOT have an associated image, update or add `color` and/or `color2` in the frontmatter section of the respective markdown document in `/collections/_inform`. If you only add one or the other, the color will be solid; if you add both, it will be a 45-degree rotated linear gradient between the two. If you do not provide a color or image, the default colors `#e66465` and `#9198e5` will be used.

**BEFORE PUSHING TO REPOSITORY**
Make sure to run `gulp sass` to compile all styling changes into main.css. If this returns some kind of error, run `npm install` then try again.

## License

GNU General Public License v3.0

