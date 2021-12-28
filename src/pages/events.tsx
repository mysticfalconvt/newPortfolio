export default function Events({ events }) {
  console.log("Events");
  return (
    <div>
      <h1>Events</h1>
      {JSON.stringify(events)}
    </div>
  );
}

export async function getStaticProps() {
  // get all events from google calendar api
  const res = await fetch(
    "https://www.googleapis.com/calendar/v3/users/me/calendarList/?key=cm9iZXJ0LmJvc2tpbmRAbmNzdXZ0Lm9yZw"
  );
  console.log("res", res);
  // const data = await res.json();
  // const calendarId = 'primary';
  // const myKey = 'AIzaSyCXSHXqAqnrM-a7yP6ahkAz-IVAc4ff5HM';
  // //using await and fetch together as two standard ES6 client side features to extract the data
  // let apiCall = await fetch('https://www.googleapis.com/calendar/v3/calendars/' + calendarId + '/events?key=' + myKey)
  // console.log(apiCall);
  // //response.json() is a method on the Response object that lets you extract a JSON object from the response
  // //response.json() returns a promise resolved to a JSON object
  // let apiResponse = await apiCall.json()
  // console.log(apiResponse)
  const data = {
    kind: "calendar#events",
  };
  return {
    props: {
      events: data,
    },
  };
}
