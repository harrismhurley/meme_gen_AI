/* eslint-disable @next/next/no-img-element */
'use client';
import { useEffect, useState } from 'react';
import type { MemeTemplate } from '@/types/meme';
import './index.css';

export default function TemplatePicker({
  onSelect,
}: {
  onSelect: (template: MemeTemplate) => void;
}) {
  const [templates, setTemplates] = useState<MemeTemplate[]>([]);
  const [status, setStatus] = useState<'loading' | 'error' | 'success'>('loading');
  const [error, setError] = useState('');

  useEffect(() => {
    const loadTemplates = async () => {
      try {
        const res = await fetch('/api/templates');
        
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }

        const data = await res.json();
        setTemplates(data);
        setStatus('success');
      } catch (err) {
        setStatus('error');
        setError(err instanceof Error ? err.message : 'Failed to load templates');
      }
    };

    loadTemplates();
  }, []);

  if (status === 'loading') {
    return <div className="loading">Loading meme templates...</div>;
  }

  if (status === 'error') {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="grid">
      {templates.map((template) => (
        <article 
          key={template.id}
          className="card"
          onClick={() => onSelect(template)}
          role="button"
          tabIndex={0}
        >
          <img
            src={template.url}
            alt={template.name}
            className="image"
            loading="lazy"
            width={template.width}
            height={template.height}
          />
          <h3 className="name">{template.name}</h3>
        </article>
      ))}
    </div>
  );
}
