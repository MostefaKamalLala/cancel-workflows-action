import * as core from '@actions/core'
import {wait} from './wait'

async function run(): Promise<void> {
  try {
    const github_token: string = core.getInput('github_token')
    const workflow_run_id: string = core.getInput('workflow_run_id')
    core.debug(`github_token: ${github_token} `) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    core.debug(`workflow_run_id: ${workflow_run_id} `) // debug is only output if you set the secret `ACTIONS_RUNNER_DEBUG` to true
    console.log(`github_token: ${github_token} `)
    console.log(`workflow_run_id: ${workflow_run_id} `)
    core.setOutput('time', new Date().toTimeString())
  } catch (error) {
    core.setFailed(error.message)
  }
}

run()
