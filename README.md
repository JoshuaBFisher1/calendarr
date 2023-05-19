# calendarr
Time Planner Web Application
This is a simple web application that allows the user to plan their day in hourly increments. The current date and time are displayed at the top of the page, and each hour is represented by a time block. The user can enter a description of their plans for each hour, and save that description to local storage.

Installation and Usage
To use this application, simply open the index.html file in your web browser. The application should load automatically and display the current date and time. The user can then enter a description for each hour and save their plans using the save buttons on the right-hand side of the page.

Code Overview
The application is built using jQuery and Day.js, and the code is contained within the $(function () {...}) block.

The code starts by getting references to the DOM elements for the current day, time blocks, and save buttons. It then uses Day.js to format the current date and display it in the header.

The code then iterates over each time block and sets the description text to the value stored in local storage. It also applies the appropriate CSS class based on the current time, to indicate whether the time block is in the past, present, or future.

Finally, the code adds a click event listener to the save buttons. When a save button is clicked, it gets the corresponding time block and saves the description to local storage using the hour as the key.

License
This code is licensed under the MIT license.