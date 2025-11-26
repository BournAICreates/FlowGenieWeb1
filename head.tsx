export default function Head() {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html: `
            window.CHIPP_APP_URL = "https://flowy-10030118.chipp.ai";
            window.CHIPP_APP_ID = 10030118;
          `,
        }}
      />
      <link rel="stylesheet" href="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.css" />
      <script defer src="https://storage.googleapis.com/chipp-chat-widget-assets/build/bundle.js"></script>
    </>
  )
}
