import React from 'react'
import { Container } from 'unstated'
import Interweave from 'interweave'
import reactElementToJSXString from 'react-element-to-jsx-string'

import { STATE, SET_STATE, RESET_STATE } from 'state/constants'

const STORE_MODAL = 'Modal'
const STORE_MODAL_STATE_BODY = 'body'
const STORE_MODAL_STATE_IS_OPEN = 'isOpen'
const STORE_MODAL_STATE_TITLE = 'title'
const STORE_MODAL_STATE_LOADER = 'loader'
const STORE_MODAL_STATE_CONTINUED_CALLBACK = 'callback'
const SHOW = 'show'
const CLOSE = 'close'
const TOGGLE = 'toggle'
const SET_ITEM = 'setItem'
const GET_ITEM = 'getItem'
const INITIALIZE = 'initialize'
const REMOVE_ITEM = 'removeItem'
const ON_AUTH_STATE_CHANGE = 'onAuthStateChange'
const PROCESS_REDIRECT_RESULT = 'processRedirectResult'
const ON_CONTINUE = 'onSuccessfulSubmission'

const defaultValues = () => ({
	[STORE_MODAL_STATE_BODY]: '',
	[STORE_MODAL_STATE_TITLE]: '',
	[STORE_MODAL_STATE_IS_OPEN]: false,
	[STORE_MODAL_STATE_LOADER]: false,
	[STORE_MODAL_STATE_CONTINUED_CALLBACK]: () => {},
})

class StoreModal extends Container {
	constructor() {
		super()
		this[STATE] = defaultValues()
		this[SET_STATE] = this[SET_STATE].bind(this)
	}

	[TOGGLE] = () => {
		this.setState(state => {
			state[STORE_MODAL_STATE_IS_OPEN] = !state[STORE_MODAL_STATE_IS_OPEN]
			return state
		})
		return this
	};

	[RESET_STATE] = () => {
		this.setState(defaultValues())
		return this
	};

	[CLOSE] = () => {
		this.setState({ [STORE_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[ON_CONTINUE] = () => {
		this[STATE][STORE_MODAL_STATE_CONTINUED_CALLBACK]()
		this[RESET_STATE]()
		return
	};

	[GET_ITEM] = () => {
		return JSON.parse(sessionStorage.getItem(STORE_MODAL))
	};

	[REMOVE_ITEM] = () => {
		sessionStorage.removeItem(STORE_MODAL)
		return this
	};

	[SET_ITEM] = (title = '', body = '', restProps = {}) => {
		sessionStorage.setItem(
			STORE_MODAL,
			JSON.stringify({
				...restProps,
				[STORE_MODAL_STATE_BODY]: body,
				[STORE_MODAL_STATE_TITLE]: title,
			})
		)
		return this
	};

	[SHOW] = (
		title = '',
		body = '',
		loader = false,
		afterContinueCallback = () => {}
	) => {
		this.setState({
			[STORE_MODAL_STATE_IS_OPEN]: true,
			[STORE_MODAL_STATE_BODY]: body,
			[STORE_MODAL_STATE_TITLE]: title,
			[STORE_MODAL_STATE_LOADER]: loader,
			[STORE_MODAL_STATE_CONTINUED_CALLBACK]: afterContinueCallback,
		})
		return this
	};

	[INITIALIZE] = () => {
		const item = this[GET_ITEM]()
		this[REMOVE_ITEM]()
		if (item) {
			this.setState({
				[STORE_MODAL_STATE_BODY]: (
					<Interweave content={item[STORE_MODAL_STATE_BODY]} />
				),
				[STORE_MODAL_STATE_IS_OPEN]: true,
				[STORE_MODAL_STATE_TITLE]: (
					<Interweave content={item[STORE_MODAL_STATE_TITLE]} />
				),
				[STORE_MODAL_STATE_LOADER]: true,
			})
		}
		return this
	};

	[ON_AUTH_STATE_CHANGE] = () => {
		const item = this[GET_ITEM]()
		!item && this.setState({ [STORE_MODAL_STATE_IS_OPEN]: false })
		return this
	};

	[PROCESS_REDIRECT_RESULT] = (
		LinkedCallBack = () => {},
		linkingCallBack = () => {}
	) => {
		const item = this[GET_ITEM]()
		const {
			name1,
			name2,
			isLinked,
			provider2,
			//credential,
		} = item
		if (isLinked) {
			LinkedCallBack(name2)
			this[REMOVE_ITEM]()
		} else if (item) {
			// show modal on link redirect
			const JSXString = reactElementToJSXString(
				<span>
					Please wait while we linking your
					<b> {name2} </b>
					account to your<b> {name1} </b>account.
				</span>
			)
			const restProps = {
				...item,
				isLinked: true,
			}
			this[SET_ITEM]('Linking...', JSXString, restProps)
			// if (provider2 === 'password') {
			// TODO allow user to create password account and link to existing social account
			// } else {
			linkingCallBack(provider2)
			//}
		}
		return this
	}
}

export {
	StoreModal,
	STORE_MODAL_STATE_BODY,
	STORE_MODAL_STATE_IS_OPEN,
	STORE_MODAL_STATE_TITLE,
	STORE_MODAL_STATE_LOADER,
	STORE_MODAL_STATE_CONTINUED_CALLBACK,
	SHOW,
	CLOSE,
	TOGGLE,
	GET_ITEM,
	SET_ITEM,
	INITIALIZE,
	REMOVE_ITEM,
	ON_AUTH_STATE_CHANGE,
	PROCESS_REDIRECT_RESULT,
	ON_CONTINUE,
	SET_STATE,
	RESET_STATE,
}
