import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import words from './words';
import adjectives from './adjectives';

const pickRandom = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

let currentThing = null;
let	lastThing = null;
let thingBeforeLast = null;

const a = (word) => [ 'a', 'e', 'i', 'o', 'u' ].includes(word[0]) ? `an ${word}` : `a ${word}`;
const is = plural => plural ? 'are' : 'is';
const itThem = plural => plural ? 'them' : 'it';
const itThey = plural => plural ? 'they' : 'it';

const cacheThing = (newThing) => {
	thingBeforeLast = lastThing;
	lastThing = currentThing;
	currentThing = newThing;
};

const adjective = () => {
	return pickRandom(adjectives);
};

const thing = () => {
	const result = `${pickRandom(words)()}`;
	cacheThing(result);
	return `${adjective()} ${result}`;
};

const things = () => {
	const result = `${pickRandom(words)(true)}`;
	cacheThing(result);
	return `${adjective()} ${result}`;
};

const aThing = () => `${a(thing())}`;
const conclussion = plural => `${pickRandom(conclussions)(plural)}.`;

const actions = [
	() => ({
		action: `Peel ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Search your room for ${things()} and ${things()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Force two${things()} to face their problems.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Grab a ${thing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Weight the factors for ending your relationship with ${things()} .`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Twist ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Defeat the ${thing()} with your ${thing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Doubt the ${thing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Take sides in the eternal war between ${things()} and ${things()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Spread ${aThing()} over ${aThing()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Confirm the existance of ${things()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Perform ${aThing()} surgery on ${aThing()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Find the spark in the ${thing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Poke the ${thing()} with your ${thing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Fight evil with the only help of ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Blame ${aThing()} for your problems.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Trade ${aThing()} for a ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Find ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Build ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Yell at your very own ${pickRandom(words)()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Yell at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Gather seven ${things()}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Picture ${aThing()} in your mind.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Look at ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Fight two ${pickRandom(words)(true)}.`,
		conclussion: conclussion(true)
	}),
	() => ({
		action: `Propose marriage to ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Wash your teeth with ${aThing()}.`,
		conclussion: conclussion()
	}),
	() => ({
		action: `Figure how to conquer with world with the help of ${aThing()}.`,
		conclussion: conclussion()
	}),
];

const conclussions = [
	plural => `Then eat ${itThem(plural)}`,
	plural => `Pretend ${itThey(plural)} ${is(plural)} your office`,
	plural => `Be angry with ${itThem(plural)}`,
	plural => `Now write a poem about ${itThem(plural)}`,
	plural => `Ask people around you for feedback`,
	plural => `Ask the ${currentThing} for feedback about your ${thing()} problem`,
	plural => `As you do it jump more and more`,
	plural => `Jump on ${itThem(plural)} repeatedly`,
	plural => `While you do it, cry`,
	plural => `Record ${itThem(plural)}`,
	plural => `Give ${plural ? 'each of them' : 'it'} a name`,
	plural => `Enjoy it`,
	plural => `Whisper to ${itThem(plural)} as you do`,
	plural => `Turn ${itThem(plural)} into ${aThing()}`,
	plural => `Now drink ${itThem(plural)}`,
	plural => `Eat ${itThem(plural)}`,
	plural => `Learn a lesson from ${itThem(plural)}`,
	plural => `Preserve the feeling that is invading you`,
	plural => `Keep ${itThem(plural)} warm`,
	plural => `Film ${itThem(plural)}`,
	plural => `Scare ${itThem(plural)} with ${aThing()}`,
	plural => `Become one with ${itThem(plural)}`,
	plural => `Find beauty in the ${currentThing}`,
	plural => `Tell the ${currentThing} a bedtime story`,
	plural => `Smash the ${currentThing}`,
	plural => `Torment the ${currentThing} with your dental problems`,
	plural => `Fold it into ${aThing()}`,
	plural => `Invite the ${currentThing} to your prom dance`,
	plural => `Melt it`,
	plural => `Find the ${thing()} in the ${lastThing}`,
];

export default class App extends React.Component {

	constructor() {
		super();
		this.state = {
			idea: ''
		};

		this.next = this.next.bind(this);
	}

	next() {
		const action = pickRandom(actions);
		this.setState({ idea: action() });
	}

	render() {
		return (
			<View style={ styles.container }>
				<View style={ styles.ideaContainer }>
					<Text style={ styles.action }>{ this.state.idea.action }</Text>
					<Text style={ styles.conclussion }>{ this.state.idea.conclussion }</Text>
				</View>
				<TouchableOpacity style={ styles.whatNowContainer } onPress={ this.next } >
					<Text style={ styles.whatNow }>What now?</Text>
				</TouchableOpacity>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'space-between',
	},
	ideaContainer: {
		margin: 20,
		marginLeft: 10,
		marginRight: 10,
	},
	action: {
		fontSize: 20,
		marginBottom: 10,
		marginTop: 10,
	},
	conclussion: {
		fontSize: 30,
	},
	whatNowContainer: {
		display: 'flex',
		alignItems: 'center',
		paddingBottom: 50
	},
	whatNow: {
		display: 'flex',
		padding: 10,
		paddingRight: 20,
		paddingLeft: 20,
		shadowOffset: { width: 10, height: 10 },
		shadowColor: '#000',
		overflow: 'hidden',
		fontSize: 30,
		backgroundColor: '#149b3f',
		color: '#FFF',
		borderRadius: 8
	}
});
