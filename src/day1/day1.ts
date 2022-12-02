import { promises as fsPromises } from 'fs'

async function asyncReadFile(filename: string) {
    try {
        const contents = await fsPromises.readFile(filename, 'utf-8')
        const arr = contents.split(/\r?\n/)
        return arr
    } catch (err) {
        console.log(err)
    }
}

export function groupData(data: string[]) {
    const groupedData: string[][] = []
    let tempDataBlock: string[] = []
    data.forEach((value, index) => {
        // if you come to a blank string, zero out the tempDataBlock and move on
        if (value === '') {
            tempDataBlock = []
            return
        }
        // add value to the tempDataBlock
        tempDataBlock.push(value)
        // check if it is the last value for this group or the last value
        const isLastValue = data.length === index + 1
        if (data[index + 1] === '' || isLastValue) {
            groupedData.push(tempDataBlock)
        }
    })
    return groupedData
}

export function tallyData(data: string[][]) {
    return data.map(e =>
        // e.map((e) => new Number(e))
        e.reduce((a, b) => +a + +b, 0)
    )
}

export function getLargestElement(data: number[]) {
    const largest = Math.max(...data)
    const index = data.indexOf(largest)
    return {
        largest,
        index,
    }
}

export async function day1(inputFile: string) {
    // Pull Data in
    const inputData = await asyncReadFile(inputFile)
    if (!inputData) {
        console.error('No data in input file @ ' + inputFile)
        return
    }
    // group data
    const groupedData = groupData(inputData)
    // tally data
    const talliedData = tallyData(groupedData)
    // get largest and return
    return getLargestElement(talliedData)
}
