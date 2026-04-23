let shams = "loves Nidhi";

switch (shams) {
    case "loves Nidhi":
        console.log("Shams loves Nidhi");
        break;
    case "hates Nidhi":
        console.log("Shams hates Nidhi"); // This will never gonna happen cuz I will keep loving Nidhi.
        break;
    default:
        console.log("Shams has no feelings for Nidhi");
}