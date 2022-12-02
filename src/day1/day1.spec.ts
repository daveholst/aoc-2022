import { getLargestElement, groupData, tallyData } from './day1'

const testData = [
    '1000',
    '2000',
    '3000',
    '',
    '4000',
    '',
    '5000',
    '6000',
    '',
    '7000',
    '8000',
    '9000',
    '',
    '10000',
]

const groupedDataResult = [
    ['1000', '2000', '3000'],
    ['4000'],
    ['5000', '6000'],
    ['7000', '8000', '9000'],
    ['10000'],
]

const tallyDataResult = [6000, 4000, 11000, 24000, 10000]

describe('groups data correctly', () => {
    it('transforms test array', () => {
        expect(groupData(testData)).toEqual(expect.arrayContaining(groupedDataResult))
    })
    it('sum/tally test array', () => {
        expect(tallyData(groupedDataResult)).toEqual(expect.arrayContaining(tallyDataResult))
    })
    it('returns correct max and index', () => {
        expect(getLargestElement(tallyDataResult)).toEqual(
            expect.objectContaining({
                largest: 24000,
                index: 3,
            })
        )
    })
})
