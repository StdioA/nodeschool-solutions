var picture = require('cat-picture');

var src = picture.src;
picture.remove();

var image = require('lightning-image-poly');

var viz = new image('#visualization', null, [src], {hullAlgorithm: 'convex'});

var remote = require('electron').remote;
var fs = require('fs');

function save() {
	remote.getCurrentWindow().webContents.printToPDF({
		portrait: true
	}, (err, data) => {
		fs.writeFile('annotation.pdf', data, (err) => {
			if (err) alert('Error generating pdf! ' + err.message);
			else alert('PDF saved!');
		});
	});
}

window.addEventListener('keydown', (e) => {
	if (e.keyCode == 80) {
		save();
	}
});
