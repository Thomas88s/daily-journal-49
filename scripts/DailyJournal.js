
    import { Entries } from "./Entries.js"
    import { JournalForms } from "./JournalForm.js"
    import { MoodFilter, findEntriesByMood } from "./Moods.js"
    
    export const DailyJournal = (moodId) => {
        return  `

            <div class="journalForms">
                ${JournalForms()}
            </div>
            <div class="filters">
                ${MoodFilter()}
            </div>
            <div class="foundEntries">
                ${ findEntriesByMood(moodId) }
            </div>
            <div class="entryList">
                ${Entries()}
            </div>
        `
    }
    

    