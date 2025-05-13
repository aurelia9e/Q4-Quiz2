
	function grader() {

		var graded = document.getElementById('scored').value;

		if (graded >= 94 && graded <= 100 ) {
			window.alert('Excellent'); 
		}
		else if (graded >= 87 && graded <= 93 ) {
			window.alert('Above Standard');
		}
		else if (graded >= 80 && graded <= 86 ) {
			window.alert('Standard');
		}
		else if (graded >= 75 && graded <= 79 ){
			window.alert('Needs Improvement');
		}
		else {
			window.alert('Failure');
		}
	}