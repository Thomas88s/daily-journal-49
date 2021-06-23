import { fetchEntries, fetchMoods } from "./ApplicationState.js"
import { DailyJournal } from "./DailyJournal.js"

const mainContainer = document.querySelector("#container")

const container = document.querySelector("#entries")

 export const render = (moodId) => {
    fetchEntries()
    .then(fetchMoods)
    .then( () => {
        container.innerHTML = DailyJournal(moodId)
    })
}


mainContainer.addEventListener(
    "stateChanged",
    () => {
      render()
    }
  )
render()
