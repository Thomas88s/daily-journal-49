import { getJournalEntries } from "./database.js"

export const Entries = () => {
    const entries = getJournalEntries()
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

