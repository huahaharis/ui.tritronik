import React, { useMemo } from "react";
import {
  DndContext,
  DragOverlay,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  type DragEndEvent,
  type DragStartEvent,
  type DragOverEvent,
  closestCorners,
  DndContextProps,
} from "@dnd-kit/core";
import {
  SortableContext,
  arrayMove,
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  rectSortingStrategy,
  useSortable,
} from "@dnd-kit/sortable";

export {
  horizontalListSortingStrategy,
  verticalListSortingStrategy,
  rectSortingStrategy,
};
import { CSS } from "@dnd-kit/utilities";
import { cn } from "@/lib/utils";

export interface KanbanBoardProps extends DndContextProps {
  children: React.ReactNode;
  className?: string;
}

export function KanbanBoard({
  children,
  className,
  ...props
}: KanbanBoardProps) {
  const [isMounted, setIsMounted] = React.useState(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor),
  );

  if (!isMounted) return null;

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCorners}
      {...props}
    >
      <div
        className={cn(
          "flex h-full w-full gap-4 overflow-x-auto p-4",
          className,
        )}
      >
        {children}
      </div>
    </DndContext>
  );
}

export interface KanbanListProps {
  children: React.ReactNode;
  items: string[];
  className?: string;
  strategy?:
    | typeof horizontalListSortingStrategy
    | typeof verticalListSortingStrategy
    | typeof rectSortingStrategy;
}

export function KanbanList({
  children,
  items,
  className,
  strategy = horizontalListSortingStrategy,
}: KanbanListProps) {
  const memoizedItems = useMemo(() => items, [items]);

  return (
    <SortableContext items={memoizedItems} strategy={strategy}>
      <div className={cn("flex gap-4", className)}>{children}</div>
    </SortableContext>
  );
}

interface KanbanCardProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function KanbanCard({ id, children, className }: KanbanCardProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    opacity: isDragging ? 0.5 : 1,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cn("cursor-grab active:cursor-grabbing", className)}
    >
      {children}
    </div>
  );
}

interface KanbanColumnProps {
  id: string;
  children: React.ReactNode;
  className?: string;
}

