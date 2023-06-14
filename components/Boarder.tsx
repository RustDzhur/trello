"use client";
import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";

export default function Boarder() {
	return (
		<DragDropContext>
			<Droppable droppableId="board" direction="horizontal">
				{(provided) => <div>Test1</div>}
			</Droppable>
		</DragDropContext>
	);
}
