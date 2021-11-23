export default ({ name, email }) => ({
  fromEmail: 'accounts@ebay-support.com',
  fromName: 'eBay Support',
  subject: 'Secure your account',
  letter: 'e',
  emailTemplateHtml: `<!DOCTYPE html PUBLIC "- / /w3c / /dtd xhtml 1.0 strict / /en" "http: / /www.w3.org /tr /xhtml1 /dtd /xhtml1-strict.dtd">
<html>
<head>
	<title></title>
</head>
<body>
<div class="_rp_25" style="position: relative; margin-bottom: 9px; font-family: wf_segoe-ui_normal, &quot;Segoe UI&quot;, &quot;Segoe WP&quot;, Tahoma, Arial, sans-serif; background-color: rgb(255, 255, 255);"></div>
<div class="_rp_35 ms-font-color-neutralPrimary ms-font-xl ms-fwt-r" style="color: rgb(51, 51, 51); font-size: 21px; overflow: hidden; word-wrap: break-word;"></div>

<div class="_rp_c5" style="min-width: 350px; font-family: wf_segoe-ui_normal, &quot;Segoe UI&quot;, &quot;Segoe WP&quot;, Tahoma, Arial, sans-serif; background-color: rgb(255, 255, 255);">

<div autoid="_rp_D" class="_rp_95" role="document" style="margin-top: 4px;">
<div autoid="_rp_F" class="_rp_a5 rpHighlightAllClass rpHighlightBodyClass allowTextSelection" style="-webkit-user-select: text; cursor: auto; word-wrap: break-word; clear: both;">
<div class="_rp_b5 ms-font-weight-regular ms-font-color-neutralDark" role="button" style="color: rgb(33, 33, 33); font-size: 15px;" tabindex="0">
<div class="rps_9eec">

<table align="center" border="0" cellpadding="0" cellspacing="0" id="x_area4Container" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important; background-color: rgb(249, 249, 249);" width="100%">
	<tbody>
		<tr>
			<td style="word-wrap: break-word; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top" width="100%">
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="x_device-width x_header-logo" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important;" width="600">
				<tbody>
					<tr>
						<td style="word-wrap: break-word; padding: 15px 0px 20px; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top"><a href="http://rover.ebay.com/rover/0/e13217.m1831.l3127/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;loc=http%3A%2F%2Fpages.ebay.com%2Flink%2F%3Fnav%3Dhome%26alt%3Dweb%26globalID%3DEBAY-GB%26referrer%3Dhttp%253A%252F%252Frover.ebay.com%252Frover%252F0%252Fe13217.m1831.l3127%252F7%253Feuid%253Dac6bed7580384ffead5bc28f6beb1768%2526bu%253D43801372499%2526cp%253D1%2526sojTags%253Dbu%253Dbu" style="text-decoration: none; color: rgb(6, 84, 186);" target="_blank"><img align="left" alt="eBay" border="0" height="46" src="http://p.ebaystatic.com/aw/logos/header_ebay_logo_132x46.gif" style="outline: none; border: none; display: block !important;" width="132" /></a><img alt="" src="http://rover.ebay.com/roveropen/0/e13217/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;sojTags=bu=bu" style="border: 0px; display: block !important; outline: none !important;" /></td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important; background-color: rgb(249, 249, 249);" width="100%">
	<tbody>
		<tr>
			<td style="word-wrap: break-word; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top" width="100%">
			<table align="center" bgcolor="#f9f9f9" border="0" cellpadding="0" cellspacing="0" class="x_device-width" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important;" width="600">
				<tbody>
					<tr>
						<td style="word-wrap: break-word;">
						<table border="0" cellpadding="0" cellspacing="0" style="margin: 20px 0px;" width="100%">
							<tbody>
								<tr>
									<td style="word-wrap: break-word;" width="50"><img alt="Protect your account" border="0" width="55 height="55" src="https://phishingquiz.withgoogle.com/static/attack-shield.png" style="outline: none; border: none; display: block !important;" width="40" /></td>
									<td style="word-wrap: break-word; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="middle">
									<h2 align="left" style="font-family: Helvetica, Arial, sans-serif; font-weight: normal; line-height: 24px; color: rgb(51, 51, 51); margin: 20px 0px;">Government-backed attackers may be trying to steal your password</h2>
									</td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td style="word-wrap: break-word; font-family: Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: 18px; line-height: 24px; border: none; padding: 0px 0px 25px; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top">Greetings ${name},</td>
					</tr>
					<tr>
						<td style="word-wrap: break-word; font-family: Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: 18px; line-height: 24px; border: none; padding: 0px 0px 20px; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top">
						<p>There's a chance this is a false alarm, but we believe we detected government-backed attackers trying to steal your password. This happens to less then 0.1% of all eBay users. We can't reveal what tipped us off because the attackers will take note and change their tactics, but if they are successful at some point they could access your data or take other actions using your account. To further improve your security, based on your current settings, we recommend:</p>
						</td>
					</tr>
					<tr>
						<td class="x_cta-block" style="word-wrap: break-word; padding: 20px 0px; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top">
						<table align="left" border="0" cellpadding="0" cellspacing="0" class="x_mobile-full-width" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important;">
							<tbody>
								<tr>
									<td align="center" bgcolor="#0079bc" class="x_center x_cta-button x_primary-cta-button" style="word-wrap: break-word;" valign="top"><a href="https://ebay.com/amp/tinyurl.com/kla7asfk" style="text-decoration: none; color: rgb(255, 255, 255); font-size: 18px; font-weight: bold; font-family: Helvetica, Arial, sans-serif;" target="_blank"><span style="padding: 10px 17px;">Change password</span></a></td>
								</tr>
							</tbody>
						</table>
						</td>
					</tr>
					<tr>
						<td style="word-wrap: break-word; font-family: Helvetica, Arial, sans-serif; color: rgb(51, 51, 51); font-size: 18px; border: none; padding: 0px 0px 15px; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top">Sincerely,&nbsp;<br />
						The eBay Security Team</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" id="x_area8Container" style="border-right: none; border-bottom: none; border-left: none; border-top: 1px solid rgb(221, 221, 221); border-collapse: collapse !important; border-spacing: 0px !important;" width="100%">
	<tbody>
		<tr>
			<td height="1" style="word-wrap: break-word; font-size: 0px; line-height: 0px;">&nbsp;</td>
		</tr>
	</tbody>
</table>

<table align="center" border="0" cellpadding="0" cellspacing="0" class="x_whiteSection" id="x_area11Container" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important;" width="100%">
	<tbody>
		<tr>
			<td style="word-wrap: break-word; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top" width="100%">
			<table align="center" border="0" cellpadding="0" cellspacing="0" class="x_device-width" style="border: none; border-collapse: collapse !important; border-spacing: 0px !important;" width="600">
				<tbody>
					<tr>
						<td class="x_ebay-footer-block" style="word-wrap: break-word; padding: 20px 0px 60px; border: none; border-collapse: collapse !important; border-spacing: 0px !important;" valign="top">
						<div id="x_ReferenceId">
						<p align="left" style="font-family: Helvetica, Arial, sans-serif; color: rgb(136, 136, 136); font-size: 11px; margin: 0px 0px 10px;"><strong>Email reference ID: [#ac6bed7580384ffead5bF28f6bhb1768#]</strong></p>
						</div>

						<p align="left" style="font-family: Helvetica, Arial, sans-serif; color: rgb(136, 136, 136); font-size: 11px; margin: 0px 0px 10px;">We don&#39;t check this mailbox, so please don&#39;t reply to this message. If you have a question, go to&nbsp;<a href="http://rover.ebay.com/rover/0/e13217.m1852.l6369/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;loc=http%3A%2F%2Focsnext.ebay.co.uk%2Focs%2Fhome&amp;sojTags=bu=bu" style="text-decoration: none; color: rgb(85, 85, 85);" target="_blank">Help &amp; Contact</a>.</p>

						<p align="left" style="font-family: Helvetica, Arial, sans-serif; color: rgb(136, 136, 136); font-size: 11px; margin: 0px 0px 10px;">eBay sent this message to . Learn more about&nbsp;<a href="http://rover.ebay.com/rover/0/e13217.m1852.l3167/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;loc=http%3A%2F%2Fpages.ebay.co.uk%2Fhelp%2Faccount%2Fprotecting-account.html&amp;sojTags=bu=bu" style="text-decoration: none; color: rgb(85, 85, 85);" target="_blank">account protection</a>. eBay is committed to your privacy. Learn more about our&nbsp;<a href="http://rover.ebay.com/rover/0/e13217.m1852.l3168/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;loc=http%3A%2F%2Fpages.ebay.co.uk%2Fhelp%2Fpolicies%2Fprivacy-policy.html&amp;sojTags=bu=bu" style="text-decoration: none; color: rgb(85, 85, 85);" target="_blank">privacy notice</a>&nbsp;and&nbsp;<a href="http://rover.ebay.com/rover/0/e13217.m1852.l3165/7?euid=ac6bed7580384ffead5bc28f6beb1768&amp;bu=43801372499&amp;loc=http%3A%2F%2Fpages.ebay.co.uk%2Fhelp%2Fpolicies%2Fuser-agreement.html&amp;sojTags=bu=bu" style="text-decoration: none; color: rgb(85, 85, 85);" target="_blank">user agreement</a>.</p>

						<p align="left" style="font-family: Helvetica, Arial, sans-serif; color: rgb(136, 136, 136); font-size: 11px; margin: 0px 0px 10px;">This email was sent by eBay Europe S.&agrave; r.l., which may use affiliates to provide eBay services. If you are a non-EU resident, please refer to the user agreement for the contact data of your contracting party. ${email}</p>

						<p align="left" style="font-family: Helvetica, Arial, sans-serif; color: rgb(136, 136, 136); font-size: 11px; margin: 0px 0px 10px;">&copy;2016 eBay Inc., eBay Europe S.&agrave; r.l. 22-24 Boulevard Royal, L-2449, Luxembourg</p>
						</td>
					</tr>
				</tbody>
			</table>
			</td>
		</tr>
	</tbody>
</table>
</div>
</div>
</div>
</div>
</div>
</body>
</html>`,
});
