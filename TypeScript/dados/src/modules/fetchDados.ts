export default async function fetchData<Interface>(
  url: string,
): Promise<Interface | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error('Error: ' + response.status);
    const json = await response.json();
    return json;
  } catch (e) {
    if (e instanceof Error) console.log('fetchData: ' + e);

    return null;
  }
}
