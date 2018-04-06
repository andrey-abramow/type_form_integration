import JiraApi from 'jira-client';

var jira = new JiraApi({
  protocol: 'https',
  host: process.env.JIRA_HOST,
  username: process.env.JIRA_USERNAME,
  password: process.env.JIRA_PASSWORD,
  strictSSL: true
});
export default jira;
