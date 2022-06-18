import { dateSelectValue, DateConfigType } from '../src/dateSelectValue'

const dateConfig: DateConfigType = {
	requireData: { hour: 21, minute: 48 },
	config: [
		{
			startTime: 1,
			endTime: 22,
			value: '刚刚',
			calcType: 'hour',
		},
		{
			startTime: 47,
			endTime: 48,
			value: '不久前',
			calcType: 'minute',
		},
	],
}

test('dateSelectValue ', () => {
	expect(dateSelectValue(dateConfig)).toEqual(['刚刚', '不久前'])
})
