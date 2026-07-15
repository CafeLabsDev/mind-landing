"use client";

import { useCallback, useRef, useState } from "react";
import { NodeGraph } from "@/components/NodeGraph";
import { NodeModal } from "@/components/NodeModal";
import type { GraphNode } from "@/lib/graph-data";

/**
 * Wires the graph and its example modal together: tracks which node is
 * active, and — for accessibility — remembers which button opened the
 * modal so focus returns to it on close (Escape, backdrop click, or the
 * close button).
 */
export function InteractiveGraph() {
  const [activeNode, setActiveNode] = useState<GraphNode | null>(null);
  const lastFocused = useRef<HTMLElement | null>(null);

  const handleSelect = useCallback((node: GraphNode, trigger: HTMLElement) => {
    lastFocused.current = trigger;
    setActiveNode(node);
  }, []);

  const handleClose = useCallback(() => {
    setActiveNode(null);
    lastFocused.current?.focus();
  }, []);

  return (
    <>
      <NodeGraph onSelect={handleSelect} />
      <NodeModal node={activeNode} onClose={handleClose} />
    </>
  );
}
