export default function About() {
    return (
      <div className="about-container">
        <h1>📘 About HepAid</h1>
        <p className="description">
          HepAid is a liver tumor segmentation and classification system built using Deep Learning.
          Developed as a final year research project at the <strong>University of Westminster</strong>.
        </p>
  
        <div className="profile">
          <h2>👨‍💻 Researcher</h2>
          <p><strong>Name:</strong> Ganegoda Gamage Haritha</p>
          <p><strong>Degree:</strong> BEng in Software Engineering</p>
          <p><strong>University:</strong> University of Westminster</p>
        </div>
  
        <div className="profile">
          <h2>👨‍🏫 Supervisor</h2>
          <p><strong>Name:</strong> Nuvin Godakanda Arachchi</p>
          <p><strong>Position:</strong> Visiting Lecturer</p>
          <p><strong>Institute:</strong> Informatics Institute of Technology</p>
        </div>
  
        <div className="project-info">
          <h2>📌 Project Info</h2>
          <p><strong>Title:</strong> HepAid - Liver Tumor Segmentation & Classification</p>
          <p><strong>Stack:</strong> Next.js + Python Flask + Deep Learning</p>
        </div>
      </div>
    );
  }
  