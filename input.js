function filterName(name) {
    if(name === undefined) {
        name = "Unknown";
    }
    if(name.startsWith(" ") || name.endsWith(" ")) {
        name = name.trim();
    }
    if(name.length > 10 ) {
        name = name.substring(0, 10)
    }
    if(name.startsWith("_")) {
        name = name.substring(1)
    }
    if( name === "Hell") {
        throw Error("This Name Is Not Allowed")
    }
    return name;
}

module.exports = filterName;