    import { saveJournalEntry, getMoods} from "./ApplicationState.js"

    const mainContainer = document.querySelector("#container")

   
    mainContainer.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "recordEntry") {
            const entryDate = document.querySelector("input[name='entryDate']").value
            const entryConcept = document.querySelector("input[name='conceptsCovered']").value
            const entryForJournal = document.querySelector("textarea[name='journalEntry']").value
            const entryMood = document.querySelector("select[name='Mood']").value


            
            const dataToSendToAPI = {
                date:  entryDate,
                concept:  entryConcept,
                entry:  entryForJournal,
                mood: entryMood
            }    
            saveJournalEntry(dataToSendToAPI)
        }})
        
        
        const moodList = () => {
            
            const allMoods = getMoods()
            let html = "<select>"
    
            const listItems =
            `<select class="dropdown" name="receiver" id="receiverSelect">
             <option value="0">Please select an mood...</option>
             ${ allMoods.map(mood => `<option value="${mood.id}">${mood.label}</option>`).join("")}
             </select>`

            html += listItems
        return html
        }
        
        




    export const JournalForms = () => {
        return `
        <h2>Daily Journal</h2>
        <form class="allInputs">
            <fieldset class="input">
                <label for="entryDate">Date</label>
                <input class="box1" type="date" name="entryDate" class="entryForm__date">
            </fieldset>
            <fieldset class="input">
                <label for="conceptsCovered">Concepts Covered</label>
                <input type="text" name="conceptsCovered" class="text">
            </fieldset>
            <fieldset class="input">
                <label for="journalEntry">Journal Entry</label>
                <textarea class="box3" name="journalEntry" rows="3" cols=""></textarea>
            </fieldset>
            <fieldset class="input">
                    <label for="Mood">Mood for the Day</label>
                    <select>
                    ${moodList()} 
                    
                    </select>
            </fieldset>
            <button class="recordButton" id="recordEntry" type="button">Record Journal Entry</button>    
        </form>
        `
    }