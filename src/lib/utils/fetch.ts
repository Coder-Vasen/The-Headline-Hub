export class HttpError extends Error {
  constructor(public response: Response) {
    super(`${response.status} ${response.statusText}`);
  }
}

// Custom fetch wrapper with types and custom error
export const simpleFetch = async <ResponseType = unknown>(url: string, options: RequestInit = {}) => {
    const result = await fetch(url,options);
    if (!result.ok){
        throw new HttpError(result);
    }

    return (await result.json()) as ResponseType;
}