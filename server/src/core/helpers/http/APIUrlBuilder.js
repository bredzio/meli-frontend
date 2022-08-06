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
        switch(api){
        case 'ML':
            return environment.APIBaseURL;
        }
    }

}

export default APIUrlBuilder;