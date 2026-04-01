export function waitlistEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>You're on the Tripma waitlist</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f0;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <tr>
            <td align="center" style="padding-bottom:32px;">
              <img src="https://tripma.app/name.svg" alt="Tripma" height="28" style="display:block;" />
            </td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;border-radius:20px 20px 0 0;padding:48px 48px 40px;text-align:center;">
              <p style="margin:0 0 16px;font-size:13px;font-weight:500;letter-spacing:0.15em;text-transform:uppercase;color:#04CE84;">
                You're in 🎉
              </p>
              <h1 style="margin:0 0 20px;font-size:36px;font-weight:700;line-height:1.1;color:#161616;letter-spacing:-0.02em;">
                Welcome to the<br/>Tripma waitlist.
              </h1>
              <p style="margin:0 auto;font-size:16px;font-weight:300;line-height:1.7;color:#666666;max-width:400px;">
                You just secured your spot for something that's going to change the way you and your friends travel. For real.
              </p>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;padding:0 48px 40px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding:28px 0;border-top:1px solid #eeeeee;border-bottom:1px solid #eeeeee;">
                    <p style="margin:0 0 10px;font-size:11px;font-weight:500;letter-spacing:0.12em;text-transform:uppercase;color:#aaaaaa;">
                      A word from the founder
                    </p>
                    <p style="margin:0;font-size:16px;font-weight:300;line-height:1.8;color:#444444;">
                      Hey 👋 I'm Mehdi, the founder of Tripma. I built this because I was tired of the chaos that comes with planning trips with friends. The endless group chats, the Google Docs nobody updates, the "wait, what are we doing again?" Tripma fixes all of that. I can't wait for you to try it.
                    </p>
                    <p style="margin:20px 0 0;font-size:15px;font-weight:500;color:#161616;">
                      Mehdi Ougadi
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="background-color:#ffffff;padding:0 48px 48px;border-radius:0 0 20px 20px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="padding-top:32px;">
                    <p style="margin:0 0 12px;font-size:13px;font-weight:500;color:#aaaaaa;text-transform:uppercase;letter-spacing:0.1em;">What's next</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                          <p style="margin:0;font-size:14px;color:#555555;">
                            <span style="color:#04CE84;margin-right:10px;">01</span> You'll get early access before the public launch
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;">
                          <p style="margin:0;font-size:14px;color:#555555;">
                            <span style="color:#04CE84;margin-right:10px;">02</span> We'll keep you updated on our progress
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="padding:10px 0;">
                          <p style="margin:0;font-size:14px;color:#555555;">
                            <span style="color:#04CE84;margin-right:10px;">03</span> Follow <a href="https://instagram.com/tripma.app" style="color:#A253FE;text-decoration:none;">@tripma.app</a> for behind the scenes
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td style="padding-top:32px;text-align:center;">
                    <a href="https://tripma.app" style="display:inline-block;background-color:#A253FE;color:#ffffff;font-size:14px;font-weight:500;text-decoration:none;padding:14px 36px;border-radius:12px;">
                      Visit tripma.app
                    </a>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <tr>
            <td style="padding:32px 0;text-align:center;">
              <p style="margin:0 0 6px;font-size:12px;color:#aaaaaa;">
                You're receiving this because you signed up at tripma.app
              </p>
              <p style="margin:0;font-size:12px;color:#aaaaaa;">
                Questions? <a href="mailto:support@tripma.app" style="color:#A253FE;text-decoration:none;">support@tripma.app</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}