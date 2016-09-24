var root = 'http://jsonplaceholder.typicode.com';
localStorage.removeItem('fetched');
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
			});
		} else {
			console.log("Aborting. Data has already been fetched.")
		}
	});
})