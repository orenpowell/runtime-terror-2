const Models = [];
const sideModels = []
const topModels = []
const registerModel = (model) => {
    
    Models.push(model);
    if(model.type ==='model')
        sideModels.push(model);
    if(model.type === 'addon')
        topModels.push(model);
    console.log("pushing")
   
};

const getSideModels = () => {
    return sideModels;
}

const getModels = () => {
    return Models;
}

const getAddons = () => {
    return topModels;
}


const UniversityConn = {
    registerModel,
    getModels,
    getAddons,
    getSideModels
}

window.UniversityConn = UniversityConn;
export default UniversityConn;