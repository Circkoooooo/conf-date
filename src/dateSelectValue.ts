export type detailConfig = {
	startTime?: number
	endTime?: number
	value?: string
}[]

export type DateConfigType = {
	requireDate: string
	config: detailConfig
}

/**
 * 提供一个配置。这个requireDate YY-MM-DD HH:mm:ss
 * 2022-06-18 00:00:00
 * @param dateConfig
 * @returns
 */
export const dateSelectValue = (
	dateConfig: DateConfigType
): (string | undefined)[] => {
	const { config, requireDate } = dateConfig
	//检测date的格式是否正确。一定要满足YY-MM-DD HH:mm:ss

	//
	const data = getFullData(requireDate)
	const hour = data[3]
	// 得到了可以使用的value
	const availableValue = config.map(item => {
		if (
			item.endTime !== undefined &&
			item.startTime !== undefined &&
			item.startTime <= parseInt(hour) &&
			item.endTime >= parseInt(hour)
		) {
			return item.value
		}
	})
	return availableValue.filter(item => {
		return item !== undefined
	})
}

const getFullData = (requireDate: string): Array<string> => {
	const [date, time] = requireDate.split(' ')
	const [year, mouth, day] = date.split('-')
	const [hour, minute, second] = time.split(':')
	return [year, mouth, day, hour, minute, second]
}
