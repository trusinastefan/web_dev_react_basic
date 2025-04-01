export async function getEvent(id: string | undefined) {
  if (id === undefined) {
    return undefined;
  }
  const result = await fetch(`http://localhost:4000/api/events/${id}`);
  if (result.ok) {
    return result.json();
  } else {
    return undefined;
  }
}
