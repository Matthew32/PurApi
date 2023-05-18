import dbConfig from "./config/db.config";
import PurModel from "./model/pur.model";

var purPath = dbConfig.DB;

var purModel = new PurModel(purPath);

export default {
    purModel: purModel
};
