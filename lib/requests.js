import axios from "axios";

export const update_image = async (image) => {
    let response = await axios({
        method: "POST",
        url: "/api/update",
        data: {
            image
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}

export const update_infos = async (name, description) => {
    let response = await axios({
        method: "POST",
        url: "/api/update",
        data: {
            name,
            description
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}


export const update_first_video = async (first_video) => {
    let response = await axios({
        method: "POST",
        url: "/api/update",
        data: {
            first_video
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}

export const add_video = async (video) => {
    let response = await axios({
        method: "POST",
        url: "/api/update",
        data: {
            video
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}

export const delete_video = async (id) => {
    let response = await axios({
        method: "POST",
        url: "/api/delete",
        data: {
            id
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}

export const update_socials = async (instagram, vimeo, dribble, behance, fiverr) => {
    let response = await axios({
        method: "POST",
        url: "/api/update",
        data: {
            instagram, 
            vimeo,
            dribble, 
            behance, 
            fiverr
        },
    }).then(
        res => {
            let obj = {};
            switch (res.status) {
                case 200:
                    obj.error = false;
                    obj.data = res.data
                    break
                case 501:
                    obj.error = true;
                    obj.message = res.error
                    break
                default:
                    obj.error = true;
                    obj.message = "Somehing went wrong!"
                    break;
            }

            return obj;
        }
    ).catch(err => {
        return {
            error: true,
            message: err?.response?.data?.message
        }
    })
    
    return response;
}