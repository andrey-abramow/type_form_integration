import jira from './client'
import http from 'http';
import https from 'https';
import { URL } from 'url'
import {appConfig} from '../../config'

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
    var client = http;
    let url = new URL(data.url);
    if (url.toString().indexOf("https") === 0){
      client = https;
    }
    client.get(data.url, response => {
      jira.addAttachmentOnIssue(data.issueId, response)
    });
  };

}
export default Issue;
