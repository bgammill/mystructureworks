$(document).ready(function() {
	$('.emphasis-text').click(function() {
		hopscotch.startTour(tour);
	});
});

var tour = {
	id: 'hello-hopscotch',
	steps: [
		{
			title: "Welcome!",
			content: "Welcome to MyStructureWorks! Press next to continue.",
			target: document.querySelector('.header-text'),
			placement: 'bottom'
		},
		{
			title: "Support",
			content: 'In a hurry and want official support? Look no further.',
			target: document.querySelector('#step-two'),
			placement: 'left'
		},
		{
			title: "Wiki",
			content: 'Want to see and contribute independent data? Here you go.',
			target: document.querySelector('#step-three'),
			placement: 'bottom'
		},
		{
			title: "Forums",
			content: "Feel like interacting with other StructureWorks users? This is what you're looking for.",
			target: document.querySelector('#step-four'),
			placement: 'right'
		}
	]
};