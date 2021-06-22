import { getEntries } from "./ApplicationState.js"

export const Entries = () => {
    const entries =  getEntries()
    let allEntriesAsHTML = ""


    for (const entry of entries) {
        allEntriesAsHTML += `
        <article class="Entries">
            <div class="entryHeader">${entry.concept}</div> 
            <div class="entryList">${entry.entry} </div> 
        </article>
        `
    }
    
    return allEntriesAsHTML
}

