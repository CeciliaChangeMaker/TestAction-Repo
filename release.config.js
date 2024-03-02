module.exports = {
    branches: "main",
    repositoryUrl: "https://github.com/CeciliaChangeMaker/TestAction-Repo.git,
    plugins: [
      '@semantic-release/commit-analyzer',
      '@semantic-release/release-notes-generator',
      '@semantic-release/git',
      '@semantic-release/github']
     }