import NodeCacheFactory from "./factory/nodecache.factory";

export default class NodeCache{
    constructor(protected nodeCache = null){
        if(this.nodeCache === null){
            this.nodeCache = NodeCacheFactory.instance();
        }
    }
    public get = async (key:string) => {
        var data = await this.nodeCache.get(key);

        return data;
    }
    public save = async (key:string,value:any,seconds: number= 10000) => {
        await this.nodeCache.set(key, value, seconds);
        
        return true;
    }
    public delete  = async (key:string) => {
        await this.nodeCache.del(key);

        return true;
    }
}

