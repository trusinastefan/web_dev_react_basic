export async function getEvents() {
  const result = await fetch(`http://localhost:4000/api/events`);
  if (result.ok) {
    return result.json();
  } else {
    return undefined;
  }
}
