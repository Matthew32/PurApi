import NodeCache from "node-cache";

export default class NodeCacheFactory{
    static instance = () => {
        return new NodeCache();
    }
}