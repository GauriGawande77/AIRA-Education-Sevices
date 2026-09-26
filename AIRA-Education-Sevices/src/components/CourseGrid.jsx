import React, { useState } from 'react';
import { Search, Bot, Brain, Cpu, Rocket, Plane, ArrowRight, BarChart, Clock, FolderGit2, GraduationCap, Code, Server, Lightbulb, Users } from 'lucide-react';
import './CourseGrid.css';

const courseData = [
  {
    id: 1,
    category: "Robotics",
    level: "Beginner",
    title: "Introduction to Robotics & Arduino",
    desc: "Start your robotics journey! Learn circuit basics, program Arduino, and build your first Line Follower Robot from scratch.",
    hours: "15 Hours",
    projects: "12 Projects",
    target: "Grades 6-10",
    tags: ["Arduino", "C++", "Circuits", "Sensors"],
    price: "2,999",
    topBg: "linear-gradient(135deg, #fef3c7, #fde68a)",
    icon: <Bot size={70} strokeWidth={1.5} />,
    catIcon: <Bot size={20} color="#f59e0b" />
  },
  {
    id: 2,
    category: "IoT",
    level: "Beginner",
    title: "Smart Home with ESP32 & IoT",
    desc: "Control lights, fans, and appliances with your smartphone. Build a full home automation system using ESP32 and cloud dashboards.",
    hours: "20 Hours",
    projects: "8 Projects",
    target: "Grades 8-12",
    tags: ["ESP32", "MQTT", "Cloud", "Wi-Fi"],
    price: "3,499",
    topBg: "linear-gradient(135deg, #f3e8ff, #e9d5ff)",
    icon: <Cpu size={70} strokeWidth={1.5} />,
    catIcon: <Server size={20} color="#a855f7" />
  },
  {
    id: 3,
    category: "AI & ML",
    level: "Intermediate",
    title: "Python & Machine Learning Fundamentals",
    desc: "Dive into AI! Learn Python programming, data science basics, and build your first ML models — classifiers, regressors, and neural networks.",
    hours: "30 Hours",
    projects: "10 Projects",
    target: "Grades 9-12 / College",
    tags: ["Python", "scikit-learn", "NumPy", "Pandas"],
    price: "4,999",
    topBg: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
    icon: <Brain size={70} strokeWidth={1.5} />,
    catIcon: <Brain size={20} color="#3b82f6" />
  },
  {
    id: 4,
    category: "AI & ML",
    level: "Advanced",
    title: "Computer Vision & Object Detection",
    desc: "Build smart camera systems using OpenCV and YOLOv8. Detect objects, recognize faces, and integrate vision into robotic systems.",
    hours: "35 Hours",
    projects: "12 Projects",
    target: "College / Grade 11-12",
    tags: ["OpenCV", "YOLOv8", "TensorFlow", "Raspberry Pi"],
    price: "6,499",
    topBg: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
    icon: <Code size={70} strokeWidth={1.5} />,
    catIcon: <Brain size={20} color="#10b981" />
  },
  {
    id: 5,
    category: "Robotics",
    level: "Intermediate",
    title: "Industrial Robotic Arm & Automation",
    desc: "Operate and program a 6-axis robotic arm. Learn pick-and-place operations, inverse kinematics, and industrial automation workflows.",
    hours: "28 Hours",
    projects: "9 Projects",
    target: "Grades 9-12 / College",
    tags: ["Niryo One", "ROS", "Python", "Automation"],
    price: "5,499",
    topBg: "linear-gradient(135deg, #fce7f3, #fbcfe8)",
    icon: <Cpu size={70} strokeWidth={1.5} />,
    catIcon: <Bot size={20} color="#ec4899" />
  },
  {
    id: 6,
    category: "Drone",
    level: "Intermediate",
    title: "Drone Assembly, Flight & Programming",
    desc: "Build your own quadcopter drone from components. Learn flight dynamics, GPS programming, obstacle avoidance, and autonomous missions.",
    hours: "24 Hours",
    projects: "7 Projects",
    target: "Grades 8-12",
    tags: ["Flight Controller", "GPS", "Python", "Telemetry"],
    price: "4,499",
    topBg: "linear-gradient(135deg, #e0e7ff, #c7d2fe)",
    icon: <Plane size={70} strokeWidth={1.5} />,
    catIcon: <Plane size={20} color="#6366f1" />
  },
  {
    id: 7,
    category: "STEM",
    level: "Beginner",
    title: "STEM Fundamentals for Young Innovators",
    desc: "An exciting intro to Science, Technology, Engineering & Math through fun experiments, puzzles, and mini-projects. Perfect for early learners.",
    hours: "15 Hours",
    projects: "15 Activities",
    target: "Grades 1-5",
    tags: ["Experiments", "Logic", "Math", "Science"],
    price: "1,999",
    topBg: "linear-gradient(135deg, #fef08a, #fde047)",
    icon: <Lightbulb size={70} strokeWidth={1.5} />,
    catIcon: <Rocket size={20} color="#eab308" />
  },
  {
    id: 8,
    category: "IoT",
    level: "Intermediate",
    title: "Smart Agriculture & Environmental IoT",
    desc: "Build soil moisture monitors, automated irrigation, weather stations, and air quality sensors. Apply IoT to real agricultural problems.",
    hours: "22 Hours",
    projects: "8 Projects",
    target: "Grades 9-12",
    tags: ["Sensors", "Data Logging", "Dashboard", "Relays"],
    price: "3,999",
    topBg: "linear-gradient(135deg, #bbf7d0, #86efac)",
    icon: <Server size={70} strokeWidth={1.5} />,
    catIcon: <Server size={20} color="#22c55e" />
  },
  {
    id: 9,
    category: "AI & ML",
    level: "Advanced",
    title: "Natural Language Processing & Chatbots",
    desc: "Build smart chatbots and language models. Learn tokenization, sentiment analysis, and deploy an NLP-powered assistant using Python.",
    hours: "32 Hours",
    projects: "8 Projects",
    target: "College / Grade 11-12",
    tags: ["NLTK", "Transformers", "OpenAI API", "Python"],
    price: "5,999",
    topBg: "linear-gradient(135deg, #fbcfe8, #f9a8d4)",
    icon: <Brain size={70} strokeWidth={1.5} />,
    catIcon: <Brain size={20} color="#db2777" />
  },
  {
    id: 10,
    category: "Robotics",
    level: "Advanced",
    title: "Autonomous Vehicles & Path Planning",
    desc: "Design and build self-driving robot cars with obstacle detection, lane following, path planning algorithms, and real-time sensor fusion.",
    hours: "40 Hours",
    projects: "10 Projects",
    target: "College / Grade 11-12",
    tags: ["Raspberry Pi", "OpenCV", "LIDAR", "ROS"],
    price: "7,499",
    topBg: "linear-gradient(135deg, #fecaca, #fca5a5)",
    icon: <Bot size={70} strokeWidth={1.5} />,
    catIcon: <Bot size={20} color="#ef4444" />
  },
  {
    id: 11,
    category: "STEM",
    level: "Beginner",
    title: "3D Printing & Product Design",
    desc: "Design and print 3D models using Bambu Lab printers. Learn CAD basics with TinkerCAD, slice models, and produce functional prototypes.",
    hours: "18 Hours",
    projects: "6 Models",
    target: "Grades 6-12",
    tags: ["TinkerCAD", "Bambu Lab", "CAD", "Prototyping"],
    price: "2,499",
    topBg: "linear-gradient(135deg, #a7f3d0, #6ee7b7)",
    icon: <Rocket size={70} strokeWidth={1.5} />,
    catIcon: <Rocket size={20} color="#059669" />
  },
  {
    id: 12,
    category: "Drone",
    level: "Advanced",
    title: "AI-Powered Drone Vision & Mapping",
    desc: "Combine computer vision with drone technology. Implement real-time object tracking, autonomous target following, and aerial mapping with AI models.",
    hours: "38 Hours",
    projects: "11 Projects",
    target: "College",
    tags: ["OpenCV", "ArduPilot", "SLAM", "Python"],
    price: "8,999",
    topBg: "linear-gradient(135deg, #bfdbfe, #93c5fd)",
    icon: <Plane size={70} strokeWidth={1.5} />,
    catIcon: <Plane size={20} color="#2563eb" />
  }
];

