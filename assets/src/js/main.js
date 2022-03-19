window.addEventListener('load', () => {
	/**
	 * Toggle navigation
	 */
	const toggle_nav_buttons = document.querySelectorAll('button.toggle-nav');
	if(toggle_nav_buttons){
		toggle_nav_buttons.forEach((toggle_nav_button) => {
			toggle_nav_button.addEventListener('click', function(e){
				e.preventDefault();

				let target = this.dataset.target;
				target = document.querySelector('#' + target);
				if(target){
					target.classList.toggle('hidden');
				}
			});
		});
	}

	/**
	 * Bind click events to 'open-modal' classes
	 */
	const open_modal_buttons = document.querySelectorAll('button.open-modal');
	if(open_modal_buttons){
		open_modal_buttons.forEach((open_modal_button) => {
			open_modal_button.addEventListener('click', function(e){
				e.preventDefault();

				const target = this.dataset.target;
				if(target){
					const modal = new Modal(target);
					modal.Open();
				}
			})
		});
	}
});