import React, { useEffect } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { useCreateRoom } from "../../Twilio/hooks";

const Twilio = (props) => {
	const { color, text } = props;

	useEffect(() => {
		useCreateRoom(text);
	}, [text]);

	return (
		<View style={styles.wrapper}>
			<Text style={{ color }}>{text}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},
});

export default Twilio;
