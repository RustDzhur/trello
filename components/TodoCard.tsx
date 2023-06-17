"use client";
import React from "react";
import {
	DraggableProvidedDragHandleProps,
	DraggableProvidedDraggableProps,
} from "react-beautiful-dnd";

type Props = {
	todo: Todo;
	index: number;
	id: TypedColumn;
	innerRef: (element: HTMLElement | null) => void;
	draggbleProps: DraggableProvidedDraggableProps;
	dragHandleProps: DraggableProvidedDragHandleProps | null | undefined;
};

export default function TodoCard({
	todo,
	index,
	id,
	innerRef,
	draggbleProps,
	dragHandleProps,
}: Props) {
	return <div>TodoCard</div>;
}
