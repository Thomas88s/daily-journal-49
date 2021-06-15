
    import { Entries } from "./Entries.js"
    import { JournalForms } from "./JournalForm.js"
    export const DailyJournal = () => {
        return  `

            <div class="journalForms">
                ${JournalForms()}
                </div>
                <div class="entryList">
                ${Entries()}

            </div>
        `
    }
    