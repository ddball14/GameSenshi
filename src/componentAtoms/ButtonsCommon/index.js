import React, { useMemo } from 'react'
import { ButtonsCommon } from './ButtonsCommon'
import {
	buttonCommonAuthOnClick,
	buttonsCommonAuth,
	getButtonsCommon,
	buttonsCommonChatAndCheckout,
} from './utils'
import { withLastLocation } from 'routes'

const ButtonsCommonOptioned = props => {
	const { buttons, ...otherProps } = props
	const buttons_ = useMemo(() => getButtonsCommon(buttons), [buttons])
	return <ButtonsCommon buttons={buttons_} {...otherProps} />
}

const ButtonsCommonPropedAuth = withLastLocation(props => {
	const { lastLocation, ...restProps } = props
	const onClick = useMemo(() => buttonCommonAuthOnClick(lastLocation), [
		lastLocation,
	])
	return (
		<ButtonsCommonOptioned
			onClick={onClick}
			buttons={buttonsCommonAuth}
			{...restProps}
		/>
	)
})

const ButtonsCommonChatAndCheckout = () => {
	return <ButtonsCommonOptioned buttons={buttonsCommonChatAndCheckout} />
}

export {
	ButtonsCommonPropedAuth,
	ButtonsCommonOptioned,
	ButtonsCommonChatAndCheckout,
}
