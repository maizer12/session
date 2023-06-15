const btnSwitch = document.querySelectorAll('.open-close')
const popup = document.querySelector('.popup')

btnSwitch?.forEach(e =>
	e.addEventListener('click', () => {
		const body = document.querySelector('body')
		body.classList.toggle('popup-active')
	})
)

popup?.addEventListener('click', e => {
	const elem = e.target
	if (elem.classList.contains('popup')) {
		const body = document.querySelector('body')
		body.classList.toggle('popup-active')
	}
})

$(document).ready(function () {
	$('.fancybox').fancybox()
})
