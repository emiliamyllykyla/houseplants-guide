<br>
<br>

<p align="center">
  <img height="400" src="https://user-images.githubusercontent.com/63544185/135653271-76bae480-830b-4754-9060-baa7c3353260.png" />
</p>

<h1 align="center"> :herb: Houseplants Guide :herb:</h1>

🔗 [Visit Houseplants Guide here!](https://houseplants-489e7.web.app/)

Houseplants Guide is a page where the user can get inspiration for house decoration with plants, find plants that are suitable for specific conditions and find care instructions of individual plants. Admin(s) can add new plants with images and information, for example watering and nutrition needs.

* **Home** - a fresh and simple landing page welcoming the user. 
* **All Plants** - a page showing all plants added to the app in a grid. On this page the user can: 
  * **sort** plants alpabetically
  * **filter** by watering or light needs, or if the plant is air purifying
  * **search** by English and scientific name
  * get to a plant page by clicking a plant card
* **Plant page** - a page containing an image slider, information about the plant and caring instructions.

<h2>Admin view</h2>

An admin authenticates via /login. For an authenticated user the page looks a bit different.
* **Add plant** - a form for adding a plant
* **Delete plants** - a table for deleting plants
* Animations visualizing deleting a plant (a row in the table)
* Alerts informing the admin of successful actions or errors
<br>

<p align="center">
  <img height="300" src="https://user-images.githubusercontent.com/63544185/135656544-acdf8d08-36f6-45cf-b839-070979452568.png" />
  <img height="300" src="https://user-images.githubusercontent.com/63544185/135655887-6ef1e38b-7594-44bd-991b-f2f9cbca54a7.png" />
</p>

<br>

<h2>Firebase</h2>

The following [Firebase](https://firebase.google.com/) services are used in this app:
* **Cloud Firestore** is used to store data.
* **Firebase Auth** is used to enable authentication with a Google account.
* **Firebase Admin SDK** and **Custom Claims** makes it only possible for an admin to add and delete plant documents.
* **Firebase Hosting** is used for hosting the app.

<h2>Other technologies</h2>

* Written in [TypeScript](https://www.typescriptlang.org/) using [ReactJS](https://reactjs.org/)
* Bootstrapped with [Create React App](https://github.com/facebook/create-react-app)

<h2>Run the project</h2>

* `npm start` in the project directory runs the app in the development mode.

