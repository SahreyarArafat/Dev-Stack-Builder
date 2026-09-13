import React from "react";

export default function TechnologiesSection({
  technologies,
  loading,
  selectedStack,
  onAddStack,
  onRemoveItem,
  onRemoveAll,
}) {
  return (
    <main className="main-container">
      <h2 className="section-heading">
        Explore the <span className="gradient-text">Technologies</span>
      </h2>
      <p className="section-subheading">
        Pick one technology per category to build your ideal stack.
      </p>

      {loading ? (
        <div
          style={{
            textAlign: "center",
            padding: "3rem",
            fontSize: "1.2rem",
            color: "#6b7280",
          }}
        >
          Loading technologies...
        </div>
      ) : (
        <div className="content-layout">
          <div className="tech-grid">
            {technologies.map((tech) => {
              const isSelected = selectedStack.some(
                (item) => item.id === tech.id,
              );
              return (
                <div className="tech-card" key={tech.id}>
                  <div>
                    <div className="card-header">
                      <img
                        src={tech.icon}
                        alt={tech.name}
                        className="tech-icon"
                      />
                      <span className="badge">{tech.badge}</span>
                    </div>
                    <h3 className="tech-name">{tech.name}</h3>
                    <p className="tech-desc">{tech.description}</p>
                  </div>
                  <div>
                    <div className="card-footer-info">
                      <span className="chip">{tech.category}</span>
                      <span>{tech.difficulty}</span>
                      <span>⭐ {tech.rating}</span>
                    </div>
                    <button
                      className="add-btn"
                      onClick={() => onAddStack(tech)}
                      disabled={isSelected}
                    >
                      {isSelected ? "✓ Added to Stack" : "Add to Stack"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stack Sidebar */}
          <aside className="stack-sidebar">
            <h3 className="stack-title">Your Stack</h3>
            <p className="stack-count">
              {selectedStack.length} Technology Selected
            </p>

            {selectedStack.length === 0 ? (
              <div className="empty-stack">
                <p>No technologies selected yet.</p>
                <small>Your stack is empty.</small>
              </div>
            ) : (
              <div>
                {selectedStack.map((item) => (
                  <div className="stack-item" key={item.id}>
                    <div className="stack-item-left">
                      <img
                        src={item.icon}
                        alt={item.name}
                        className="stack-item-icon"
                      />
                      <div>
                        <div style={{ fontWeight: 600, fontSize: "0.9rem" }}>
                          {item.name}
                        </div>
                        <div style={{ fontSize: "0.75rem", color: "#6b7280" }}>
                          {item.category}
                        </div>
                      </div>
                    </div>
                    <button
                      className="remove-item-btn"
                      onClick={() => onRemoveItem(item.id, item.name)}
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <button className="remove-all-btn" onClick={onRemoveAll}>
                  Remove All
                </button>
              </div>
            )}
          </aside>
        </div>
      )}
    </main>
  );
}
