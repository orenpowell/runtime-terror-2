window.Models = [];
window.sideModels = []
window.topModels = []
const registerModel = (model) => {
    
    window.Models.push(model);
    if(model.type ==='model')
        window.sideModels.push(model);
    if(model.type === 'addon')
        window.topModels.push(model);   
};

const getSideModels = () => {
    return window.sideModels;
}

const getModels = () => {
    return window.Models;
}

const getAddons = () => {
    return window.topModels;
}


const UniversityConn = {
    registerModel,
    getModels,
    getAddons,
    getSideModels
}

window.UniversityConn = UniversityConn;
export default UniversityConn;