import {BaseController} from "./contracts/baseController";
import PurRepository from "../repositories/pur.repository";
import NodeCache from "../services/nodecache.service";
const nodeCache = new NodeCache();
const productRepository = new PurRepository();
export default class PurController implements BaseController {
    protected getCacheKey = () => {
        return 'showedAnimals';
    }
     get = async (req, res, next) => {
        try {
            const hostUrl = req.get('host');
            
            var urlPath = await this.getAnimalUrl(hostUrl);
            const cacheKey = this.getCacheKey();
            
            var showedAnimals = await nodeCache.get(cacheKey) ?? [];
            if(showedAnimals){
                var repeatedNumber = 0;
                do{
                    urlPath = await this.getAnimalUrl(hostUrl);
                    repeatedNumber++;
                }while(showedAnimals.includes(urlPath) && repeatedNumber < 3)
            }
            
            if(showedAnimals.length > 20){
                nodeCache.delete(cacheKey);
                showedAnimals = [];
            }
            nodeCache.save(cacheKey, [...showedAnimals,urlPath]);
            
            res.json([{url: urlPath}]);
        } catch (err) {
            console.error(err.message);
            next(err);
        }
    }
    protected getAnimalUrl = async (host) => {
        var urlPath = await productRepository.getCatFile();
           
        return `${process.env.PROTOCOL}://${host}/img/${urlPath}`
    }
}