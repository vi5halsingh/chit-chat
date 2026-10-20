import "./Home.css";

const conversations = [
  {
    id: 1,
    name: "Rahul Sharma",
    message: "Bro, project complete ho gaya?",
    time: "10:42 AM",
    unread: 2,
    avatar: "R",
    color: "avatar-purple",
    online: true,
  },
  {
    id: 2,
    name: "Development Team",
    message: "Aman: PR review kar dena",
    time: "10:30 AM",
    unread: 4,
    avatar: "D",
    color: "avatar-green",
    online: false,
    group: true,
  },
  {
    id: 3,
    name: "Aman Verma",
    message: "Thanks for the update!",
    time: "Yesterday",
    unread: 0,
    avatar: "A",
    color: "avatar-orange",
    online: true,
  },
  {
    id: 4,
    name: "Priya Singh",
    message: "See you tomorrow.",
    time: "Yesterday",
    unread: 0,
    avatar: "P",
    color: "avatar-pink",
    online: false,
  },
  {
    id: 5,
    name: "Project Updates",
    message: "New announcement available",
    time: "Mon",
    unread: 0,
    avatar: "B",
    color: "avatar-blue",
    broadcast: true,
  },
];

const Home = () => {
  return (
    <main className="guardian-home">
      {/* Sidebar */}
      <aside className="home-sidebar">
        <div className="home-brand">
          <div className="home-brand-icon">G</div>
          <span>guardian</span>
          <span className="brand-beta">BETA</span>
        </div>

        <div className="sidebar-user">
          <div className="profile-avatar">V</div>

          <div className="sidebar-user-info">
            <h3>Vishal Singh</h3>
            <span>
              <i className="online-dot" /> Available
            </span>
          </div>

          <button className="icon-button" aria-label="Profile settings">
            ⋯
          </button>
        </div>

        <div className="sidebar-section-label">WORKSPACE</div>

        <nav className="sidebar-navigation">
          <button className="navigation-item active">
            <span className="nav-icon">◈</span>
            <span>All messages</span>
            <span className="nav-count">6</span>
          </button>

          <button className="navigation-item">
            <span className="nav-icon">◉</span>
            <span>Personal chats</span>
          </button>

          <button className="navigation-item">
            <span className="nav-icon">◷</span>
            <span>Unread</span>
            <span className="nav-count muted-count">3</span>
          </button>
        </nav>

        <div className="sidebar-section-label broadcast-label">
          BROADCAST
          <button className="small-plus" aria-label="Create broadcast">
            +
          </button>
        </div>

        <nav className="sidebar-navigation">
          <button className="navigation-item">
            <span className="nav-icon">◉</span>
            <span>Announcements</span>
          </button>

          <button className="navigation-item">
            <span className="nav-icon">◫</span>
            <span>My broadcasts</span>
          </button>

          <button className="navigation-item">
            <span className="nav-icon">＋</span>
            <span>Create broadcast</span>
          </button>
        </nav>

        <div className="sidebar-bottom">
          <div className="storage-card">
            <div className="storage-heading">
              <span>YOUR WORKSPACE</span>
              <span>FREE</span>
            </div>

            <p>Your conversations, all in one place.</p>

            <div className="storage-progress">
              <span />
            </div>

            <span className="storage-caption">
              Stay connected with your people.
            </span>
          </div>

          <button className="navigation-item settings-item">
            <span className="nav-icon">⚙</span>
            <span>Settings</span>
          </button>
        </div>
      </aside>

      {/* Conversation list */}
      <section className="conversation-panel">
        <header className="conversation-header">
          <div>
            <span className="panel-eyebrow">YOUR WORKSPACE</span>
            <h1>Messages</h1>
          </div>

          <button className="new-chat-button" aria-label="New chat">
            +
          </button>
        </header>

        <div className="conversation-search">
          <span>⌕</span>
          <input
            type="text"
            placeholder="Search conversations..."
            aria-label="Search conversations"
          />
          <kbd>⌘ K</kbd>
        </div>

        <div className="conversation-tabs">
          <button className="conversation-tab selected">
            All <span>5</span>
          </button>

          <button className="conversation-tab">
            Personal
          </button>

          <button className="conversation-tab">
            Broadcast
          </button>
        </div>

        <div className="conversation-list">
          <div className="list-date-label">RECENT CONVERSATIONS</div>

          {conversations.map((chat) => (
            <button
              className={`conversation-item ${
                chat.id === 1 ? "conversation-active" : ""
              }`}
              key={chat.id}
            >
              <div className="conversation-avatar-wrapper">
                <div className={`conversation-avatar ${chat.color}`}>
                  {chat.avatar}
                </div>

                {chat.online && <span className="avatar-online" />}

                {chat.broadcast && (
                  <span className="broadcast-indicator">↗</span>
                )}
              </div>

              <div className="conversation-details">
                <div className="conversation-name-row">
                  <h3>{chat.name}</h3>
                  {chat.unread > 0 && (
                    <span className="unread-badge">{chat.unread}</span>
                  )}
                </div>

                <p>{chat.message}</p>
              </div>

              <span className="conversation-time">{chat.time}</span>
            </button>
          ))}
        </div>

        <div className="conversation-panel-footer">
          <span className="footer-status-dot" />
          All systems operational
        </div>
      </section>

      {/* Main chat area */}
      <section className="chat-main">
        <header className="chat-topbar">
          <div className="chat-topbar-left">
            <div className="topbar-icon">✳</div>

            <div>
              <h2>Your conversations</h2>
              <p>Your space to connect and collaborate.</p>
            </div>
          </div>

          <div className="topbar-actions">
            <button className="icon-button" aria-label="Search messages">
              ⌕
            </button>
            <button className="icon-button" aria-label="More options">
              ⋯
            </button>
          </div>
        </header>

        <div className="chat-welcome">
          <div className="welcome-art">
            <div className="art-circle art-circle-one" />
            <div className="art-circle art-circle-two" />

            <div className="art-message message-one">
              <span className="art-avatar art-avatar-purple">R</span>
              <div className="art-lines">
                <span />
                <span />
              </div>
            </div>

            <div className="art-message message-two">
              <span className="art-avatar art-avatar-green">A</span>
              <div className="art-lines">
                <span />
                <span />
              </div>
            </div>

            <div className="art-center-icon">G</div>

            <div className="art-floating-icon">✳</div>
          </div>

          <span className="welcome-eyebrow">
            A LITTLE CLOSER, EVERY DAY
          </span>

          <h1>
            Good conversations
            <br />
            <span>start here.</span>
          </h1>

          <p className="welcome-description">
            Pick up where you left off, start a personal
            conversation, or share an update with everyone.
          </p>

          <div className="welcome-actions">
            <button className="primary-action">
              <span>＋</span> Start a conversation
            </button>

            <button className="secondary-action">
              <span>↗</span> Create broadcast
            </button>
          </div>

          <div className="welcome-divider">
            <span>MADE FOR BETTER CONNECTIONS</span>
          </div>

          <div className="feature-grid">
            <div className="feature-item">
              <div className="feature-icon feature-chat">◉</div>
              <div>
                <h3>Personal chats</h3>
                <p>One-to-one conversations</p>
              </div>
            </div>

            <div className="feature-item">
              <div className="feature-icon feature-broadcast">↗</div>
              <div>
                <h3>Broadcast updates</h3>
                <p>Share with your audience</p>
              </div>
            </div>
          </div>
        </div>

        <footer className="chat-main-footer">
          <span>GUARDIAN WORKSPACE</span>
          <span>Simple. Private. Connected.</span>
        </footer>
      </section>
    </main>
  );
};

export default Home;