
enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

type Options = {
  method: METHODS,
  timeout: number,
  headers?: Record<string, string>;
  data?: any
};


type OptionsWithoutMethod = Omit<Options, 'method'>;

function queryStringify(data: Record<string, any>) {
  if (typeof data !== 'object') {
    throw new Error('Data must be object');
  }
  
  // Здесь достаточно и [object Object] для объекта
  const keys = Object.keys(data);
  return keys.reduce((result, key, index) => {
    return `${result}${key}=${data[key]}${index < keys.length - 1 ? '&' : ''}`;
  }, '?');
}


export class MyFetch {

  get(url: string, options: OptionsWithoutMethod = {
    timeout: 0,
  }): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.GET });
  } 

  post = (url: string, options:OptionsWithoutMethod = { timeout: 5000 }) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };
    
  put = (url: string, options:OptionsWithoutMethod = { timeout: 5000 }) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (url: string, options:OptionsWithoutMethod = { timeout: 5000 }) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (url: string, options: Options = {
    method: METHODS.GET,
    timeout: 5000,
  }): Promise<XMLHttpRequest> => {
    const { headers = {}, method, data, timeout } = options;
      
    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }
      
      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;
      
      xhr.open(
        method, 
        isGet && !!data
          ? `${url}${queryStringify(data)}`
          : url,
      );
      
      Object.keys(headers).forEach(key => {
        xhr.setRequestHeader(key, headers[key]);
      });
      
      xhr.onload = function () {
        resolve(xhr);
      };
      
      xhr.onabort = reject;
      xhr.onerror = reject;
      
      xhr.timeout = timeout;
      xhr.ontimeout = reject;
      
      if (isGet || !data) {
        xhr.send();
      } else {
        xhr.send(data);
      }
    });
  };
}
