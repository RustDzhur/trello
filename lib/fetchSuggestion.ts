import formatTodoForAi from "./formatTodoForAi";

const fetchSuggestion = async (board: Board) => {
	const todos = await formatTodoForAi(board);
	const res = await fetch("/api/generateSummary", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({ todos }),
	});
	const GPTdata = await res.json();
	const { content } = GPTdata;
	return content;
};

export default fetchSuggestion;
