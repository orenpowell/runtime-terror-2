const Models = [];

const registerModel = (model) => {
    console.log(model);
    Models.push(model);
   
};

const getSideModels = () => {
    return Models.filter((model, i) => {
        return model.type === 'model'
    });
}

const getModels = () => {
    return Models;
}

const getAddons = () => {
    return Models.filter((model, i) => {
        return model.type === 'addon'
    });
}


const UniversityConn = {
    registerModel,
    getModels,
    getAddons,
    getSideModels
}

window.UniversityConn = UniversityConn;
export default UniversityConn;