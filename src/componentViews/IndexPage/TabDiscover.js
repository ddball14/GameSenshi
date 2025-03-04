import React from 'react'
import audioSample from 'assets/audio/sampleVoice.mp3'
import { stopUndefined } from 'utils'
import { Exports } from 'componentpMultiOrganisms'
import { Row } from 'reactstrap'
import suffle from 'array-shuffle'

const {
	CardUserPropedDiscover,
	TabCommon,
	TAB_COMMON_TAB_NAME,
	TAB_COMMON_TAB_CONTENT,
} = stopUndefined(Exports)

const CARD_DISCOVER_NAME = 'name'
const CARD_DISCOVER_IMAGE = 'image'
const CARD_DISCOVER_GENDER = 'gender'
const CARD_DISCOVER_AUDIO = 'audio'
const CARD_DISCOVER_PRICE = 'price'
const CARD_DISCOVER_DESCRIPTION = 'description'

const discoverSections = [
	{
		[CARD_DISCOVER_NAME]: 'Dylan Wyatt',
		[CARD_DISCOVER_IMAGE]: require('assets/img/christian.jpg'),
		[CARD_DISCOVER_GENDER]: false,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '30',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Mila Skylar',
		[CARD_DISCOVER_IMAGE]: require('assets/img/johana.jpg'),
		[CARD_DISCOVER_GENDER]: true,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '40',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Mark Johnsson',
		[CARD_DISCOVER_IMAGE]: require('assets/img/mike.jpeg'),
		[CARD_DISCOVER_GENDER]: false,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '50',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
	{
		[CARD_DISCOVER_NAME]: 'Olivia Smith',
		[CARD_DISCOVER_IMAGE]: require('assets/img/olivia.jpg'),
		[CARD_DISCOVER_GENDER]: true,
		[CARD_DISCOVER_AUDIO]: audioSample,
		[CARD_DISCOVER_PRICE]: '60',
		[CARD_DISCOVER_DESCRIPTION]: 'hello',
	},
]

const Cards = discoverSections.map(card => {
	const {
		[CARD_DISCOVER_NAME]: name,
		[CARD_DISCOVER_IMAGE]: src,
		[CARD_DISCOVER_GENDER]: gender,
		[CARD_DISCOVER_PRICE]: price,
		[CARD_DISCOVER_AUDIO]: audioSrc,
		[CARD_DISCOVER_DESCRIPTION]: description,
	} = card
	return (
		<CardUserPropedDiscover
			key={name}
			audioSrc={audioSrc}
			name={name}
			src={src}
			gender={gender}
			price={price}
			description={description}
		/>
	)
})
const tabNames = ['Dota2', 'PUBG', 'LOL', 'Apex', 'Fortnite']

const tabs = tabNames.map(tabname => {
	return {
		[TAB_COMMON_TAB_NAME]: tabname,
		[TAB_COMMON_TAB_CONTENT]: <Row>{suffle(Cards)}</Row>,
	}
})

const TabDiscover = () => {
	return <TabCommon tabs={tabs} />
}

export { TabDiscover }
