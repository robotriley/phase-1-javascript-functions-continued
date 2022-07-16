let saturdayFun = (activity = 'roller-skate') => {
    return (`This Saturday, I want to ${activity}!`)
}

let mondayWork = (activity = 'go to the office') => {
    return (`This Monday, I will ${activity}.`)
}

let wrapAdjective = (flair = '*') => {
    let encouragingPromptFunction = (adj = "special") => {
        return `You are ${flair}${adj}${flair}!`
    }
    return encouragingPromptFunction
}