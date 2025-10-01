export default function ThanksPage({
  searchParams,
}: {
  searchParams: { confirmed?: string };
}) {
  const isConfirmed = searchParams?.confirmed === "1";
  const isError = searchParams?.confirmed === "0";

  return (
    <main className="mx-auto max-w-3xl px-6 py-16 text-center">
      {!isConfirmed && !isError && (
        <>
          <h1 className="text-4xl font-bold mb-4">You’re In! ✅</h1>
          <p className="text-lg text-gray-700 mb-6">
            Thanks for joining <strong>YardPlaybook</strong>.
          </p>

          <div className="mx-auto max-w-2xl text-left bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">What happens next?</h2>
            <ol className="list-decimal ml-6 space-y-2 text-gray-800">
              <li>
                <strong>Check your inbox</strong> for a confirmation email. Click the confirm
                button to finish subscribing.
              </li>
              <li>
                You’ll get the <strong>Seasonal Lawn Playbook</strong> download link right after
                confirmation.
              </li>
              <li>
                We’ll send <strong>timely yard reminders</strong> when it matters most—no fluff.
              </li>
            </ol>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Didn’t get the email? Check spam/promotions or add{" "}
            <em>coach@yardplaybook.com</em> to contacts.
          </p>
        </>
      )}

      {isConfirmed && (
        <>
          <h1 className="text-4xl font-bold mb-4">Subscription Confirmed 🎉</h1>
          <p className="text-lg text-gray-700 mb-6">
            You’re all set. Welcome to <strong>YardPlaybook</strong>—your lawn’s new unfair advantage.
          </p>

          <div className="mx-auto max-w-2xl text-left bg-white shadow rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-3">Your Next Steps</h2>
            <ol className="list-decimal ml-6 space-y-2 text-gray-800">
              <li>
                <strong>Download the Seasonal Lawn Playbook</strong> (PDF) and stick it in your garage.
              </li>
              <li>
                Watch for <strong>coach’s timely yard reminders</strong> in your inbox.
              </li>
              <li>
                Start with a quick win:{" "}
                <a className="text-green-800 underline" href="/blog/overseeding">
                  When to Overseed Your Lawn (By Region)
                </a>
                .
              </li>
            </ol>

            {/* If you have the PDF ready, put it in /public and link it here */}
            <a
              href="/playbook.pdf"
              className="inline-block mt-5 bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800"
            >
              Download the Seasonal Lawn Playbook
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6">
            Tip: Add <em>coach@yardplaybook.com</em> to your contacts so reminders never land in spam.
          </p>
        </>
      )}

      {isError && (
        <>
          <h1 className="text-4xl font-bold mb-4">Something Went Wrong 😕</h1>
          <p className="text-lg text-gray-700 mb-6">
            We couldn’t process your subscription. Please try again.
          </p>
          <a
            href="/"
            className="inline-block bg-green-700 text-white px-5 py-3 rounded-lg font-semibold hover:bg-green-800"
          >
            Back to Home
          </a>
        </>
      )}
    </main>
  );
}
