const UrlParser = {
    parseActiveUrlAndCombine() {
        const url = window.location.hash.toLowerCase();
        console.log({url});
        const splitedUrl =  this._urlSpliter(url);
        const result = this._urlCombined(splitedUrl);
        console.log({result})
        return result;
    },
    
    _urlSpliter(url) {
        const urlSplits = url.split('/');
        return {
            resource: urlSplits[1] || null,
            page: urlSplits[3] || null,
        };
    },
    
    _urlCombined(splitedUrl) {
        return (
          (splitedUrl.resource ? `/${splitedUrl.resource}` : '/') +
          (splitedUrl.page ? `${splitedUrl.page}` : '')
        );
    }
};

export default UrlParser;