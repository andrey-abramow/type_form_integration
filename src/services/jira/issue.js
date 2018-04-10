import jira from './client'
import http from 'http';
import https from 'https';
import { URL } from 'url'

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
      return;

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
          "name": "andrey"
        },
        "reporter": {
          "name": "andrey"
        }
      }
    };

    jira.addNewIssue(issueData)
      .then(issue => {
        data.attachments.forEach((file_url) => this.appendAttachment({ issueId: issue.key, url: file_url }) )
      })
      .catch(err => {
        console.error(err);
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
