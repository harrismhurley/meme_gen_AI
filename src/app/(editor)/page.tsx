export default function EditorPage() {
  return (
    <main className="editor-container">
      <h1 className="editor-header">AI Meme Generator</h1>
      
      <div className="main-content">
        <div className="template-grid">
          {/* Template selection grid will go here */}
        </div>
        
        <div className="canvas-area">
          <p className="canvas-placeholder">
            Select a template to begin
          </p>
        </div>
      </div>
    </main>
  );
}
