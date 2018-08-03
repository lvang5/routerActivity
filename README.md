# Router Activity

## Setup

Fork and clone this repository. Run `npm install` in terminal to install express. Start the server using `npm start` and opening [http://localhost:5000/](http://localhost:5000/) in your browser.

> NOTE: The majority of the HTML, CSS and client side JS has been completed for this activity. The focus is primarily server side code.

## Base Mode

- [x] Move the GET & POST routes into the router
- [x] Move the plants array into the router
- [x] Add an input for **notes** to the form. Send the **notes** to the server and save them to the array with that plant. Display the notes in the table.

## Stretch Goals

There are **a lot** of stretch goals listed here. All of these tasks are optional and will not be required to complete the weekend assignment. Focus on one or two of these if you have extra time after completing base mode.

### Styling

- [ ] Highlight rows in the table that are out of stock

### Add More Routes (Same Router)

- [ ] Create a GET route (`/plants/sold-out`) that returns only plants that are out of stock. 
- [ ] Display the out of stock plants in a separate table.
- [ ] Create a route (`plants/clear`) that clears all plants from the array. 

### Validation

- [ ] Prevent the user from submitting duplicate plants
- [ ] Prevent the user from submitting an empty form

### Organization

- [ ] Convert the plant object to a **Class** on the server. 
- [ ] Move the class and data into a module.
 