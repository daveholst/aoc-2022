import { day1 } from './day1/day1'

/* Day 1*/
async function day1Answer() {
    const inputFile = './src/day1/input.txt'
    console.log('Day 1')
    console.log(await day1(inputFile))
}

day1Answer()
