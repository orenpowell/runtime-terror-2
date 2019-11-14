window.Models = [];
window.sideModels = [];
window.topModels = [];
window.optionModels = [];
const registerModel = (model) => {
    
    window.Models.push(model);
    if(model.type ==='model')
        window.sideModels.push(model);
    else if(model.type === 'addon')
        window.topModels.push(model); 
    else if(model.type === 'option')
    {
        window.optionModels.push(model);
    }  
};
const getOptionsModels = () => {
    return window.optionModels;
}
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
    getSideModels,
    getOptionsModels
}

window.UniversityConn = UniversityConn;
export default UniversityConn;