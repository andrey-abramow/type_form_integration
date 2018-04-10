import jira from './client'

class Issue {

  static find (issueNumber) {
    if (process.env.NODE_ENV == 'test')
      return
    jira.findIssue(issueNumber)
      .then(issue => {
        console.log(issue.fields);
      })
      .catch(err => {
        console.error(err);
      });
  }

  static create (data) {
    if (process.env.NODE_ENV == 'test')
      return

    issueData = {
      "fields": {
        "project": {
          "key": "RE"
        },
        "summary": data.name,
        "description": data.description,
        "issuetype": {
          "name": "Task"
        },
        "priority": {
          "name": "Low"
        },
        "assignee": {
          "name": "andrey"
        },
        "reporter": {
          "name": "andrey"
        }
      }
    }

    jira.addNewIssue(issueData)
      .then(issue => {
        console.log(issue);
      })
      .catch(err => {
        console.error(err);
      });
  }

}
export default Issue;
