/**
 * This is the main entrypoint to your Probot app
 * @param {import('probot').Probot} app
 */

 module.exports = (app) => {
  app.log.info('App has loaded');
  app.on('issues.opened', async (context) => {
    context.octokit.issues.createComment(
      context.issue({
        body: 'Thanks for opening this issue!',
      })
    );
  });
};