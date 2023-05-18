import {BaseController} from "./contracts/baseController";
import PurRepository from "../repositories/pur.repository";

const productRepository = new PurRepository();

export default class PurController implements BaseController {
    async get(req, res, next) {
        try {
            const urlPath = await productRepository.getCatFile();
            res.json([{url: `${req.get('host')}/img/${urlPath}`}]);
        } catch (err) {
            console.error(err.message);
            next(err);
        }
    }
}