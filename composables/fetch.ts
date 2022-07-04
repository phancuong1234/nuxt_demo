export const fetchApi = async (
  url: string,
  method: "get" | "post" | "patch",
  body?: Record<any, any>
) => {
  return await useFetch(url, {
    baseURL: "https://62c2c1f9876c4700f52d722a.mockapi.io/",
    body,
    method,
  });
};
