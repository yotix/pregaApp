import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

export default class RadioButtons extends Component {
	render() {
		const { options, value, onChange } = this.props;

		return (
			<View>
				{options.map(item => {
					return (
						<View key={item.key} style={styles.buttonContainer}>
							<TouchableOpacity
								style={styles.square}
								onPress={() => {
									onChange(item.key);
								}}
								>
								{value === item.key && <View style={styles.checkedSquare} />}
							</TouchableOpacity>
							<Text style={styles.text}>{item.text}</Text>
						</View>
					);
				})}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	buttonContainer: {
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: 30,
	},

	square: {
		height: 30,
		width: 34,
		borderWidth: 2,
		borderRadius: 2,
		borderColor: '#a8dad6',
		alignItems: 'center',
		justifyContent: 'center',
		marginLeft: 20,
		marginRight: 20
	},
	checkedSquare: {
		width: 26,
		height: 24,
		backgroundColor: '#4db068',
	},
	text: {
		fontSize: 18
	}
});