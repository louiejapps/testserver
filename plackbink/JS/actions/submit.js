import { getIP, getIPLocation } from '../helper/ipAddress.js';
import { generateUser } from '../helper/createUser.js';

export const onSubmit = (database, renderQuotes, text, file, base64) => {
    if (text.length) {
        const storedLocation = JSON.parse(localStorage.getItem("ipLocation"));

        if (storedLocation) {
            getIP().then(ipAddress => {
                const newQuoteRef = database.ref('slader').push();
                const quoteObject = {
                    name: generateUser([...String(navigator.userAgent)]),
                    quote: text,
                    file: file,
                    base64: base64,
                    ip: ipAddress,  // ✅ Corrected to store the actual IP
                    location: `${storedLocation.city}, ${storedLocation.country}`,  // ✅ Using sessionStorage data
                    timestamp: Date.now()
                };

                newQuoteRef.set(quoteObject)
                    .then(() => {
                        renderQuotes(database);
                    })
                    .catch((error) => {
                        console.error('Error adding quote: ', error);
                    });
            }).catch(error => console.error("Error fetching IP:", error));
        } else {
            console.error("No location data found in sessionStorage.");
        }
    }
};
