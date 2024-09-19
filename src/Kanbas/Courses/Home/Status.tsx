export default function CourseStatus() {
    return (
      <div id="wd-course-status">
        <h2>Course Status</h2>
        <div style={{ display: 'flex'}}>
          <button>Unpublish</button>
          <button style={{ marginLeft: '4px' }}>Publish</button>
        </div>
        <div style={{ marginTop: '20px' }}>
          <button style={{ display: 'block'}}>Import Existing Content</button>
          <button style={{ display: 'block'}}>Import from Commons</button>
          <button style={{ display: 'block'}}>Choose Home Page</button>
          <button style={{ display: 'block'}}>View Course Stream</button>
          <button style={{ display: 'block'}}>New Announcement</button>
          <button style={{ display: 'block'}}>New Analytics</button>
          <button style={{ display: 'block' }}>View Course Notifications</button>
        </div>
      </div>
    );
  }
  