// import React from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Modal, Button } from 'react-bootstrap';
// import './BlogPostCard.css'

// const BlogPostCard = ({ title, excerpt, date, category, imageUrl }) => {
//     return (
//         <>
//             <div 
//                 className="blog-card"
//                 data-aos="fade-up"
//             >
//                 <img src={imageUrl} alt={title} />
//                 <div className="blog-card-content">
//                     <div className="blog-card-header">
//                         <span className="blog-card-category">{category}</span>
//                         <span className="blog-card-date">{date}</span>
//                     </div>
//                     <h3 className="blog-card-title">{title}</h3>
//                     <p className="blog-card-excerpt">{excerpt}</p>
//                     <a href="#" className="blog-card-link">
//                         Read more
//                         <i data-feather="arrow-right"></i>
//                     </a>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default BlogPostCard 

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, Button } from 'react-bootstrap';
import './BlogPostCard.css';

const BlogPostCard = ({ title, excerpt, date, category, imageUrl, fullText }) => {
  const [showModal, setShowModal] = useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <>
      <div 
        className="blog-card"
        data-aos="fade-up"
      >
        <img src={imageUrl} alt={title} />
        <div className="blog-card-content">
          <div className="blog-card-header">
            <span className="blog-card-category">{category}</span>
            <span className="blog-card-date">{date}</span>
          </div>
          <h3 className="blog-card-title">{title}</h3>
          <p className="blog-card-excerpt">{excerpt}</p>
          <button onClick={handleShow} className="btn btn-link blog-card-link">
            Read more
          </button>
        </div>
      </div>

      {/* Bootstrap Modal */}
      <Modal show={showModal} onHide={handleClose} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <img src={imageUrl} alt={title} style={{ width: "100%", marginBottom: "20px" }} />
          <p>{fullText}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default BlogPostCard;
