
    const database = {
        entries: []
    }
    const API = "http://localhost:8088/entries"

    export const getEntries = () => {
        return fetch(`${API}/entries`) // Fetch from the API
            .then(response => response.json())  // Parse as JSON
            .then(entries => {
              database.entries = entries
            })
    }
    
    export const getJournalEntries = () => {
        return database.entries.map(entry => ({...entry}))
    }
