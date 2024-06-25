export async function getAllGenres() {
    const response = await fetch("http://localhost:3000/api/genres", {cache: "no-store"})
    if (!response.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error('Failed to fetch data')
    }
    return response.json()
}