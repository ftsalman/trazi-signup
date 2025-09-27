import React, { useState } from "react";

const CircularNetwork = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  const users = [
    { id: 1, name: "Alex Johnson", role: "Product Manager", avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face", icon: "💼" },
    { id: 2, name: "Maria Garcia", role: "UX Designer", avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop&crop=face", icon: "🎨" },
    { id: 3, name: "David Kim", role: "Data Analyst", avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face", icon: "📊" },
    { id: 4, name: "Sarah Chen", role: "Developer", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&crop=face", icon: "💻" },
  ];

  return (
      <div className="relative w-[350px] h-[350px]  overflow-hidden">
        
        {/* Central Logo */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-20 h-20 rounded-full bg-gray-800 flex items-center justify-center ">
          <img src="/imgs/trazi-logo.png" alt="Logo" className="w-10 h-10" />
        </div>

        {/* Orbit Lines */}
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" width="300" height="300">
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="rgba(255,255,255,0.2)"
            strokeWidth="2"
            strokeDasharray="6 6"
          />
        </svg>

        {/* Connection Lines */}
        <svg className="absolute w-full h-full top-0 left-0" viewBox="-250 -250 500 500">
          {users.map((user, index) => {
            const angle = (index / users.length) * 360;
            const radius = 120;
            const x = radius * Math.cos((angle * Math.PI) / 180);
            const y = radius * Math.sin((angle * Math.PI) / 180);
            return (
              <line
                key={user.id}
                x1="0"
                y1="0"
                x2={x}
                y2={y}
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              />
            );
          })}
        </svg>

        {/* Avatars */}
        {users.map((user, index) => {
          const angle = (index / users.length) * 360;
          const radius = 120;
          const x = radius * Math.cos((angle * Math.PI) / 180);
          const y = radius * Math.sin((angle * Math.PI) / 180);

          return (
            <div
              key={user.id}
              className={`absolute w-16 h-16 rounded-full border-4 border-white overflow-hidden shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl hover:z-20 ${
                selectedUser === user.id ? 'scale-110 z-20 ring-2 ring-white' : ''
              }`}
              style={{
                top: `calc(50% + ${y}px - 32px)`,
                left: `calc(50% + ${x}px - 32px)`,
              }}
              onMouseEnter={() => setSelectedUser(user.id)}
              onMouseLeave={() => setSelectedUser(null)}
            >
              <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-white flex items-center justify-center text-xs">
                <span className="text-indigo-600">{user.icon}</span>
              </div>
            </div>
          );
        })}
      </div>
    
  );
};

export default CircularNetwork;
