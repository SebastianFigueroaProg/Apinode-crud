//importar conexion a la database
import db from "../database/db.js";

import {DataTypes} from 'sequelize';


const BlogModel = db.define('blog', {
    title: {type: DataTypes.STRING},
    content: {type: DataTypes.STRING},
});

export default BlogModel;