document.addEventListener('DOMContentLoaded', () => {
	let file = '../resources/album.xml';

	fetch(file)
		.then(resp => {
			return resp.text();
		})
		.then(data => {
			let parser = new DOMParser();
			let xmlDoc = parser.parseFromString(data, 'text/xml');

			document.getElementById('list-item').textContent = data;
			buildAlbumList(xmlDoc);
		});
});

const buildAlbumList = file => {
	let list = document.getElementById('list');
	let artists = file.getElementsByTagName('artist');

	Array.from(artists).forEach(artist => {
		let li = document.createElement('li');
		li.textContent = artist.firstChild.nodeValue;
		list.appendChild(li);
	});
};
