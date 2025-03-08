import { useEffect } from "react";
import useEventStore from "../store/useEventStore";
import useNoticeStore from "../store/useNoticeStore";

const AdminDashboard = () => {
  const { events, fetchEvents, addEvent, deleteEvent } = useEventStore();
  const { notices, fetchNotices, addNotice, deleteNotice } = useNoticeStore();

  useEffect(() => {
    fetchEvents();
    fetchNotices();
  }, []);

  const handleAddEvent = () => {
    const newEvent = { title: "New Event", description: "Event details", date: new Date() };
    addEvent(newEvent);
  };

  const handleAddNotice = () => {
    const newNotice = { title: "New Notice", content: "Notice details" };
    addNotice(newNotice);
  };

  return (
    <div>
      <h2>Admin Dashboard</h2>

      {/* Events Management */}
      <h3>Manage Events</h3>
      <button onClick={handleAddEvent}>Add Event</button>
      {events.map((event) => (
        <div key={event._id}>
          <p>{event.title}</p>
          <button onClick={() => deleteEvent(event._id)}>Delete</button>
        </div>
      ))}

      {/* Notices Management */}
      <h3>Manage Notices</h3>
      <button onClick={handleAddNotice}>Add Notice</button>
      {notices.map((notice) => (
        <div key={notice._id}>
          <p>{notice.title}</p>
          <button onClick={() => deleteNotice(notice._id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
