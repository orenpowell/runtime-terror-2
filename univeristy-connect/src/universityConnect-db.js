import UniversityConn from "./UniversityConnect";

const objectConstruct = (data) => {

    const object = {};
    for(var pair of data.entries()){
        object[`${pair[0]}`] = `${pair[1]}`
    }

    return object;
}



const UniversityDB = {
    objectConstruct
}
export default UniversityDB;