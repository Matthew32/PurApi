import fs from 'fs';

export default class PurModel {
    constructor(protected filePath : string = '') {
    }
    private setFilePath = (filePath) => {
        this.filePath = filePath;

        return this;
    };
    public getFiles = async () => {
        if (!this.filePath) {
            throw new Error("You need to set up the pur filepath.");
        }

        var files = await fs.readdirSync(this.filePath, { withFileTypes: true })
            .filter(item => !item.isDirectory())
            .map(item => item.name);

            return files;
    };
}
