import { ID, storage } from "@/appwrite";

const uploadImage = async (file: File) => {
	if (!file) return;

	const fileUploaded = await storage.createFile(
		"648a35b681af29753856",
		ID.unique(),
		file
	);
	return fileUploaded;
};

export default uploadImage