export function KanbanColumn({ id, children, className }: KanbanColumnProps) {
  const { setNodeRef } = useSortable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(
        "flex h-full min-w-[350px] flex-col gap-4 rounded-md bg-muted/50 p-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function KanbanDragOverlay({ children }: { children: React.ReactNode }) {
  return <DragOverlay>{children}</DragOverlay>;
}

export type UniqueIdentifier = string | number;

export interface BaseTask {
  id: UniqueIdentifier;
}

export interface BaseColumn<T extends BaseTask> {
  id: UniqueIdentifier;
  title: string;
  tasks: T[];
}

export function useKanban<T extends BaseTask, C extends BaseColumn<T>>(
  initialColumns: C[],
  onDragEnd?: (columns: C[]) => void,
) {
  const [columns, setColumns] = React.useState<C[]>(initialColumns);
  const [activeTask, setActiveTask] = React.useState<T | null>(null);
  const [activeColumn, setActiveColumn] = React.useState<C | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 250,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: (
        event,
        {
          context: {
            active,
            over,
            collisionRect,
            droppableRects,
            droppableContainers,
          },
        },
      ) => {
        return { x: 0, y: 0 };
      },
    }),
  );

  const findColumn = React.useCallback(
    (id: UniqueIdentifier) => {
      return columns.find((col) => col.id === id);
    },
    [columns],
  );

  const handleDragStart = React.useCallback(
    (event: DragStartEvent) => {
      const { active } = event;
      const activeId = active.id;

      const col = findColumn(activeId);
      if (col) {
        setActiveColumn(col);
        return;
      }

      const task = columns
        .flatMap((c) => c.tasks)
        .find((t) => t.id === activeId);
      if (task) setActiveTask(task);
    },
    [columns, findColumn],
  );

  const handleDragOver = React.useCallback(
    (event: DragOverEvent) => {
      const { active, over } = event;
      if (!over) return;

      const activeId = active.id;
      const overId = over.id;

      const activeColumnId = columns.find((col) =>
        col.tasks.some((t) => t.id === activeId),
      )?.id;
      const overColumnId = columns.find(
        (col) => col.id === overId || col.tasks.some((t) => t.id === overId),
      )?.id;

      if (!activeColumnId || !overColumnId || activeColumnId === overColumnId)
        return;

      setColumns((prev) => {
        const activeColIndex = prev.findIndex(
          (col) => col.id === activeColumnId,
        );
        const overColIndex = prev.findIndex((col) => col.id === overColumnId);

        const activeCol = prev[activeColIndex];
        const overCol = prev[overColIndex];

        const activeTaskIndex = activeCol.tasks.findIndex(
          (t) => t.id === activeId,
        );
        const overTaskIndex = overCol.tasks.findIndex((t) => t.id === overId);

        let newIndex: number;
        if (overTaskIndex >= 0) {
          newIndex = overTaskIndex;
        } else {
          newIndex = overCol.tasks.length + 1;
        }

        const newActiveCol = {
          ...activeCol,
          tasks: [
            ...activeCol.tasks.slice(0, activeTaskIndex),
            ...activeCol.tasks.slice(activeTaskIndex + 1),
          ],
        } as C;

        const newOverCol = {
          ...overCol,
          tasks: [
            ...overCol.tasks.slice(0, newIndex),
            activeCol.tasks[activeTaskIndex],
            ...overCol.tasks.slice(newIndex),
          ],
        } as C;

        const newCols = [...prev];
        newCols[activeColIndex] = newActiveCol;
        newCols[overColIndex] = newOverCol;

        return newCols;
      });
    },
    [columns],
  );

  const handleDragEnd = React.useCallback(
    (event: DragEndEvent) => {
      const { active, over } = event;
      setActiveColumn(null);
      setActiveTask(null);

      if (!over) return;

      const activeId = active.id;
      const overId = over.id;

      if (activeId === overId) return;

      const activeColumnIndex = columns.findIndex((col) => col.id === activeId);
      if (activeColumnIndex !== -1) {
        const overColumnIndex = columns.findIndex((col) => col.id === overId);
        if (overColumnIndex !== -1) {
          const newCols = arrayMove(
            columns,
            activeColumnIndex,
            overColumnIndex,
          );
          setColumns(newCols);
          if (onDragEnd) onDragEnd(newCols);
        }
        return;
      }

      const activeColId = columns.find((col) =>
        col.tasks.some((t) => t.id === activeId),
      )?.id;
      const overColId = columns.find((col) =>
        col.tasks.some((t) => t.id === overId),
      )?.id;

      if (columns.find((c) => c.id === overId)) {
        if (onDragEnd) onDragEnd(columns);
        return;
      }

      if (activeColId && overColId && activeColId === overColId) {
        const columnIndex = columns.findIndex((col) => col.id === activeColId);
        const column = columns[columnIndex];

        const oldIndex = column.tasks.findIndex((t) => t.id === activeId);
        const newIndex = column.tasks.findIndex((t) => t.id === overId);

        const newTasks = arrayMove(column.tasks, oldIndex, newIndex);

        const newColumns = [...columns];
        newColumns[columnIndex] = { ...column, tasks: newTasks as T[] };
        setColumns(newColumns);
        if (onDragEnd) onDragEnd(newColumns);
      }
      // If different columns, modifying the column structure has already happened in dragOver
      // But we might want to stabilize/save the final state here if we were using a different strategy
      // Since we update state in DragOver for cross-column items,
      // the final state is effectively "what is currently in columns" plus the fact that the drag ended.
      // However, since DragOver updates state optimistically, the `columns` variable inside this callback
      // might be stale if we don't include it in dependency array.
      // But we do include it.
      // For cross-column: dragOver handles the move.
      // IF we want to persist cross-column moves, we need to trigger it here too.
      // BUT, dragOver updates state continuously.
      else {
        // For cross-column drag, the state is updated in handleDragOver.
        // We just need to notify the parent of the final state.
        if (onDragEnd) onDragEnd(columns);
      }
    },
    [columns, onDragEnd],
  );

  return {
    columns,
    setColumns,
    activeTask,
    activeColumn,
    handleDragStart,
    handleDragOver,
    handleDragEnd,
    sensors,
  };
}
