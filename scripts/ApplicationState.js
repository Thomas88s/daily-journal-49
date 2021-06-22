
    let applicationState = {
        entries: []
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
    
 export const getEntries = () => {
     return [...applicationState.entries]
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