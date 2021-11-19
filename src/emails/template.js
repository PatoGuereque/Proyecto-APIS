export default ({ name }) => ({
  fromEmail: 'accounts@ebay-support.com',
  fromName: 'eBay Support',
  subject: 'Secure your account',
  letter: 'e',
  emailTemplateHtml: `Hi ${name}`,
});
