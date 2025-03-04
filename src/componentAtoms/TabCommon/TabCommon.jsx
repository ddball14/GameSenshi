import React, { useState, useCallback, Fragment } from 'react'
import { Nav, NavItem, NavLink, TabContent, TabPane, Row } from 'reactstrap'
import ButtonBase from '@material-ui/core/ButtonBase'
import classnames from 'classnames'

const TAB_COMMON_TAB_NAME = 'tabName'
const TAB_COMMON_TAB_CONTENT = 'tabContent'

const TabCommon = props => {
	const { tabs } = props
	const [tabName, setTabName] = useState(tabs[0][TAB_COMMON_TAB_NAME])

	return (
		<Fragment>
			<Nav className='nav-pills-neutral' pills role='tablist'>
				{tabs.map(tab => {
					const { [TAB_COMMON_TAB_NAME]: tabName_ } = tab
					const toggleTabs = useCallback(
						e => {
							e.preventDefault()
							setTabName(tabName_)
						},
						[tabName_]
					)

					return (
						<NavItem style={{ zIndex: 99 }} key={tabName_}>
							<NavLink
								className={classnames({
									active: tabName === tabName_,
								})}
								onClick={toggleTabs}
								tag={ButtonBase}
							>
								{tabName_}
							</NavLink>
						</NavItem>
					)
				})}
			</Nav>
			<TabContent activeTab={tabName}>
				{tabs.map(tab => {
					const {
						[TAB_COMMON_TAB_NAME]: tabName_,
						[TAB_COMMON_TAB_CONTENT]: tabContent,
					} = tab
					return (
						<TabPane tabId={tabName_} key={tabName_}>
							{tabContent}
						</TabPane>
					)
				})}
			</TabContent>
		</Fragment>
	)
}

export { TabCommon, TAB_COMMON_TAB_NAME, TAB_COMMON_TAB_CONTENT }
