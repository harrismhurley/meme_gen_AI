/* eslint-disable @next/next/no-img-element */
'use client';
import { useState } from 'react';
import TemplatePicker from '@/components/TemplatePicker';
import type { MemeTemplate } from '@/types/meme';
import styles from './page.module.css';

export default function EditorPage() {
  const [selectedTemplate, setSelectedTemplate] = useState<MemeTemplate | null>(null);

  return (
    <main className={styles.editorContainer}>
      <h1 className={styles.editorHeader}>AI Meme Generator</h1>
      
      <div className={styles.mainContent}>
        {!selectedTemplate ? (
          <TemplatePicker onSelect={setSelectedTemplate} />
        ) : (
          <div className={styles.canvasArea}>
            <img
              src={selectedTemplate.url}
              alt="Selected template"
              className={styles.baseImage}
              style={{
                maxWidth: "90%",
                maxHeight: "80%",
                width: "auto",
                height: "auto"
              }}
            />
            <button 
              className={styles.backButton}
              onClick={() => setSelectedTemplate(null)}
            >
              Choose Different Template
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
