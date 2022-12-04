import { service } from "./base";

interface GetExampleReq {
  id: string;
}

interface GetExampleRes {
  id: string;
  name: string;
}

export async function getExample(params: GetExampleReq) {
  return service.get<any, GetExampleRes>("/example", {
    params,
  });
}
