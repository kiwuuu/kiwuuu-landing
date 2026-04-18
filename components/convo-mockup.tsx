const BUBBLES: { from: "user" | "bot"; text: string; extra?: string[] }[] = [
  { from: "user", text: "Hi! Can I get an appointment tomorrow?" },
  { from: "bot", text: "New or returning patient? 😊" },
  { from: "user", text: "New patient" },
  {
    from: "bot",
    text: "I have slots available:",
    extra: ["Tomorrow · 9:00 AM", "Tomorrow · 2:30 PM", "Day after · 11:00 AM"],
  },
  { from: "user", text: "Tomorrow 9 AM please!" },
  { from: "bot", text: "Confirmed! 📅 See you tomorrow at 9 AM. Reminder sent." },
];

export function ConvoMockup() {
  return (
    <div className="w-full max-w-sm overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-2xl">
      <div className="flex items-center gap-3 bg-[#075E54] px-4 py-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#25D366] text-sm font-bold text-white">
          K
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Kiwuuu Dental</p>
          <p className="text-xs text-[#ACE8D6]">typically replies instantly</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 bg-[#ECE5DD] px-4 py-4">
        {BUBBLES.map((b, i) => (
          <div
            key={i}
            className={`flex flex-col gap-1 ${b.from === "user" ? "items-end" : "items-start"}`}
          >
            <div
              className={`max-w-[82%] rounded-2xl px-4 py-2.5 text-sm text-[#111] shadow-sm ${
                b.from === "user"
                  ? "rounded-tr-sm bg-[#DCF8C6]"
                  : "rounded-tl-sm bg-white"
              }`}
            >
              {b.text}
              {b.extra && (
                <ul className="mt-2 space-y-1.5">
                  {b.extra.map((slot) => (
                    <li
                      key={slot}
                      className="cursor-pointer rounded-lg border border-[#25D366] px-3 py-1.5 text-center text-xs font-medium text-[#075E54] hover:bg-[#f0faf3]"
                    >
                      {slot}
                    </li>
                  ))}
                </ul>
              )}
              <span className="mt-1 block text-right text-[10px] text-[#667781]">
                {b.from === "user" ? "✓✓" : ""}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