const categories = ["All Courses", "Robotics", "AI & ML", "IoT", "STEM", "Drone"];

export default function CourseGrid() {
  const [activeCat, setActiveCat] = useState("All Courses");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCourses = courseData.filter(course => {
    const matchesCat = activeCat === "All Courses" || course.category === activeCat;
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          course.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <section className="course-grid-section">
      <div className="course-controls-wrapper">
        
        {/* Category Filters */}
        <div className="category-filters">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`cat-btn ${activeCat === cat ? 'active' : ''}`}
              onClick={() => setActiveCat(cat)}
            >
              {cat === "Robotics" && <Bot size={16} />}
              {cat === "AI & ML" && <Brain size={16} />}
              {cat === "IoT" && <Server size={16} />}
              {cat === "STEM" && <Rocket size={16} />}
              {cat === "Drone" && <Plane size={16} />}
              {cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-bar-container">
          <Search size={20} color="#9ca3af" />
          <input 
            type="text" 
            placeholder="Search courses..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Results Bar */}
        <div className="filter-results-bar">
          <div>Showing <strong>{filteredCourses.length}</strong> courses</div>
          <div className="sort-dropdown">
            <span>Sort:</span>
            <select defaultValue="featured">
              <option value="featured">Featured</option>
              <option value="newest">Newest</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
            </select>
          </div>
        </div>

      </div>

      {/* Grid */}
      <div className="course-grid">
        {filteredCourses.map((course, idx) => (
          <div className="course-card" key={course.id} style={{ animationDelay: `${idx * 0.1}s` }}>
            
            {/* Top Half (Pastel Background) */}
            <div className="cc-top" style={{ background: course.topBg }}>
              <div className="cc-level-badge" style={{ 
                background: course.level === 'Beginner' ? '#3b82f6' : 
                            course.level === 'Intermediate' ? '#f59e0b' : '#8b5cf6' 
              }}>
                {course.level}
              </div>
              <div className="cc-icon-badge">
                {course.catIcon}
              </div>
              
              <div className="cc-center-graphic">
                {course.icon}
              </div>
            </div>
            
            {/* Bottom Half */}
            <div className="cc-bottom">
              <div className="cc-meta-row">
                <span className="cc-cat-pill">{course.category}</span>
                <span className="cc-level-text"><BarChart size={14} /> {course.level}</span>
              </div>
              
              <h3 className="cc-title">{course.title}</h3>
              <p className="cc-desc">{course.desc}</p>
              
              <div className="cc-details">
                <div className="cc-detail-item"><Clock size={14} color="#2563eb" /> {course.hours}</div>
                <div className="cc-detail-item"><FolderGit2 size={14} color="#2563eb" /> {course.projects}</div>
                <div className="cc-detail-item"><GraduationCap size={14} color="#2563eb" /> {course.target}</div>
              </div>
              
              <div className="cc-tags">
                {course.tags.map((tag, i) => (
                  <span key={i} className="cc-tag">{tag}</span>
                ))}
              </div>
              
              <div className="cc-footer">
                <div>
                  <span className="cc-price-label">Course Fee</span>
                  <div className="cc-price">â‚¹{course.price}</div>
                </div>
                <button className="cc-enroll-btn">
                  Enroll <ArrowRight size={16} />
                </button>
              </div>
            </div>
            
          </div>
        ))}
        
        {filteredCourses.length === 0 && (
          <div style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '60px 20px', color: '#6b7280' }}>
            No courses found matching your search. Try different keywords or categories.
          </div>
        )}
      </div>
    </section>
  );
}
