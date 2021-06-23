

    import { getMoods, getEntries } from "./ApplicationState.js"

    import {render} from "./main.js"
    
    
    
    const mainContainer = document.querySelector("#container")
    const entries = getEntries()
    
   
    mainContainer.addEventListener("change", changeEvent => {
        if (changeEvent.target.name === "moodFilter") {
           const filteredMoodId = parseInt(changeEvent.target.value)
            render(filteredMoodId)
        }
    })
    // mainContainer.dispatchEvent(new CustomEvent("stateChanged"))
    
    
    export const findEntriesByMood = (moodId) => {
        
        const entries = getEntries()
        
        let allEntriesAsHTML = ""
        
        const filteredEntries = entries.filter(entry => entry.moodId === moodId)
         for (const entry of filteredEntries) {
             if (entry !== null) {
              

        allEntriesAsHTML += `
        <article class="Entries">
            <div class="entryHeader">${entry.concept}</div> 
            <div class="entryList">${entry.entry} </div> 
            <div class="entryDate">${entry.date}</div>
            <button class="button" id="entries--${entry.id}">Delete</button>

        </article>
        `
      
         return allEntriesAsHTML
        
        } else {
             allEntriesAsHTML = ""

            return allEntriesAsHTML
        }
    }}

      
    export const MoodFilter = () => {
        const allMoods = getMoods()
        return `
            <fieldset class="fieldset">
                <legend>Filter Journal Entries by Mood</legend>
                ${
                    allMoods.map(
                        (mood) => {
                            return `<input type="radio" name="moodFilter" value="${ mood.id }"/>
                            <label for="moodFilter--happy">${ mood.label }</label>
                            `
                        }
                    ).join("")
                }
            </fieldset>
            `
    }