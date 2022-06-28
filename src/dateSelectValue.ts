export type DetailConfig = {
	startTime: number
	endTime: number
	value: string
	calcType: 'hour' | 'minute' | 'mill'
}[]

export type RequireData = {
	hour?: number
	minute?: number
	mill?: number
}

export type DateConfigType = {
	requireData: RequireData
	config: DetailConfig
}

/**
 * 提供一个配置。这个requireDate YY-MM-DD HH:mm:ss
 * @param dateConfig
 * @returns
 */
export const dateSelectValue = (
	dateConfig: DateConfigType
): (string | undefined)[] => {
	const { config, requireData } = dateConfig
	let diffValue: number
	const availableValue = config.map(item => {
		diffValue = -1
		//把需要比对的参数的value记录下来
		for (const [key, value] of Object.entries(requireData)) {
			if (item.calcType === key) {
				diffValue = value
			}
		}
		if (diffValue === -1) {
			throw Error(
				'Did you set a correct calcType parameter in the config?'
			)
		}
		if (item.startTime <= diffValue && item.endTime >= diffValue) {
			return item.value
		}
	})
	return availableValue.filter(item => {
		return item !== undefined
	})
}
