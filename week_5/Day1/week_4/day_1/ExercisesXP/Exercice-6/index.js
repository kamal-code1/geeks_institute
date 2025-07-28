(function(numberOfChildren, partnerName, geoLocation, jobTitle) {
    const message = `You will be a ${jobTitle} in ${geoLocation}, and married to ${partnerName} with ${numberOfChildren} kids.`;


    const p = document.createElement('p');
    p.textContent = message;


    document.body.appendChild(p);
})(2, "Emma", "New York", "Designer");
