const Models = [];

const registerModel = (model) => {
    console.log(model);
    Models.push(model);
};

const getModels = () => {
    return Models;
}



const UniversityConn = {
    registerModel,
    getModels
}

window.UniversityConn = UniversityConn;
export default UniversityConn;