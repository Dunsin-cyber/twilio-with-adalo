import { API_URL } from "./index";
import axios from "axios";
import Video from "twilio-video";

export const useCreateRoom = async (name) => {
	await axios
		.post(`${API_URL}/room`, { room: name })
		.then((res) => {
			console.log(res.data);
			return res.data;
		})
		.catch((err) => {
			console.error("err", err);
		});
	// client.video.v1.rooms
	// 	.create({ uniqueName: name })
	// 	.then((room) => console.log(room.sid));
};

export const joinVideoRoom = async (roomName, token) => {
	// join the video room with the Access Token and the given room name

	const room = await Video.connect(token, {
		room: roomName,
	});
	return room;
};