enum METHODS {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

type RequestOptions = {
  method: METHODS;
  timeout: number;
  headers?: Record<string, string>;
  searchParams?: Record<string, string>;
  body?: Record<string, unknown>;
};

type RequestOptionsWithoutMethod = Omit<RequestOptions, 'method'>;
type RequestOptionsWithoutMethodAndBody = Omit<
RequestOptions,
'method' | 'body'
>;

function getUrl(url: string, queryData?: RequestOptions['searchParams']) {
  const encodedUrl = new URL(url);

  if (
    queryData &&
    typeof queryData === 'object' &&
    Object.keys(queryData).length !== 0
  ) {
    for (const key in queryData) {
      encodedUrl.searchParams.set(key, queryData[key]);
    }
  }

  return encodedUrl;
}

export class CustomFetch {
  get(
    url: string,
    options: RequestOptionsWithoutMethodAndBody = {
      timeout: 0,
    },
  ): Promise<XMLHttpRequest> {
    return this.request(url, { ...options, method: METHODS.GET });
  }

  post = (
    url: string,
    options: RequestOptionsWithoutMethod = { timeout: 5000 },
  ) => {
    return this.request(url, { ...options, method: METHODS.POST });
  };

  put = (
    url: string,
    options: RequestOptionsWithoutMethod = { timeout: 5000 },
  ) => {
    return this.request(url, { ...options, method: METHODS.PUT });
  };

  delete = (
    url: string,
    options: RequestOptionsWithoutMethod = { timeout: 5000 },
  ) => {
    return this.request(url, { ...options, method: METHODS.DELETE });
  };

  request = (
    url: string,
    options: RequestOptions = {
      method: METHODS.GET,
      timeout: 5000,
    },
  ): Promise<XMLHttpRequest> => {
    const {
      headers = {},
      method,
      timeout,
      searchParams = {},
      body = {},
    } = options;

    return new Promise(function (resolve, reject) {
      if (!method) {
        reject('No method');
        return;
      }

      const xhr = new XMLHttpRequest();
      const isGet = method === METHODS.GET;

      const requestUrl = getUrl(url, isGet ? searchParams : undefined);

      xhr.open(method, requestUrl);

      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      });

      xhr.onload = function () {
        resolve(xhr);
      };

      xhr.onabort = reject;
      xhr.onerror = reject;

      xhr.timeout = timeout;
      xhr.ontimeout = reject;

      if (isGet) {
        xhr.send();
      } else {
        const stringfiedBody = JSON.stringify(body);
        xhr.send(stringfiedBody);
      }
    });
  };
}
