document.getElementById('issueInputForm').addEventListener('submit',saveIssue);

function saveIssue(e) {
    var issueDesc = document.getElementById('issueDescInput').value;
    var issueSeverity = document.getElementById('issueSeverityInput').value;
    var issueAssignedTo = document.getElementById('issueAssignedToInput').value;
    var issueId = chance.guid(); //ChanceJS built function
    var issueStatus = 'Open';

    var issue = {
        id = issueId,
        desc = issueDesc,
        severity = issueSeverity,
        assignedTo = issueAssignedTo,
        status = issueStatus
    }

    if(localStorage.getItem('issue') == null) {
        var issues = [];
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues)); 
    } else {
        var issues = JSON.parse(localStorage.getItem(issues));
        issues.push(issue);
        localStorage.setItem('issues',JSON.stringify(issues));
    }

    document.getElementById('issueInputForm').reset();

    fetchIssues();

    e.preventDefault();
}


function fetchIssues() {
    const issues = JSON.parse(localStorage.getItem('issues'));
    const issuesList = document.getElementById('issuesList');

    issuesList.innerHTML = '';

    for(let i = 0; i < issues-length; i++) {
        var id = issues[i].id;
        var desc = issues[i].description;
        var severity = issues[i].severity;
        var assignedTo = issues[i].assignedTo;
        var status = issues[i].status;

        issuesList.innerHTML = '<div class="well">' + 
        '<h6>Issue ID: ' + id + '</h6>' 
        + '<p><span class="label label-info">' + status + '</span></p>'
        + '<h3>' + desc + '</h3>'
        + '<p><span class="glyphicon glyphicon-time">' + severity + '</span></p>'
        + '<p><span class="glyphicon glyphicon-user">' + assignedTo + '</span></p>'
        + '<a href="#" onclick="setStatusClosed(\''+id+'\')" class="btn btn-warning">Close</a>' 
        + '<a href="#" onclick="deleteIssue()" class="btn btn-danger">Delete</a>' 
        + '</div>';
    }

}