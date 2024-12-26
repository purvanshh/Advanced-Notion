import React, { useState } from 'react';
import { Button } from './ui/button';
import { Save } from 'lucide-react';

interface EditorProps {
  initialContent?: string;
  onSave: (content: string) => void;
}

export function Editor({ initialContent = '', onSave }: EditorProps) {
  const [content, setContent] = useState(initialContent);

  const handleSave = () => {
    onSave(content);
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-4">
        <textarea
          className="w-full min-h-[200px] p-4 rounded-lg border border-neutral-200 focus:outline-none focus:ring-2 focus:ring-neutral-900 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Start writing..."
        />
      </div>
      <Button onClick={handleSave} className="flex items-center gap-2">
        <Save className="w-4 h-4" />
        Save
      </Button>
    </div>
  );
}