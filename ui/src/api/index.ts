import { TAction } from "../common/interface/common";

const HTTP_MULTIPLE_CHOICES = 300;

export enum EHttpMethod {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

type TFetchOptions = {
  route: string,
  method: EHttpMethod
};

export class ErrorCode extends Error {
  public code: number;
  constructor(msg: string, code: number) {
    super(msg);
    this.code = code;
  }
}

// todo: disable debugging / remove after all logics tested
const debugging = true;
let debugFetchID = 0;
const log = (state: string, id: number, method: string, uri: string) => {
  if (debugging)
    console.debug(`${method.padEnd(7, " ")} ${id.toString(10).padStart(4, " ")} ${state.padEnd(10, " ")} ${uri}`);
};

// todo: support pass id in url (GET api/article/[hexid])
/** never use fetch in other function than this wrapper!! */
export const withFetch = <TA extends TAction<any, any>>({
  route,
  method,
}: TFetchOptions) =>
  (async (...req: Parameters<TA>) => {
    const debugID = debugFetchID++;

    const restParams = (method !== EHttpMethod.GET || !req?.[0]) ? ""
      : "?" + Object.keys(req[0])
        .sort()
        .map(x => {
          return `${encodeURIComponent(x)}=${encodeURIComponent(req[0][x])}`;
        })
        .join("&")
      ;
    const uri = `api/${route}${restParams}`;

    log("start", debugID, method, uri);

    const resAwaiter = fetch(uri, {
      method,
      headers: {
        "Content-Type": "application/json",
      },
      ...((req && method !== EHttpMethod.GET) ? { body: JSON.stringify(req) } : {}),
    });

    let resJson: ReturnType<TA>;

    const res = (await resAwaiter);

    if (res.status >= HTTP_MULTIPLE_CHOICES) {
      const text = await res.text();
      log("error", debugID, method, uri);
      throw new ErrorCode(`${res.status} ${text}`, res.status);
    }
    resJson = await res.json();

    log("done", debugID, method, uri);
    return resJson;
  }) as (...p: Parameters<TA>) => ReturnType<TA>;
