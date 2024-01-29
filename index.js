const feetToMeters = (feet) => {
    return feet * 0.3048;
}

const metersToFeet = (meters) => {
    return meters * 3.28084;
} 

const milesToKm = (miles) => {
    return miles * 1.60943;
} 

const kmToMiles = (kilometers) => {
    return kilometers * 0.621371;

} 

exports.calculate = (req, res) => {
    let unit = req.query.unit;
    let num = req.query.num;

    let result;

    switch (unit.toString()) {
        case "feet":
            result = feetToMeters(num);
            break;
        case "meters":
            result = metersToFeet(num);
            break;
        case "miles":
            result = milesToKm(num);
            break;
        case "kilometers":
            result = kmToMiles(num);
            break;
        default:
            result = "Invalid Input";
    }

    res.status(200).send(result.toString());
}