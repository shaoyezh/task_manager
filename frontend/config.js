require("dotenv").config();

module.exports = {
    env:{
        REACT_APP_DEV_API: process.env.REACT_APP_DEV_API,
        REACT_APP_PROD_API: process.env.REACT_APP_PROD_API
    },
}