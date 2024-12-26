import React, { useState } from 'react';
import { Editor } from './components/Editor';
import { TodoList } from './components/TodoList';
import { FileText, CheckSquare, Menu } from 'lucide-react';
import { Button } from './components/ui/button';

function App() {
  const [activeTab, setActiveTab] = useState<'notes' | 'todos'>('notes');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-neutral-50 flex">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? 'w-64' : 'w-16'} bg-white border-r border-neutral-200 p-4 transition-all`}>
        <div className="flex items-center justify-between mb-8">
          <h1 className={`font-bold text-xl ${!isSidebarOpen && 'hidden'}`}>Workspace</h1>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="w-5 h-5" />
          </Button>
        </div>
        <nav className="space-y-2">
          <Button
            variant={activeTab === 'notes' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('notes')}
          >
            <FileText className="w-5 h-5 mr-2" />
            {isSidebarOpen && 'Notes'}
          </Button>
          <Button
            variant={activeTab === 'todos' ? 'default' : 'ghost'}
            className="w-full justify-start"
            onClick={() => setActiveTab('todos')}
          >
            <CheckSquare className="w-5 h-5 mr-2" />
            {isSidebarOpen && 'Today'}
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">
            {activeTab === 'notes' ? 'Notes' : 'Today\'s Tasks'}
          </h2>
          
          {activeTab === 'notes' ? (
            <Editor
              onSave={(content) => {
                console.log('Saving note:', content);
                // Here we would typically save to the backend
              }}
            />
          ) : (
            <TodoList />
          )}
        </div>
      </div>
    </div>
  );
}

export default App;