'use client';

import { useState } from 'react';
import { Upload, Sparkles } from 'lucide-react';

export default function UploadZone() {
  const [isDragging, setIsDragging] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/image/')) {
      const formData = new FormData();
      formData.append('image', file);

      const res = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();
      setImageUrl(data.imageUrl);
    }
  };

  return (
    <div className="my-20">
      <div 
        className={`border-2 border-dashed rounded-2xl p-20 text-center transition-all ${isDragging ? 'border-black bg-gray-50 dark:bg-gray-900' : 'border-gray-300'}`}
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
      >
        <Upload className="w-16 h-16 mx-auto mb-6 text-gray-400" />
        <p className="text-2xl font-medium mb-2">Drop a room photo here</p>
        <p className="text-gray-500">or click to browse</p>
        <Sparkles className="w-8 h-8 mx-auto mt-8 text-gray-300" />
      </div>
      
      {imageUrl && (
        <div className="mt-12 text-center">
          <p className="text-xl mb-6">Generating your visions with Grok 4 FLUX...</p>
          <img src={imageUrl} alt="Generated" className="max-w-full rounded-xl shadow-2xl" />
        </div>
      )}
    </div>
  );
}
