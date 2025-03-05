import { firebaseConfig } from './Firebase/Firebase.js';
import { createRoot } from './index.js';
import { createNav } from './Nav.js';
import { createPost } from './Post.js';
import { createQuote } from './Quote.js';
import { getIP, getIPLocation } from './helper/ipAddress.js';
import { generateUser } from './helper/createUser.js';


const initDb = firebase.initializeApp(firebaseConfig)
const $ = (selector) => document.querySelector(selector);
const database = initDb.database();
const storage = initDb.storage();


const renderQuotes = db => $(`#quoteList`).replaceWith(createQuote(db, renderQuotes));

$(`#root`).replaceWith(createRoot());
$(`#nav`).replaceWith(createNav(renderQuotes));

sessionStorage.setItem(`currUser`, generateUser([...String(navigator.userAgent)]));
const storedLocation = localStorage.getItem("ipLocation");

if (storedLocation) {
    const location = JSON.parse(storedLocation);
    $(`#post`).replaceWith(createPost(storage, database, renderQuotes));
    renderQuotes(database);
} else {
    getIPLocation()
        .then(location => {
            localStorage.setItem("ipLocation", JSON.stringify({
                country: location.country,
                city: location.city,
                region: location.region,
                latitude: location.latitude,
                longitude: location.longitude
            }));
            $(`#post`).replaceWith(createPost(storage, database, renderQuotes));
            renderQuotes(database);
        })
        .catch(error => console.error(error));
}