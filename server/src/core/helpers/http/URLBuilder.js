class URLBuilder {
    constructor(baseUrl, action){
        this.url = [baseUrl, action].join('/');
    }

    toString(){
        const qs = this.queryString 
            ? this.queryString.toString()
            : '';
        return qs ? `${this.url}` : this.url;   
    }
}

export default URLBuilder;