import { getEntries, getMoods, deleteRequest } from "./ApplicationState.js"


const mainContainer = document.querySelector("#container")

mainContainer.addEventListener("click", click => {
    if (click.target.id.startsWith("entries--")) {
        const [, entriesId] = click.target.id.split("--")
        deleteRequest(parseInt(entriesId))
    }
})


export const Entries = () => {
    const entries =  getEntries()
    const moods =  getMoods()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
      
        allEntriesAsHTML += `
        <article class="Entries">
            <div class="entryHeader">${entry.concept}</div> 
            <div class="entryList">${entry.entry} </div> 
            <div class="entryDate">${entry.date}</div>
            <button class="button" id="entries--${entry.id}">Delete</button>

        </article>
        `
    }
    
    return allEntriesAsHTML
}

