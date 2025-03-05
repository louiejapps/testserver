export const getIP = () => {
    return new Promise((resolve, reject) => {
        fetch("https://api64.ipify.org?format=json")
            .then(response => response.json())
            .then(data => resolve(data.ip))  // ✅ Resolve on success
            .catch(error => reject("Error fetching IP: " + error)); // ❌ Reject on failure
    });
};

export const getIPLocation = () => {
    return new Promise((resolve, reject) => {
        fetch("https://ipapi.co/json/") // Uses ipapi.co to get location details
            .then(response => response.json())
            .then(data => resolve(data)) // ✅ Resolve with location data
            .catch(error => reject("Error fetching IP location: " + error)); // ❌ Reject on error
    });
};
