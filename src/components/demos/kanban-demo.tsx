"use client"

import { useMemo } from "react"
import {
  KanbanBoard,
  KanbanCard,
  KanbanColumn,
  KanbanList,
  useKanban,
  KanbanDragOverlay,
  verticalListSortingStrategy,
  rectSortingStrategy,
} from "@/components/ui/kanban"
import { Badge } from "@/components/ui/badge"

type Task = {
  id: string
  title: string
  tag: string
}

type Column = {
  id: string
  title: string
  tasks: Task[]
}

const initialData: Column[] = [
  {
    id: "todo",
    title: "To Do",
    tasks: [
      { id: "t1", title: "Research dnd-kit", tag: "Research" },
      { id: "t2", title: "Install dependencies", tag: "Tech" },
    ],
  },
  {
    id: "in-progress",
    title: "In Progress",
    tasks: [
      { id: "t3", title: "Implement KanbanBoard", tag: "Dev" },
    ],
  },
  {
    id: "done",
    title: "Done",
    tasks: [
      { id: "t4", title: "Create Plan", tag: "Planning" },
    ],
  },
]

export function KanbanDemo() {
  const {
      columns,
      activeTask,
      activeColumn,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialData)

  return (
    <KanbanBoard 
    onDragStart={handleDragStart} 
    onDragOver={handleDragOver} 
    onDragEnd={handleDragEnd} 
    sensors={sensors}
    className="h-[500px]"
    >
        <KanbanList items={columns.map(c => c.id)} className="w-full">
            {columns.map((col) => (
                <KanbanColumn key={col.id} id={col.id} className="w-[300px]">
                    <div className="flex items-center justify-between font-semibold mb-4 text-sm uppercase text-muted-foreground">
                        {col.title}
                        <Badge variant="outline">{col.tasks.length}</Badge>
                    </div>
                    
                    <KanbanList items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} className="flex-col gap-2 min-h-[100px]">
                        {col.tasks.map((task) => (
                            <KanbanCard key={task.id} id={task.id} className="p-3 bg-card border rounded-md shadow-sm hover:shadow-md transition-all">
                                <div className="flex flex-col gap-2">
                                    <span className="font-medium text-sm">{task.title}</span>
                                    <div className="flex pb-1">
                                        <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5">{task.tag}</Badge>
                                    </div>
                                </div>
                            </KanbanCard>
                        ))}
                    </KanbanList>
                </KanbanColumn>
            ))}
        </KanbanList>

        <KanbanDragOverlay>
            {activeColumn ? (
                <div className="w-[300px] bg-muted/50 p-4 rounded-md opacity-80 border-2 border-primary">
                    {activeColumn.title}
                </div>
            ) : activeTask ? (
                <div className="p-3 bg-card border rounded-md shadow-md w-[280px] cursor-grabbing">
                    <div className="flex flex-col gap-2">
                            <span className="font-medium text-sm">{activeTask.title}</span>
                            <div className="flex pb-1">
                            <Badge variant="secondary" className="text-[10px] px-1 py-0 h-5">{activeTask.tag}</Badge>
                            </div>
                    </div>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>

  )
}

export function DragAndDropList() {
  const initialSimpleData: Column[] = [
    {
      id: "list",
      title: "Vertical List",
      tasks: [
        { id: "item-1", title: "Item 1", tag: "A" },
        { id: "item-2", title: "Item 2", tag: "B" },
        { id: "item-3", title: "Item 3", tag: "C" },
        { id: "item-4", title: "Item 4", tag: "D" },
        { id: "item-5", title: "Item 5", tag: "E" },
      ],
    },
  ]

  const {
      columns,
      activeTask,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialSimpleData)

  const col = columns[0];

  return (
    <KanbanBoard 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDragEnd={handleDragEnd} 
      sensors={sensors}
      className="flex-col h-auto"
    >
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg bg-background">
            <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">Reorder Items</h3>
            <KanbanList 
                items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} 
                className="flex-col gap-2"
                strategy={verticalListSortingStrategy}
            >
                {col.tasks.map((task) => (
                    <KanbanCard key={task.id} id={task.id} className="group flex items-center justify-between p-3 bg-card border rounded-md shadow-sm hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3">
                             <div className="text-muted-foreground/50 group-hover:text-foreground cursor-grab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                             </div>
                             <span>{task.title}</span>
                        </div>
                        <Badge variant="outline">{task.tag}</Badge>
                    </KanbanCard>
                ))}
            </KanbanList>
        </div>

        <KanbanDragOverlay>
             {activeTask ? (
                <div className="flex items-center justify-between p-3 bg-card border rounded-md shadow-xl w-[400px] cursor-grabbing active:scale-105 transition-transform">
                     <div className="flex items-center gap-3">
                         <div className="text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                         </div>
                         <span>{activeTask.title}</span>
                    </div>
                    <Badge variant="outline">{activeTask.tag}</Badge>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}

export function KanbanSortable() {
  const initialSimpleData: Column[] = [
    {
      id: "list",
      title: "Sortable List",
      tasks: [
        { id: "item-1", title: "Item 1", tag: "A" },
        { id: "item-2", title: "Item 2", tag: "B" },
        { id: "item-3", title: "Item 3", tag: "C" },
        { id: "item-4", title: "Item 4", tag: "D" },
        { id: "item-5", title: "Item 5", tag: "E" },
      ],
    },
  ]

  const {
      columns,
      activeTask,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialSimpleData)

  const col = columns[0];

  return (
    <KanbanBoard 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDragEnd={handleDragEnd} 
      sensors={sensors}
      className="flex-col h-auto"
    >
        <div className="w-full max-w-md mx-auto p-4 border rounded-lg bg-background">
            <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">Sortable List</h3>
            <KanbanList 
                items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} 
                className="flex-col gap-2"
                strategy={verticalListSortingStrategy}
            >
                {col.tasks.map((task) => (
                    <KanbanCard key={task.id} id={task.id} className="group flex items-center justify-between p-3 bg-card border rounded-md shadow-sm hover:border-primary/50 transition-colors">
                        <div className="flex items-center gap-3">
                             <div className="text-muted-foreground/50 group-hover:text-foreground cursor-grab">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                             </div>
                             <span>{task.title}</span>
                        </div>
                        <Badge variant="outline">{task.tag}</Badge>
                    </KanbanCard>
                ))}
            </KanbanList>
        </div>

        <KanbanDragOverlay>
             {activeTask ? (
                <div className="flex items-center justify-between p-3 bg-card border rounded-md shadow-xl w-[400px] cursor-grabbing active:scale-105 transition-transform">
                     <div className="flex items-center gap-3">
                         <div className="text-foreground">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/></svg>
                         </div>
                         <span>{activeTask.title}</span>
                    </div>
                    <Badge variant="outline">{activeTask.tag}</Badge>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}

export function DragAndDropGrid() {
  const initialGridData: Column[] = [
    {
      id: "grid",
      title: "Grid Layout",
      tasks: [
        { id: "img-1", title: "Image 1", tag: "JPG" },
        { id: "img-2", title: "Image 2", tag: "PNG" },
        { id: "img-3", title: "Image 3", tag: "SVG" },
        { id: "img-4", title: "Image 4", tag: "GIF" },
        { id: "img-5", title: "Image 5", tag: "WEBP" },
        { id: "img-6", title: "Image 6", tag: "BMP" },
      ],
    },
  ]

  const {
      columns,
      activeTask,
      handleDragStart,
      handleDragOver,
      handleDragEnd,
      sensors
  } = useKanban<Task, Column>(initialGridData)

  const col = columns[0];

  return (
    <KanbanBoard 
      onDragStart={handleDragStart} 
      onDragOver={handleDragOver} 
      onDragEnd={handleDragEnd} 
      sensors={sensors}
      className="flex-col h-auto"
    >
        <div className="w-full max-w-2xl mx-auto p-4 border rounded-lg bg-background">
            <h3 className="font-semibold mb-4 text-sm uppercase text-muted-foreground">Grid Layout</h3>
            <KanbanList 
                items={useMemo(() => col.tasks.map(t => t.id), [col.tasks])} 
                className="grid grid-cols-2 md:grid-cols-3 gap-4"
                strategy={rectSortingStrategy}
            >
                {col.tasks.map((task) => (
                    <KanbanCard key={task.id} id={task.id} className="aspect-square flex flex-col items-center justify-center p-4 bg-muted/30 border-2 border-dashed rounded-xl hover:border-primary/50 hover:bg-muted/50 transition-all cursor-grab group">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                             <span className="font-bold text-primary">{task.tag}</span>
                        </div>
                        <span className="font-medium">{task.title}</span>
                    </KanbanCard>
                ))}
            </KanbanList>
        </div>

        <KanbanDragOverlay>
             {activeTask ? (
                <div className="aspect-square flex flex-col items-center justify-center p-4 bg-background border-2 border-primary rounded-xl shadow-2xl cursor-grabbing w-[150px] opacity-90 scale-105">
                     <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-3">
                             <span className="font-bold text-primary">{activeTask.tag}</span>
                        </div>
                        <span className="font-medium">{activeTask.title}</span>
                </div>
            ) : null}
        </KanbanDragOverlay>
    </KanbanBoard>
  )
}
