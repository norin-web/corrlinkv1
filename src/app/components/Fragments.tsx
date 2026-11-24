/** Small pieces of the app UI rebuilt in HTML. Text follows the app screens; the assistant answer is shortened to match the Privacy Policy (no push notifications). */

export function FilterFragment() {
  return (
    <div className="frag frag--list" aria-hidden="true">
      <div className="seg">
        <span className="seg__on">All</span>
        <span>Unread</span>
        <span>In review</span>
      </div>
      <div className="row">
        <span className="av">DB</span>
        <span className="row__body">
          <b>Danielle Brooks</b>
          <i>Happy birthday to Nate! Tell him I dr…</i>
        </span>
        <span className="row__meta"><em>9:14 AM</em><span className="dot">2</span></span>
      </div>
      <div className="row">
        <span className="av">MH</span>
        <span className="row__body">
          <b>Marcus Hill</b>
          <i>You: Mailing the photos from the park to…</i>
          <span className="tag">In review by facility</span>
        </span>
        <span className="row__meta"><em>Yesterday</em></span>
      </div>
    </div>
  );
}

export function StatusFragment() {
  return (
    <div className="frag frag--chat" aria-hidden="true">
      <span className="pill">Messages are reviewed by the facility</span>
      <span className="bub bub--out">He made you a card with a dinosaur on it. We’re mailing it tomorrow.</span>
      <span className="read">9:10 AM · <b>Read</b></span>
      <span className="bub bub--in">Got the drawing! It’s on the wall next to my bunk now.</span>
    </div>
  );
}

export function AskFragment() {
  return (
    <div className="frag frag--glass" aria-hidden="true">
      <span className="bub bub--out">Why is my message still in review?</span>
      <span className="bub bub--in">Facilities may review messages before delivery, and review can take time. The status changes when it’s delivered or rejected.</span>
    </div>
  );
}

export function DraftFragment() {
  return (
    <div className="frag frag--glass" aria-hidden="true">
      <div className="draft">
        <b className="draft__h">✦ Suggested draft</b>
        <span>Happy 8th birthday to Nate! He spent all week on your card. The dinosaur is wearing a party hat…</span>
        <span className="draft__btns"><span className="b1">Use draft</span><span className="b2">Rewrite</span></span>
      </div>
    </div>
  );
}

export function EnhanceFragment() {
  return (
    <div className="frag frag--glass" aria-hidden="true">
      <div className="draft">
        <b className="draft__h">Your prompt</b>
        <span className="field">how do i add my brother hes in cook county</span>
        <span className="chips"><span className="c1">✓ Add details</span><span>Shorter</span><span>Rewrite</span></span>
      </div>
    </div>
  );
}
