
    let applicationState = {
        entries: [],
        moods: []
    }

    const mainContainer = document.querySelector("#container")

    const API = "http://localhost:8088"

    export const fetchEntries = () => {
        return fetch(`${API}/entries`) // Fetch from the API
            .then(response => response.json())  // Parse as JSON
            .then(entries => {
                applicationState.entries = entries
            })
    }

    export const fetchMoods = () => {
        return fetch(`${API}/moods`) // Fetch from the API
            .then(response => response.json())  // Parse as JSON
            .then(moods => {
                applicationState.moods = moods
            })
    }
    

 export const getEntries = () => {
     return [...applicationState.entries]
 }
 export const getMoods = () => {
     return [...applicationState.moods]
 }



 export const saveJournalEntry = (newJournalEntry) => {
    fetch("http://localhost:8088/entries", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newJournalEntry)
    })
        .then( () => {
           fetchEntries()
        })
        .then(
            () => {
               mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
 }

 export const deleteRequest = (id) => {
    return fetch(`${API}/entries/${id}`, { method: "DELETE" })
        .then(
            () => {
                mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
            }
        )
}