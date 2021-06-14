
    const database = {
        "entries": [
            {
                id: 1,
                date: "07/24/2025",
                concept: "HTML & CSS",
                entry: "We talked about HTML components and how to make grid layouts with Flexbox in CSS.",
                mood: "Ok"
            },
            {
                id: 2,
                date: "08/24/2025",
                concept: "Fish",
                entry: "We learned about Martin and his awesome aquarium!",
                mood: "Totally Stoked"
            },
            {
                id: 3,
                date: "09/24/2025",
                concept: "Toys",
                entry: "Something about some weird dude and his toys or something. I don't know, I wasn't really listening.",
                mood: "Ehh..."
            },
            {
                id: 4,
                date: "10/24/2025",
                concept: "Dogs",
                entry: "More of the same stuff. Something about walking dogs. Whatever.",
                mood: "Bored"
            }

        ]
    }
    
    export const getJournalEntries = () => {
        const copyOfData = database.entries.map(entry => ({...entry}))
        return copyOfData
}
    
    