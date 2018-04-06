import jira from './client'

class Issue {
  static find (issueNumber) {
    jira.findIssue(issueNumber)
      .then(issue => {
        console.log(issue.fields);
      })
      .catch(err => {
        console.error(err);
      });
  }
  static create (data) {
    jira.addNewIssue(data)
      .then(issue => {
        console.log(issue);
      })
      .catch(err => {
        console.error(err);
      });
  }

}
export default Issue;
