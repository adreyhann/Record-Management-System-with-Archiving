document.addEventListener('DOMContentLoaded', function () {
	const chart1 = document.getElementById('myChart').getContext('2d');

	new Chart(chart1, {
		type: 'bar',
		data: {
			labels: ['Kinder', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 6'],
			datasets: [
				{
					label: 'Students',
					data: [20, 30, 40, 20, 30, 20, 10],
					backgroundColor: [
						'rgba(54, 162, 235, 0.2)',
						'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
						'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
						'rgba(255, 99, 132, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
					],
					borderColor: ['rgba(54, 162, 235, 1)', 'rgba(255, 99, 132, 1)'],
					borderWidth: 1,
				},
			],
		},
		options: {
            layout: {
                height: 10
            }
        },
	});
});