import OrigamiTs from 'origamits'  
import config from './config'; 
export default class OriIndex
{
    constructor()
    {   
        this.init();
    }
    async init()
    {
        var origamicore = new OrigamiTs(config);
        await origamicore.start()   
    }
}

new OriIndex()