export default ({ name, email }) => ({
  fromEmail: 'accounts@google-support.com',
  fromName: 'Google Support',
  subject: 'Suspicious Login',
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
    			<table bgcolor="#4184F3" border="0" cellpadding="0" cellspacing="0" style="min-width: 332px; max-width: 600px; border-width: 1px 1px 0px; border-top-style: solid; border-right-style: solid; border-left-style: solid; border-top-color: rgb(224, 224, 224); border-right-color: rgb(224, 224, 224); border-left-color: rgb(224, 224, 224); border-top-left-radius: 3px; border-top-right-radius: 3px;" width="100%">
    				<tbody>
    					<tr>
    						<td colspan="3" height="72px" style="margin: 0px;">&nbsp;</td>
    					</tr>
    					<tr>
    						<td style="margin: 0px;" width="32px">&nbsp;</td>
    						<td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 24px; color: rgb(255, 255, 255); line-height: 1.25;">New sign-in from Chrome OS</td>
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
    									<td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 13px; color: rgb(32, 32, 32); line-height: 1.5;">Your Google Account&nbsp;<span style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; line-height: 19.2px; background-color: rgb(250, 250, 250);">${email}&nbsp;</span>was just used to sign in on&nbsp;<span style="white-space: nowrap;">Chrome OS</span>.
    									<table border="0" cellpadding="0" cellspacing="0" style="margin-top: 48px; margin-bottom: 48px;">
    										<tbody>
    											<tr valign="middle">
    												<td style="font-family: arial, sans-serif; margin: 0px;" width="32px">&nbsp;</td>
    												<td align="center" style="font-family: arial, sans-serif; margin: 0px;"><img class="CToWUd" height="48px" src="https://ci6.googleusercontent.com/proxy/_ehxLExCa2FPeTKuNVAgMUxyx7YBxMq8-qickdiS6h0GI2UChu_KZURQgNm3-OuvpRjUg26eTgHNny2H1gs6Pzzy81YKOLOVHegzDqMfEMQVAWTuszLuOL68hqTN=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/anonymous_profile_photo.png" style="width: 48px; min-height: 48px; display: block; border-radius: 50%;" width="48px" /></td>
    												<td style="font-family: arial, sans-serif; margin: 0px;" width="16px">&nbsp;</td>
    												<td style="margin: 0px;"><span style="line-height: 19.2px;">${name}</span><br style="font-family: arial, sans-serif; line-height: 19.2px; background-color: rgb(250, 250, 250);" />
    												<span style="line-height: 1.2;">${email}</span></td>
    											</tr>
    											<tr valign="middle">
    												<td height="24px" style="font-family: arial, sans-serif; margin: 0px;" width="32px">&nbsp;</td>
    												<td align="center" height="24px" style="font-family: arial, sans-serif; margin: 0px;"><img class="CToWUd" height="10px" src="https://ci4.googleusercontent.com/proxy/3v5djkrQw0eYYuEXwiOUoxXYc3R6bFSVEFNL0C3YbDgAYCp7sUIL4fxyDZ8RADuKX3gZ4_z6bAmrACIqNYpHa95AfUrSskjfkEf4nDXRH7A=s0-d-e1-ft#https://www.gstatic.com/accountalerts/email/down_arrow.png" style="width: 4px; min-height: 10px; display: block;" width="4px" /></td>
    											</tr>
    											<tr valign="top">
    												<td style="font-family: arial, sans-serif; margin: 0px;" width="32px">&nbsp;</td>
    												<td align="center" style="font-family: arial, sans-serif; margin: 0px;"><img class="CToWUd" height="48px" src="https://ci3.googleusercontent.com/proxy/MeVln3V_GSBpyT0OD_Jp5n_RRCL5UwlTk8OLiq6akdHukWHGvlg6rK20Jo4Jq2MF02f5I45hJU0lcdGgQ4oPXJRDG0NFNlMKRsKzde27ogalxsptrA_ksZiVXUbv-FOPwFEQ=s0-d-e1-ft#https://www.gstatic.com/accountalerts/devices/chrome_device_wallpaper_big.png" style="width: 48px; min-height: 48px; display: block;" width="48px" /></td>
    												<td style="font-family: arial, sans-serif; margin: 0px;" width="16px">&nbsp;</td>
    												<td style="font-family: arial, sans-serif; margin: 0px; line-height: 1.2;"><span style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; font-size: 16px;">Chrome OS</span><br />
    												<span style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; color: rgb(114, 114, 114);">Tuesday, 30 August 2016 12:54 (British Summer Time)<br />
    												Leeds, UK*</span></td>
    											</tr>
    										</tbody>
    									</table>
    									<b>Don&#39;t recognise this activity? if you don&#39;t recognise this device click the following pleace</b>
    
    									<p><a href="https://www.g00gle.com/chromeos/signup">click here</a></p>
    
    									<p><a href="https://www.g00gle.com/chromeos/review-devices">Review your recently used devices here</a></p>
    									&nbsp;.<br />
    									<br />
    									Why are we sending this? We take security very seriously and we want to keep you in the loop on important actions in your account.<br />
    									We were unable to determine whether you have used this browser or device with your account before. This can happen when you sign in for the first time on a new computer, phone or browser, when you use your browser&rsquo;s incognito or private browsing mode or clear your cookies or when somebody else is accessing your account.</td>
    								</tr>
    								<tr height="32px">
    								</tr>
    								<tr>
    									<td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; font-size: 13px; color: rgb(32, 32, 32); line-height: 1.5;">Best,<br />
    									The Google Accounts team</td>
    								</tr>
    								<tr height="16px">
    								</tr>
    								<tr>
    									<td style="margin: 0px;">
    									<table style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; font-size: 12px; color: rgb(185, 185, 185); line-height: 1.5;">
    										<tbody>
    											<tr>
    												<td style="font-family: arial, sans-serif; margin: 0px;">*The location is approximate and determined by the IP address it was coming from.</td>
    											</tr>
    											<tr>
    												<td style="font-family: arial, sans-serif; margin: 0px;">This email can&#39;t receive replies. To give us feedback on this alert,&nbsp;<a data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://support.google.com/accounts/contact/device_alert_feedback?hl%3Den-GB&amp;source=gmail&amp;ust=1472651710881000&amp;usg=AFQjCNEUbJSLGEaz_ktp9HoTcVIFm8z-iA" href="https://{{.URL}}" style="color: rgb(66, 133, 244); text-decoration: none;" target="_blank">click here</a>.<br />
    												For more information, visit the&nbsp;<a data-saferedirecturl="https://www.google.com/url?hl=en-GB&amp;q=https://support.google.com/accounts/answer/2733203&amp;source=gmail&amp;ust=1472651710881000&amp;usg=AFQjCNHmMF8Iy5zgwWq2DzKfF_HuaRRy-Q" href="https://{{.URL}}" style="color: rgb(66, 133, 244); text-decoration: none;" target="_blank">Google Accounts Help Centre</a>.</td>
    											</tr>
    										</tbody>
    									</table>
    									</td>
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
    		<tr>
    			<td style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; margin: 0px; max-width: 600px; font-size: 10px; color: rgb(188, 188, 188); line-height: 1.5;">&nbsp;</td>
    		</tr>
    		<tr>
    			<td style="margin: 0px;">
    			<table style="font-family: Roboto-Regular, Helvetica, Arial, sans-serif; font-size: 10px; color: rgb(102, 102, 102); line-height: 18px; padding-bottom: 10px;">
    				<tbody>
    					<tr>
    						<td style="font-family: arial, sans-serif; margin: 0px;">You have received this mandatory email service announcement to update you about important changes to your Google product or account.</td>
    					</tr>
    				</tbody>
    			</table>
    			</td>
    		</tr>
    	</tbody>
    </table>
    </body>
    </html>`,
});
