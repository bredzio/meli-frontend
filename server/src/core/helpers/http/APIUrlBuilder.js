import environment from '../../../environments/environment.js';
import URLBuilder from './URLBuilder.js';

class APIUrlBuilder{
    createUrl(api, action){
        const urlBuilder = new URLBuilder(
            this.getApiUrl(api),
            action
        );
        return urlBuilder.toString();
    }

    getApiUrl (api){
        if(!api){
            console.error('Error: API not found.');
            return;
        }

        switch(api){
        case 'ML':
            return environment.APIBaseURL;
        default:
            console.error(`Error: ${api} not found.`);
            return;    
        }
    }

}

export default APIUrlBuilder;