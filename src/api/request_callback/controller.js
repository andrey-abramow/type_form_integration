import Issue from '../../services/jira/issue';
var newIssue =
  {
      "fields": {
        "project": {
          "key": "RE"
        },
        "summary": "Test summary",
        "description": "Test description",
        "customfield_10016": "http://www.atlassian.com",

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
        },
      }
  }
export const create = ({ body }, res, next) => {
  Issue.find('RE-184');
  res.status(201).json(body)
}

