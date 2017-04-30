import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity
} from 'react-native';

import words from './words';

const a = (word) => [ 'a', 'e', 'i', 'o', 'u' ].includes(word[0]) ? `an ${word}` : `a ${word}`;
const is = plural => plural ? 'are' : 'is';
const itThem = plural => plural ? 'them' : 'it';
const itThey = plural => plural ? 'they' : 'it';

const actions = [
	() => ({
		action: `Build ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Yell at your very own ${pickRandom(words)()}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Yell at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Gather seven ${pickRandom(words)(true)}.`,
		conclussion: `${pickRandom(conclussions)(true)}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Picture ${a(pickRandom(words)())} in your mind.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Look at ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Fight two ${pickRandom(words)(true)}.`,
		conclussion: `${pickRandom(conclussions)(true)}.`
	}),
	() => ({
		action: `Propose marriage to ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Wash your teeth with ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
	() => ({
		action: `Figure how to conquer with world with the help of ${a(pickRandom(words)())}.`,
		conclussion: `${pickRandom(conclussions)()}.`
	}),
];

const conclussions = [
	plural => `Then eat ${itThem(plural)}`,
	plural => `Pretend ${itThey(plural)} ${is(plural)} your office`,
	plural => `Pretend to be angry with ${itThem(plural)}`,
	plural => `Act as if you were in the middle of a heavy metal concert`,
	plural => `Now write a poem about ${itThem(plural)}`,
	plural => `As you do it move your head more and more`,
	plural => `Ask people around you for feedback`,
	plural => `As you do it jump more and more`,
	plural => `Record ${itThem(plural)}`,
	plural => `Give ${plural ? 'each of them' : 'it'} a name`,
];

const pickRandom = (list) => {
	return list[Math.floor(Math.random() * list.length)];
};

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
