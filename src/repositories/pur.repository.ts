import db from "../../db/index"


export default class PurRepository{
    constructor(protected purModel = null){
        this.purModel = db.purModel;
    }

    public getCatFile = async (itemsToGet: number = 5) => {
        var catImages = await this.purModel.getFiles();
        var item = catImages[Math.floor(Math.random()*catImages.length)];
        
        return item;
    }
}