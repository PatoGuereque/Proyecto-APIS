/* eslint-disable no-unused-vars */
export default ({ name, email }) => ({
  fromEmail: 'sharon.mosley@tec-itesm.org',
  fromName: 'Sharon Mosley',
  subject: 'Financial Activity Report',
  letter: 'S',
  emailTemplateHtml: `    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
    <html>
    <head>
    	<title>Account Alert</title>
    </head>
    <body>
		
		<p>Good day ${name},</p>

		<p>Please find attached the 2021 financial report for your perusal.</p>

		<p>Thank you. Regards,</p>

		<p>Ms. Sharon Mosley. ITESM</p>

		<hr />

		<img height="100" src='https://www.linkpicture.com/q/Screen-Shot-2021-11-22-at-19.52.54.png' type='image'>


    </body>
    </html>`,
});
