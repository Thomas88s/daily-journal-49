import { fetchEntries, fetchMoods } from "./ApplicationState.js"
import { DailyJournal } from "./DailyJournal.js"

const mainContainer = document.querySelector("#container")

const container = document.querySelector("#entries")

const render = () => {
    fetchEntries()
    .then(fetchMoods)
    .then( () => {
        container.innerHTML = DailyJournal()
    })
}


mainContainer.addEventListener(
    "stateChanged",
    () => {
      render()
    }
  )
render()
