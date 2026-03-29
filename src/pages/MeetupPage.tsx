export default function MeetupPage() {
  return (
    <div className="p-6 text-center">
      <h1 className="text-3xl font-bold mb-6">AWS Meetup</h1>

      <p className="mb-6 text-gray-300">
        Register for our upcoming AWS Cloud Club events.
      </p>

      <a
        href="https://www.meetup.com/aws-cloud-club-at-manipal-university-jaipur/events/313966432/?utm_medium=referral&utm_campaign=announce_event&utm_source=link&utm_version=v2&member_id=476898089" // 🔁 replace with your real event link
        target="_blank"
        rel="noopener noreferrer"
        className="aws-button-primary px-6 py-3"
      >
        Register on Meetup 🚀
      </a>
    </div>
  );
}
