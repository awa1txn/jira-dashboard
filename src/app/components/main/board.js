"use client";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

import { useEffect, useState } from 'react';


const tasks = [
    { id: "1", taskType: 0, assignedUsers:[1,4], content: "First task", attachedImage: 'https://imgs.search.brave.com/1xDrqHJNvHXCJnq33MhXEETll9DaIl0ZiGvA0aBedf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9sem55MzNo/bzFnNDUvNzBucnQz/bFNVOFRjcTNsRVpY/MHZ6Ni8zNDEyZTFj/YTczYjM4MzQ4NjZh/NjQwNzU3ZWE4NjIw/Zi9Ib3dfdG9fZWRp/dF9hX3NjcmVlbnNo/b3Q_dz0xNDAw', description: `Lorem Ipsum has been the industry's standard dummy text ever since`, commentsAmount: 5, filesApplied: 3, likes: 0  },
    { id: "2", taskType: 1, assignedUsers:[3], content: "Second task", attachedImage: 'https://imgs.search.brave.com/1xDrqHJNvHXCJnq33MhXEETll9DaIl0ZiGvA0aBedf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9sem55MzNo/bzFnNDUvNzBucnQz/bFNVOFRjcTNsRVpY/MHZ6Ni8zNDEyZTFj/YTczYjM4MzQ4NjZh/NjQwNzU3ZWE4NjIw/Zi9Ib3dfdG9fZWRp/dF9hX3NjcmVlbnNo/b3Q_dz0xNDAw', description: `Lorem Ipsum has been the industry's standard dummy text ever since`, commentsAmount: 5, filesApplied: 3, likes: 0  },
    { id: "3", taskType: 2, assignedUsers:[6], content: "Third task", attachedImage: 'https://imgs.search.brave.com/1xDrqHJNvHXCJnq33MhXEETll9DaIl0ZiGvA0aBedf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9sem55MzNo/bzFnNDUvNzBucnQz/bFNVOFRjcTNsRVpY/MHZ6Ni8zNDEyZTFj/YTczYjM4MzQ4NjZh/NjQwNzU3ZWE4NjIw/Zi9Ib3dfdG9fZWRp/dF9hX3NjcmVlbnNo/b3Q_dz0xNDAw', description: `Lorem Ipsum has been the industry's standard dummy text ever since`, commentsAmount: 5, filesApplied: 3, likes: 0  },
    { id: "4", taskType: 3, assignedUsers:[2,7], content: "Fourth task", attachedImage: 'https://imgs.search.brave.com/1xDrqHJNvHXCJnq33MhXEETll9DaIl0ZiGvA0aBedf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9sem55MzNo/bzFnNDUvNzBucnQz/bFNVOFRjcTNsRVpY/MHZ6Ni8zNDEyZTFj/YTczYjM4MzQ4NjZh/NjQwNzU3ZWE4NjIw/Zi9Ib3dfdG9fZWRp/dF9hX3NjcmVlbnNo/b3Q_dz0xNDAw', description: `Lorem Ipsum has been the industry's standard dummy text ever since`, commentsAmount: 5, filesApplied: 3, likes: 0  },
    { id: "5", taskType: 4, assignedUsers:[9], content: "Fifth task", attachedImage: 'https://imgs.search.brave.com/1xDrqHJNvHXCJnq33MhXEETll9DaIl0ZiGvA0aBedf4/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMuY3RmYXNzZXRz/Lm5ldC9sem55MzNo/bzFnNDUvNzBucnQz/bFNVOFRjcTNsRVpY/MHZ6Ni8zNDEyZTFj/YTczYjM4MzQ4NjZh/NjQwNzU3ZWE4NjIw/Zi9Ib3dfdG9fZWRp/dF9hX3NjcmVlbnNo/b3Q_dz0xNDAw', description: `Lorem Ipsum has been the industry's standard dummy text ever since`, commentsAmount: 5, filesApplied: 3, likes: 0  }
  ];



const taskStatus = {
    requested: {
      name: "Requested",
      items: tasks
    },
    toDo: {
      name: "To do",
      items: []
    },
    inProgress: {
      name: "In Progress",
      items: []
    },
    done: {
      name: "Done",
      items: []
    }
  };

const taskTypes = [
  <div className="bg-[#F7F0FF] text-[#BB80FF] rounded px-2">Research</div>,
  <div className="bg-[#F0F4FF] text-[#306BFF] rounded px-2">UI Design</div>,
  <div className="bg-[#F0FAFF] text-[#33BFFF] rounded px-2">Development</div>,
  <div className="bg-[#FFF6F0] text-[#FFB580] rounded px-2">UX Writing</div>,
  <div className="bg-[#F3FAF0] text-[#78C552] rounded px-2">Planning</div>
]


  
  const onDragEnd = (result, columns, setColumns) => {
    if (!result.destination) return;
    const { source, destination } = result;
  
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);
      destItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems
        }
      });
    }
  };

export default function Board() {

    const [columns, setColumns] = useState(taskStatus);
    return (
      <div className="lol">
        <div className="flex gap-5"
        >
          <DragDropContext
            onDragEnd={(result) => onDragEnd(result, columns, setColumns)}
          >
            {Object.entries(columns).map(([columnId, column], index) => {
              return (
                <div
                  className="flex flex-col items-center w-1/4"
                  key={columnId}
                >
                  <div className="w-10/12">
                    <Droppable droppableId={columnId} key={columnId}>
                      {(provided, snapshot) => {
                        return (
                          <div
                            {...provided.droppableProps}
                            ref={provided.innerRef}
                            className={`p-2 min-h-36 rounded-2xl`}
                          >
                            {column.items.map((item, index) => {
                              return (
                                <Draggable
                                  key={item.id}
                                  draggableId={item.id}
                                  index={index}
                                >
                                  {(provided, snapshot) => {
                                    return (
                                      <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                        className={`select-none my-5 h-30 text-black border-2 border-black rounded-2xl border-slate-300 ${snapshot.isDragging ? 'bg-slate-200' : 'white' }`}
                                      >
                                        <div className="px-5 py-3">
                                        <p className="font-bold text-slate-700">{item.content}</p>
                                        {item.attachedImage !== '' ?
                                        <img src={item.attachedImage} className="w-fit rounded-xl py-2"/> :
                                        <p className="text-xs text-slate-400">
                                          {item.description}
                                        </p>
                                        }
                                        </div>

                                        <div className="flex justify-between px-5">
                                          {taskTypes.map((el, i)=>
                                            item.taskType === i ? el : null
                                          )}
                                          <div className="flex items-center">
                                          {item.assignedUsers.map((el, i)=>{
                                            if( i === 0) {
                                              return <>
                                              <img className="w-8 h-8 rounded-full" src={`https://rickandmortyapi.com/api/character/avatar/${el}.jpeg`} alt="user profile" />
                                          </>}
                                            else{
                                              return <>
                                              <img className="w-8 h-8 -ml-3 rounded-full" src={`https://rickandmortyapi.com/api/character/avatar/${el}.jpeg`} alt="user profile" />
                                              </>
                                            }
                                          })}
                                          </div>
                                        </div>

                                        <div className="border-b-2 border-b-slate-200 my-5">
                                        </div>
                                        
                                        
                                      </div>
                                    );
                                  }}
                                </Draggable>
                              );
                            })}

                            {provided.placeholder}
                          </div>
                        );
                      }}
                    </Droppable>
                  </div>
                </div>
              );
            })}
          </DragDropContext>
        </div>
      </div>
    );
}