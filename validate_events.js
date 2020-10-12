const assert = require('assert')
const fs = require('fs')

let events = fs.readFileSync('events.json').toString()

events = JSON.parse(events)

events.forEach(e => {
    console.log('Verifying title:', e.title)
    assert(e.title)
    console.log('Verifying location:', e.location)
    assert(e.location)
    console.log('Verifying start time:', e.start)
    assert(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(e.start))
    console.log('Verifying end time:', e.end)
    assert(/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}/.test(e.end))
    if (e.url) {
        console.log('Verifying url:', e.url)
        new URL(e.url)
    }
})

console.log('All OK.')