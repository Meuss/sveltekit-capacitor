<script>
	import { onMount } from 'svelte';
	/**
	 * @type {String}
	 */
	let maxTouchPoints = 0;
	onMount(() => {
		maxTouchPoints = navigator.maxTouchPoints;
		//-------------------------//
		// Initialization and
		// Global Variables
		//-------------------------//

		// Get the canvas.
		var canvas = document.getElementById('myCanvas');

		// Set the canvas to fill the screen.
		canvas.width = window.outerWidth;
		canvas.height = window.outerHeight;

		// Get a 2d drawing context.
		var ctx = canvas.getContext('2d');

		// Used to keep track of active touches.
		var currentTouches = new Array();

		//-------------------------//
		// Helper Methods
		//-------------------------//

		// Returns a random color from an array.
		var randomColor = function () {
			var colors = ['#3F3F3F', '#929292', '#00A3EE', '#F5D908', '#D80351'];
			return colors[Math.floor(Math.random() * colors.length)];
		};

		// Finds the array index of a touch in the currentTouches array.
		var findCurrentTouchIndex = function (id) {
			for (var i = 0; i < currentTouches.length; i++) {
				if (currentTouches[i].id === id) {
					return i;
				}
			}

			// Touch not found! Return -1.
			return -1;
		};

		//-------------------------//
		// Handler Methods
		//-------------------------//

		// Creates a new touch in the currentTouches array and draws the starting
		// point on the canvas.
		var touchStarted = function (event) {
			var touches = event.changedTouches;

			for (var i = 0; i < touches.length; i++) {
				var touch = touches[i];
				var touchColor = randomColor();

				currentTouches.push({
					id: touch.identifier,
					pageX: touch.pageX,
					pageY: touch.pageY,
					color: touchColor
				});

				ctx.beginPath();
				ctx.arc(touch.pageX, touch.pageY, 2.5, Math.PI * 2, false);
				ctx.fillStyle = touchColor;
				ctx.fill();
			}
		};

		// Draws a line on the canvas between the previous touch location and
		// the new location.
		var touchMoved = function (event) {
			var touches = event.changedTouches;

			for (var i = 0; i < touches.length; i++) {
				var touch = touches[i];
				var currentTouchIndex = findCurrentTouchIndex(touch.identifier);

				if (currentTouchIndex >= 0) {
					var currentTouch = currentTouches[currentTouchIndex];

					ctx.beginPath();
					ctx.moveTo(currentTouch.pageX, currentTouch.pageY);
					ctx.lineTo(touch.pageX, touch.pageY);
					ctx.lineWidth = 4;
					ctx.strokeStyle = currentTouch.color;
					ctx.stroke();

					// Update the touch record.
					currentTouch.pageX = touch.pageX;
					currentTouch.pageY = touch.pageY;

					// Store the record.
					currentTouches.splice(currentTouchIndex, 1, currentTouch);
				} else {
					console.log('Touch was not found!');
				}
			}
		};

		// Draws a line to the final touch position on the canvas and then
		// removes the touh from the currentTouches array.
		var touchEnded = function (event) {
			var touches = event.changedTouches;

			for (var i = 0; i < touches.length; i++) {
				var touch = touches[i];
				var currentTouchIndex = findCurrentTouchIndex(touch.identifier);

				if (currentTouchIndex >= 0) {
					var currentTouch = currentTouches[currentTouchIndex];

					ctx.beginPath();
					ctx.moveTo(currentTouch.pageX, currentTouch.pageY);
					ctx.lineTo(touch.pageX, touch.pageY);
					ctx.lineWidth = 4;
					ctx.strokeStyle = currentTouch.color;
					ctx.stroke();

					// Remove the record.
					currentTouches.splice(currentTouchIndex, 1);
				} else {
					console.log('Touch was not found!');
				}
			}
		};

		// Removes cancelled touches from the currentTouches array.
		var touchCancelled = function (event) {
			var touches = event.changedTouches;

			for (var i = 0; i < touches.length; i++) {
				var currentTouchIndex = findCurrentTouchIndex(touches[i].identifier);

				if (currentTouchIndex >= 0) {
					// Remove the touch record.
					currentTouches.splice(currentTouchIndex, 1);
				} else {
					console.log('Touch was not found!');
				}
			}
		};

		//-------------------------//
		// Event Listeners
		//-------------------------//

		// Set up an event listener for new touches.
		canvas.addEventListener('touchstart', function (e) {
			e.preventDefault();
			touchStarted(event);
		});

		// Set up an event listener for when a touch ends.
		canvas.addEventListener('touchend', function (e) {
			e.preventDefault();
			touchEnded(e);
		});

		// Set up an event listener for when a touch leaves the canvas.
		canvas.addEventListener('touchleave', function (e) {
			e.preventDefault();
			touchEnded(e);
		});

		// Set up an event listener for when the touch instrument is moved.
		canvas.addEventListener('touchmove', function (e) {
			e.preventDefault();
			touchMoved(e);
		});

		// Set up an event listener to catch cancelled touches.
		canvas.addEventListener('touchcancel', function (e) {
			touchCancelled(e);
		});
	});
</script>

<h1 class="mb-4">Canvas</h1>
<div>maxTouchPoints: {maxTouchPoints}</div>

<canvas id="myCanvas" width="500" height="500" />

<style lang="postcss">
</style>
