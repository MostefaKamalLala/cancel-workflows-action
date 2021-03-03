const core = require('@actions/core');
const github = require('@actions/github');

async function run(): Promise<void> {
  try {
    const github_token: string = core.getInput('github_token')
    const workflow_run_id: string = core.getInput('workflow_run_id')
    core.debug(`github_token: ${github_token} `) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    core.debug(`workflow_run_id: ${workflow_run_id} `) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true

    core.setOutput('time', new Date().toTimeString())
    const context = github.context


    const octokit = github.getOctokit(github_token)
    var runs = await octokit.actions.listWorkflowRunsForRepo({
      owner: context.repo.owner,
      repo: context.repo.repo
    });

    core.debug(runs)

  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
