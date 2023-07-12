const currentTime = new Date(); // Get the current local time
const timezoneOffsetInMs = currentTime.getTimezoneOffset() * 60000; // Get the time zone offset in milliseconds
const localTime = new Date(currentTime - timezoneOffsetInMs); // Adjust the time by subtracting the offset
const localTimeISOString = localTime.toISOString(); // Convert the adjusted local time to ISO 8601 format

module.exports = localTimeISOString