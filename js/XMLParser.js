document.addEventListener('DOMContentLoaded', () => {
	let file = '../resources/album.xml';

	fetchXML = async file => {
		const response = await fetch(file);
		const data = await response.text();

		let parser = new DOMParser();
		let xmlDoc = parser.parseFromString(data, 'text/xml');

		document.getElementById('list-item').textContent = data;
		buildAlbumList(xmlDoc);
	};

	fetchXML(file);
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
