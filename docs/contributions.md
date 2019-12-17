# Contribution/Development Practices
### Below is a general checklist/guide to help developers when working on a feature. 
### Please follow the guide to ensure that the codebase is consistent and up to development standards. 

## Creating a new issue
All features/bug_fixes/documentation_changes start from creating a new issue. Use github's built issue manager to create a new issue.

Make sure you provide a detailed description of the task. Also don't forget to attach the accompanying milestone and project to the issue. 

## Assigning Tasks
Tasks can be assigned by group leaders. 
If you want to claim a task, you must assign yourself(usually on a first come first serve basis).

## Working on the Task
There is a basic 4 step process to working on any task.

### 1. Ensure that you are assigned to the task
### 2. Create a new branch using the following format
```
${ISSUE_TYPE}_${ISSUE_NUMBER}_${ISSUE_NAME}
```
- Where ISSUE_TYPE is an enum(feature, bug_fix, hot_fix, doc_change)
- And ISSUE_NUMBER and ISSUE_NAME correspond to the issue post on github.

### 3. Work on that branch seperately. When ready, create a Pull Request on GitHub. 
Checkout that branch locally
```
git checkout branch_name
```
## DO NOT MERGE BY YOURSELF UNLESS GIVEN PERMISSION!

### 4. After your code has been peer-reviewed and approved, rebase your commits against the development branch(origin/develop) and you will be merged in.
```
git rebase -i origin/develop
``` 

## MERGE REQUEST CHECKLIST
- [ ] Did I create/reference someone's issue
- [ ] Did I claim the task(either through self-assignment or delegation)
- [ ] Did I create a new branch referencing the issue 
- [ ] Did I satisfy all the requirements of the issue
- [ ] Did I create a new pull request referencing the issue
- [ ] Did I complete the peer-reviewed changes/suggestions
- [ ] Did I rebase against the development branch

## Make sure to ask any questions if you are unsure about anything.