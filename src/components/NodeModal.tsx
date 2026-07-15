"use client";

import { useEffect, useRef } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import type { GraphNode } from "@/lib/graph-data";

type NodeModalProps = {
  node: GraphNode | null;
  onClose: () => void;
};

/** Focusable-element selector used for the Tab focus trap inside the dialog. */
const FOCUSABLE_SELECTOR = 'button, [href], [tabindex]:not([tabindex="-1"])';

export function NodeModal({ node, onClose }: NodeModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    if (!node) return;
    dialogRef.current?.focus();

    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        onClose();
        return;
      }
      if (e.key === "Tab") {
        const dialog = dialogRef.current;
        if (!dialog) return;
        const focusables =
          dialog.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR);
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    }

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [node, onClose]);

  return (
    <AnimatePresence>
      {node && (
        <motion.div
          className="modal-backdrop"
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose();
          }}
        >
          <motion.div
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="modalTitle"
            aria-describedby="modalPath"
            tabIndex={-1}
            ref={dialogRef}
            initial={reduceMotion ? false : { y: 8, scale: 0.98 }}
            animate={{ y: 0, scale: 1 }}
            exit={{ y: 8, scale: 0.98 }}
            transition={{ duration: 0.18 }}
          >
            <button
              className="modal-close"
              aria-label="Fechar exemplo"
              onClick={onClose}
            >
              &times;
            </button>
            <div className="modal-head">
              <span className="modal-dot" aria-hidden="true" />
              <h3 id="modalTitle">{node.label}</h3>
            </div>
            <span className="modal-path mono" id="modalPath">
              {node.path}
            </span>
            <pre className="modal-body mono">{node.body}</pre>
            <p className="modal-caption">{node.caption}</p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
