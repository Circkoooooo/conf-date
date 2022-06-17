import { dateSelectValue, DateConfigType } from '../src/dateSelectValue'

const dateConfig: DateConfigType = {
	requireDate: '2022-06-18 10:00:00',
	config: [
		{
			startTime: 1,
			endTime: 12,
			value: '刚刚',
		},
		{
			startTime: 2,
			endTime: 12,
			value: '不久前',
		},
	],
}

test('dateSelectValue ', () => {
	expect(dateSelectValue(dateConfig)).toEqual(['刚刚', '不久前'])
})
