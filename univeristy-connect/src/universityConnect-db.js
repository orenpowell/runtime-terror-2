import UniversityConn from "./UniversityConnect";
import auth from './Utils/auth'

const objectConstruct = (data) => {

    const object = {};
    for(var pair of data.entries()){
        object[`${pair[0]}`] = `${pair[1]}`
    }

    return object;
}


const formConstructor = (data) => {
    const object = {...data};
    const {Day, Month, Year} = object;
    const newdate = `${Year}-${Month}-${Day}`;
    delete object.Day;
    delete object.Year;
    delete object.Month;
    const newObj = {'student_id':auth.getToken('loginUser'),...object, 'dob' : newdate};
    return newObj;

}
const UniversityDB = {
    objectConstruct,
    formConstructor
}
export default UniversityDB;