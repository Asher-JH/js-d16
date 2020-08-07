let progress = 0;

function loading() {
	progress++ ;

	if(progress / 100 == 1) {
		window.clearInterval(interval)
	}
	$('#loadingBar').css('width', `${progress}%`)
	$('#progress').html(`${progress}%`)
}


let status = 0;
$('#runBtn').on('click', () => {
	interval = window.setInterval(loading, 1000)

	
})