var root = 'https://jsonplaceholder.typicode.com';

function clearLs() {
	localStorage.removeItem('fetched');
}
clearLs();
$(document).ready(function() {
	$('#tab-5 + .tab-label').on('click', function() {
		if (localStorage.getItem('fetched') !== 'true') {
			$.ajax({
				url: root + '/posts/1',
				method: 'GET'
			}).then(function(data) {
				$('.dynamic-title').html(data.title);
				$('.dynamic-text').html(data.body);
				localStorage.setItem('fetched', 'true');
				console.log("Success! Element populated with Dynamic Data!");
			});
		} else {
			console.log("Aborting. Data has already been fetched!")
		}
	});
});