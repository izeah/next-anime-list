export const getAnimeResponse = async (resource: string, query?: string) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/${resource}?${query}`,
    {
      cache: "no-store",
    }
  );
  return await response.json();
};

export const getNestedAnimeResponse = async (
  resource: string,
  objectProperty: string
) => {
  const response = await getAnimeResponse(resource);
  return response?.data?.flatMap?.((item: any) => item[objectProperty]);
};

export const reproduce = (data: any, gap: any): any => {
  const first = ~~(Math.random() * (data?.length - gap));
  const last = first + gap;
  return data?.slice?.(first, last);
};
