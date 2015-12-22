(function () {
	tag_cloud_toggle('.tagcloud a', '.tagcloud', '#wrap');
})();

function tag_cloud_toggle(item_selector, container_selector, document_selector) {
	// get the current menu-item of the selected category
	var active_item = document.querySelector(item_selector);

	if (!active_item) {
		return;
	}

	// get the menu containers
	var container = document.querySelector(container_selector);

	// create a span with the text from the current menu item
	var toggler = document.createElement('a');
	toggler.setAttribute('class', 'toggler');
	var toggler_text = document.createTextNode(active_item.innerText);
	toggler.appendChild(toggler_text);

	// prepend the menu toggler
	container.insertBefore(toggler, container.firstChild);

	// register the onclick handler showing the list and hiding the toggler
	toggler.onclick = function () {
		if (-1 !== container.className.indexOf('toggled')) {
			container.className = container.className.replace(' toggled', '');
		} else {
			container.className += ' toggled';
		}
		// prevent click on document which would close the menu immediately
		event.stopPropagation();
	};

	// close the dropdown on a click outside of the menu
	document.querySelector(document_selector).addEventListener('click', function () {
		if (-1 !== container.className.indexOf('toggled')) {
			container.className = container.className.replace(' toggled', '');
		}
	}, false);
}