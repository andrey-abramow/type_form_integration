import jira from './client'
import { URL } from 'url'
import {appConfig} from '../../config'
import request from 'request'

class Issue {

  static find (issueNumber, callback) {
    if (process.env.NODE_ENV == 'test')
      return callback(null, {test: true})
    jira.findIssue(issueNumber)
      .then(issue => {
        callback(null, issue)
      })
      .catch(err => {
        callback(err)
      });
  }

  static create (data, callback) {
    if (process.env.NODE_ENV == 'test')
      return callback(null, {test: true});

    let issueData = {
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
          "name": appConfig.JIRA_ASSIGNEE
        },
        "reporter": {
          "name": appConfig.JIRA_REPORTER
        }
      }
    };

    jira.addNewIssue(issueData)
      .then(issue => {
        callback(null, issue)
        data.attachments.forEach((file_url) => this.appendAttachment({ issueId: issue.key, url: file_url }) )
      })
      .catch(err => {
        callback(err)
      });
  }

  static appendAttachment (data) {
    jira.addAttachmentOnIssue(data.issueId, request.get(data.url));
  };

}
export default Issue;
